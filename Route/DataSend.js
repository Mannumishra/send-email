const { sendMail } = require("../Controllar/mailsend")

const Router = require("express").Router()

Router.post("/mail" ,sendMail)

module.exports = Router