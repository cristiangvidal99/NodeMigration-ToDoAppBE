const getAll = (req, res) => {
    res.status(200).json({ mensaje: 'Obteniendo todos los usuarios' });
}

module.exports = {
    getAll
}