const Post = require("../model/Posts")

const createPost = async (req, res) => {
    try {
        const { caption, image, createdAt, likes, comments, owner } = req.body

        const post = await Post.create({ caption, image, createdAt, likes, comments, owner })
        res.status(200).json({ success: true, post })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = { createPost }