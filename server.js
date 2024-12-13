const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productosRouter = require('./routes/productos');

const app = express();
const PORT = 5000;

app.use(cors()); // Permitir solicitudes de otros orígenes
app.use(bodyParser.json());

app.use('/api/productos', productosRouter); // Ruta base para productos

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
