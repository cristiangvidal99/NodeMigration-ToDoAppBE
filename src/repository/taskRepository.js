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

module.exports = {
    getAll
}