const nodemailer = require('nodemailer');
const Email = require('email-templates');

const transporter = nodemailer.createTransport({
    host: "mail.advancetranscription.com",
    port: 465,
    secure: true,
    auth: {
      user: "aadvance",
      pass: "#qb03d#pTJ"
    },
    tls: {
        rejectUnauthorized: false
    }
});

transporter.verify(function(error, success) {
    if (error) {
         console.log(error);
    } else {
         console.log('Server is ready to take our messages');
    }
 });

const email = new Email({
    message: {
        from: 'info@advancetranscription.com'
    },
    send: true,
    transport: transporter,
    preview: false
});

module.exports = email;
