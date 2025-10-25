const taskRepository = require('../repository/taskRepository');

const getAll = async () => {
    return await taskRepository.getAll();
}

const getTaskById = async (id) => {
    return await taskRepository.getTaskById(id);
}

module.exports = {
    getAll,
    getTaskById
}