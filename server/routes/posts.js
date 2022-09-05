const express = require("express")
const { createPost, getPost } = require("../controller/posts")
const { upload, userAuth } = require("../middleware/auth")

const router = express.Router()


router.post("/createpost", userAuth, upload, createPost)
router.get("/getpost", userAuth, getPost)


module.exports = router