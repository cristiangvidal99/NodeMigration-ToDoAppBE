const express = require('express');
const swaggerUi = require('swagger-ui-express');
const { swaggerSpec } = require('../swagger.config.js');
const usuariosRoutes = require('./routes/apiRoutes');
const { PORT } = require('./globals/globals.js');
const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api', usuariosRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});