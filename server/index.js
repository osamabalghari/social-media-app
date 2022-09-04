const express = require("express")
const cors = require("cors")
const userRouter = require("./routes/user")
const postRouter = require("./routes/posts")
require("dotenv").config()
const connectDb = require("./db/database")

connectDb()

const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/auth", userRouter)
app.use("/api/post", postRouter)

app.listen(process.env.PORT, () => {
    console.log(`Port is Running on ${process.env.PORT}`);
})