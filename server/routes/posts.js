const express = require("express")
const { createPost } = require("../controller/posts")

const router = express.Router()


router.post("/createpost", createPost)


module.exports = router