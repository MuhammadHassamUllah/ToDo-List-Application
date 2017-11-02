var mongoose = require('mongoose');
var Task = mongoose.model('Tasks');

exports.listAllTasks = function (req, res) {
    Task.find({}, function (err, task) {
        if (err)
            res.send(err);
        req.json(task);
    });
}

exports.createATask = function (req, res) {
    var newTask = new Task(req.body);

    newTask.save(function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
}

exports.readATask = function (req, res) {

}