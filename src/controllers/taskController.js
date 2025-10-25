const taskService = require('../services/taskService');

const getAll = async (req, res) => {
    const tasks = await taskService.getAll();

    res.status(200).json(tasks);
}

const getTaskById = async (req, res) => {
    const task = await taskService.getTaskById(req.params.id);

    if (!task) {
        res.status(500);
    }
    res.status(200).json(task)
}


module.exports = {
    getAll,
    getTaskById
}