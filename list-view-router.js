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

// Middleware para list-view-router
function validateListViewParamsMiddleware(req, res, next) {
    // Validar parámetros aquí si es necesario
  
  next();
  }
  
  module.exports = validateListViewParamsMiddleware;
  

module.exports = listViewRouter;
