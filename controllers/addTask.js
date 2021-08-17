const tasklist = require('./../models/index');

const addTask = async (req, res) => {
  const { text, title } = await req.body;

  try {
    const tasks = await tasklist.addTask(text, title);
    console.log('tasks', req.body);
    await res.json(tasks);
  } catch (e) {
    res.sendStatus(500);
  }
}

module.exports = addTask;