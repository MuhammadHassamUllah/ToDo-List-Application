'use strict'

module.exports = function (app) {

    //aquire taskController Functions
    var taskCtrl = require('../Controllers/taskController');

    //Task routes
    app.route('/tasks')
        .get(taskCtrl.listAllTasks)
        .post(taskCtrl.createATask);
    /*
    app.route('/tasks/:taskId')
        .get()
        .put()
        .delete()
    */
}