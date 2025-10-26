const taskRepository = require('../repository/taskRepository');

const getAll = async () => {
    return await taskRepository.getAll();
}

const getTaskById = async (id) => {
    return await taskRepository.getTaskById(id);
}

const createTask = async (body) => {
    return await taskRepository.createTask(body);
}

const editTaskById = async (id) => {
    return await taskRepository.editTaskById(id);
}
const deleteTaskById = async (id) => {
    return await taskRepository.deleteTaskById(id);
}


module.exports = {
    getAll,
    getTaskById,
    createTask,
    editTaskById,
    deleteTaskById
}