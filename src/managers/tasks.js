const Task = require('../models/Task')



exports.getAll = () => Task.find({});
 
exports.getOne = (taskId) => Task.findById(taskId);

exports.create = (taskName) => {
    const task = new Task(taskName);
    return task.save();
}



