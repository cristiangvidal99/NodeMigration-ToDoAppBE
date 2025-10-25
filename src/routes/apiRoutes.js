const express = require('express');
const router = express.Router();
const usuariosCtrl = require('../controllers/userController');

/**
 * @swagger
 * /api/usuarios:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida correctamente
 */
router.get('/usuarios', usuariosCtrl.getAll);

module.exports = router;
