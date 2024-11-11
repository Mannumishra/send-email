const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    auth:{
        user:"bbirthday314@gmail.com",
        pass:"gpdf bzzs kzpj wogi"
    }

})

module.exports = transporter