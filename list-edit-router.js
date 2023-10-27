const express = require('express');
const listEditRouter = express.Router();
const listEditMiddleware = require('./list-edit-middleware');



listEditRouter.post('/create', (req, res) => {
  // Agrega aquí la lógica para crear una tarea
  res.json({ message: 'Task created' });
});


listEditRouter.delete('/delete/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  // Agrega aquí la lógica para eliminar una tarea con el taskId proporcionado
  res.json({ message: `Task ${taskId} deleted` });
});


listEditRouter.put('/update/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  // Agrega aquí la lógica para actualizar una tarea con el taskId proporcionado
  res.json({ message: `Task ${taskId} updated` });
});

module.exports = listEditRouter;