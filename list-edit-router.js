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

function validateEditMiddleware(req, res, next) {
    if (req.method === 'POST' && (!req.body || !req.body.description)) {
      return res.status(400).json({ error: 'El cuerpo de la solicitud no contiene una descripción válida' });
    }
  
    if (req.method === 'PUT' && (!req.body || !req.body.description)) {
      return res.status(400).json({ error: 'El cuerpo de la solicitud no contiene una descripción válida' });
    }
    next();
  }
  
module.exports = listEditRouter;