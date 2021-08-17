const tasklist = require('../models/index');

const updateOrder = async (req, res) => {
  const reqBody = await req.body;
  try {
    const tasks = await tasklist.updatePosition(reqBody);
    await res.json(tasks);
  } catch (e) {
    res.sendStatus(500);
  }
}

module.exports = updateOrder;