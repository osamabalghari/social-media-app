const Post = require("../model/Posts")
const User = require("../model/User")

const createPost = async (req, res) => {
    try {
        const { caption, likes } = req.body

        const post = await Post.create({ caption, image: req.file.filename, likes, owner: req.user._id, })
        const user = await User.findById(req.user._id)

        user.posts.unshift(post._id)
        await user.save()
        res.status(200).json({ success: true })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

const getPost = async (req, res) => {
    const post = await Post.findById()
    console.log(post);

    res.status(200).json({ success: true, post })
}
module.exports = { createPost, getPost }