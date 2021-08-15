const path = require('path');
const fs = require('fs');
const pathToJSON = path.join(__dirname + './../tasks.json');

class ModelJson {
  async getAllTasks() {
    return new Promise((resolve, reject) => {
      fs.readFile(pathToJSON, 'utf-8', (err, data) => {
        if (err) reject(err);
        const tasks = JSON.parse(data);
        resolve(tasks);
      });
    })
  }
}

module.exports = ModelJson;
