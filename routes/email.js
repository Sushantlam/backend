
const express = require("express")
const router = express.Router()
const {createPost}= require("../controller/Email")

router.post("/", createPost)

module.exports= router
