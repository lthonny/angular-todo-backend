const nodemailer = require('nodemailer')

async function main(form) {
  console.log('form', form);
  // let testAccount = await nodemailer.createTestAccount();

  // let transporter = nodemailer.createTransport({
  //   host: "smtp.ethereal.email",
  //   port: 587,
  //   secure: false,
  //   auth: {
  //     user: testAccount.user,
  //     pass: testAccount.pass,
  //   },
  // });

  // let info = await transporter.sendMail({
  //   from: `${form.email}`,
  //   to: "thonny02@mail.ru",
  //   subject: "Hello ✔",
  //   text: `${form.text}`,
  //   html: "<b>Hello world?</b>",
  // });

  // console.log("Message sent: %s", info.messageId);

  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

module.export = main;
