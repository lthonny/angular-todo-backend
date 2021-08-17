const tasklist = require('./../models/index');

const editTask = async (req, res) => {
  const { title, text, status } = await req.body;
  const taskId = await req.params.id;

  try {
    const tasks = await tasklist.editTask(title, text, status, taskId);
    await res.json(tasks);
  } catch (e) {
    res.sendStatus(500);
  }
}

module.exports = editTask;