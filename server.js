const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())

server.listen(process.env.PORT || 3030);

const nodeMailer = require("nodemailer")

const transporter = nodeMailer.createTransport({
    port:465,
    host:"smtp@gmail.com",
    auth:{
        user:"shrihariholey@gmail.com",
        pass:"mocc reax qzpk agks",
    },
    secure:true
})