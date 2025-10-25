const taskRepository = require('../repository/taskRepository');

const getAll = async () => {
    return await taskRepository.getAll();
}



module.exports = {
    getAll
}