require("dotenv").config()
const jwt = require("jsonwebtoken")

const userAuth = (req, res, next) => {
    try {
        const token = req.headers.token
        const user = jwt.verify(token, process.env.SECRET_KEY);
        req.user = user
        if (!user) {
            res.status(400).json({ success: false, message: "User doesnot exist" })

        }
        next()
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}
module.exports = { userAuth }