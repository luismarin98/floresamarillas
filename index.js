const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'src')));

// Ruta principal que muestra el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});