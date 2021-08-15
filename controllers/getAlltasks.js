const tasklist = require('./../models/index');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await tasklist.getAllTasks();
    res.json(tasks);
  } catch (e) {
    res.sendStatus(500);
  }
}

module.exports = getAllTasks;