const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user:"almazanbelen01@gmail.com",
        pass:"vcgj mnsw dqmu ckro"
    }
})

module.exports = transporter