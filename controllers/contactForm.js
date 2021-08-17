const tasklist = require('../models/index');

const contactForm = async (req, res) => {
  const reqBody = await req.body;
  try {
    const tasks = await tasklist.contactForm(reqBody);
    console.log('tasks', tasks);
    await res.json([]);
  } catch (e) {
    res.sendStatus(500);
  }
}

module.exports = contactForm;