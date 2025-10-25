const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

/**
 * @swagger
 * /api/task:
 *   get:
 *     summary: Obtener todas las tareas
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida correctamente
 */

/**
 * @swagger
 * /api/task/{id}:
 *   get:
 *     summary: Obtener una tarea por su ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la tarea a obtener
 *     responses:
 *       200:
 *         description: Tarea obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                 date:
 *                   type: string
 *                 priority:
 *                   type: string
 *       404:
 *         description: Tarea no encontrada
 */
router.get('/task', taskController.getAll);
router.get('/task/:id', taskController.getTaskById);

module.exports = router;
