const taskService = require('../services/taskService');

const getAll = async (req, res) => {
    const tasks = await taskService.getAll();
    console.log(tasks);

    res.status(200).json(tasks);
}

module.exports = {
    getAll
}