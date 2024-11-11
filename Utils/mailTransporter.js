const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    auth:{
        user:process.env.SEND_MAIL,
        pass:process.env.MAIL_PASS
    }

})

module.exports = transporter