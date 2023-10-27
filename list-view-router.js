const express = require('express');
const listViewRouter = express.Router();


listViewRouter.get('/completed', (req, res) => {
  // Agrega aquí la lógica para listar tareas completas
  res.json({ message: 'List of completed tasks' });
});


listViewRouter.get('/incomplete', (req, res) => {
  // Agrega aquí la lógica para listar tareas incompletas
  res.json({ message: 'List of incomplete tasks' });
});

module.exports = listViewRouter;
