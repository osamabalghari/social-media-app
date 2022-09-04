const User = require("../model/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const register = async (req, res) => {
    try {
        const { name, surname, email, password } = req.body
        const hash = bcrypt.hashSync(password, 10);
        const user = await User.create({ name, email, surname, password: hash })
        res.status(200).json({ success: true, user })

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

const signIn = async (req, res) => {
    try {
        const { _id, email, password } = req.body
        const user = await User.findOne({ email })
        const validate = bcrypt.compareSync(password, user.password)
        if (!email) {
            res.status(400).json({ success: false, message: "Please Sign Up you did not have any account" })
            return
        }
        if (!validate) {
            res.status(400).json({ success: false, message: "Password did not match" })
            return
        }

        const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, { expiresIn: "2h" });
        res.status(200).json({ success: true, message: "Successfully Log In", validate, token, user })

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

const getOneUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.user.email })
        res.status(200).json({ success: true, user })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}


const followUser = async (req, res) => {
    try {
        const userToFollow = await User.findById(req.params.id);
        const loggedInUser = await User.findById(req.user._id)
        if (!userToFollow) {
            res.status(400).json({ success: false, message: "User did not found" })
            return
        }
        if (loggedInUser.following.includes(userToFollow._id)) {
            const indexFollowing = loggedInUser.following.indexOf(userToFollow._id)
            loggedInUser.following.splice(indexFollowing, 1)
            const indexFollowers = userToFollow.followers.indexOf(loggedInUser._id)
            userToFollow.followers.splice(indexFollowers, 1)
            await loggedInUser.save()
            await userToFollow.save()
            res.status(200).json({ success: false, message: "You UnFollow this user" })
            return

        }
        loggedInUser.following.push(userToFollow._id)
        userToFollow.followers.push(loggedInUser._id)
        await loggedInUser.save()
        await userToFollow.save()
        res.status(200).json({ success: true, message: "User Followed" })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

module.exports = { register, signIn, getOneUser, followUser }


