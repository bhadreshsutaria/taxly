const express = require("express");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
var cors = require('cors')

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const route = express.Router();
const port = process.env.PORT || 5000;

app.use('/v1', route);
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtpout.secureserver.net",
    auth: {
        user: 'info@krakeninfotech.com',
        pass: '*********',
    },
    secure: true, // upgrades later with STARTTLS -- change this based on the PORT
});

route.post('/text-mail', (req, res) => {
    const { email } = req.body;
    console.log(req.body)
    const mailData = {
        from: 'info@krakeninfotech.com',
        to: email,
        subject: 'This is testing from taxly',
        html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>',
    };

    transporter.sendMail(mailData, (error, info) => {
        if (error) {
            return console.log(error);
        }
        res.status(200).send({ message: "Mail send", message_id: info.messageId });
    });
});
