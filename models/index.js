const ModelJson = require('./model-json');

class TaskListFactory {
  create(type) {
    let tasklist;
    if (type === 'json') {
      tasklist = new ModelJson()
    }
    return tasklist;
  };
}

const tasklistFactory = new TaskListFactory();
const tasklist = tasklistFactory.create('json');

module.exports = tasklist;

