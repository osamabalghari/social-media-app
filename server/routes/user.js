const express = require("express")
const router = express.Router()
const { register, signIn, getOneUser, followUser } = require("../controller/user")
const { userAuth } = require("../middleware/auth")


router.post("/register", register)
router.post("/signin", signIn)
router.get("/getuser", userAuth, getOneUser)
router.get("/follow/:id", userAuth, followUser)

module.exports = router