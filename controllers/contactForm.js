const tasklist = require('../models/index');
const mailer = require('../nodemailer');

const contactForm = async (req, res) => {
  const reqBody = await req.body;
  try {
    const tasks = await tasklist.contactForm(reqBody);

    const message = {
      to: reqBody.email,
      subject: 'Congarations! You are successfull registred on our site.',
      text: `${reqBody.text}`
    }

    mailer(message);
    await res.json(tasks);
  } catch (e) {
    res.sendStatus(500);
  }
}

module.exports = contactForm;