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

const createTask = async (req, res) => {
    const createTask = await taskService.createTask(req.body)

    res.status(200).json(createTask);
}
const editTaskById = async (req, res) => {
    const task = await taskService.editTaskById(req.body);

    if (!task) {
        res.status(500);
    }
    res.status(200).json(task)
}
const deleteTaskById = async (req, res) => {
    const task = await taskService.deleteTaskById(req.params.id);

    if (!task) {
        res.status(500);
    }
    res.status(200).json("OK")
}
module.exports = {
    getAll,
    getTaskById,
    createTask,
    editTaskById,
    deleteTaskById
}