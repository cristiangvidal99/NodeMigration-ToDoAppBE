const { supabase } = require('../../supabase');

const getAll = async () => {
    try {
        const { data, error } = await supabase
            .from('TASK')
            .select('*');
        return data;
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        throw error;
    }
}

const getTaskById = async (id) => {
    try {
        const { data, error } = await supabase
            .from('TASK')
            .select('*')
            .eq('id', id);
        return data;
    } catch (error) {
        console.error('Error al obtener el usuario con el id: ' + id, error);
        throw error;
    }
}

const createTask = async (body) => {
    const { title, description, date, priority } = body;

    try {
        const { data, error } = await supabase
            .from('TASK')
            .insert([{ title, description, date, priority }])
            .select();
        return data;
    } catch (error) {
        console.error('Error en createTask:', error);
        throw error;
    }
};

module.exports = {
    getAll,
    getTaskById,
    createTask
}