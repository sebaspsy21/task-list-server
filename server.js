const express = require('express');
const app = express();
const port = 3060;

const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');

app.use('/list-view', listViewRouter);
app.use('/list-edit', listEditRouter);

const tasks = [
  { id: 1, description: 'Hacer la compra', completed: false },
  { id: 2, description: 'Estudiar para el examen', completed: true },
  { id: 3, description: 'Hacer ejercicio', completed: false },
];

// Ruta para obtener la lista de tareas en formato JSON
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto 3020 `);
});
