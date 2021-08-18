require('dotenv/config');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.mail.ru',
  port: 465,
  secure: true,
  auth: {
    user: `${process.env.LOGIN_MAIL}`,
    pass: `${process.env.PASSWORD_MAIL}`
  }
},
  {
    from: `${process.env.LOGIN_MAIL}`,
  }
);

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) console.log(err);
    console.log('Email sent: ', info)
  })
}

module.exports = mailer;