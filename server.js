const express = require('express');
const app = express();
const port = 3060;

const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');

app.use('/list-view', listViewRouter);
app.use('/list-edit', listEditRouter);

function validateHTTPMethodsMiddleware(req, res, next) {
    if (req.method !== 'GET' && req.method !== 'POST' && req.method !== 'PUT' && req.method !== 'DELETE') {
      return res.status(405).json({ error: 'Método HTTP no permitido' });
    }
    next();
  }
  
  app.use(validateHTTPMethodsMiddleware);

  function validateListViewParamsMiddleware(req, res, next) {
    // Validar parámetros aquí si es necesario
    next();
  }
  
  app.use('/list-view', validateListViewParamsMiddleware, listViewRouter);

  function validateEditMiddleware(req, res, next) {
    if (req.method === 'POST' && (!req.body || !req.body.description)) {
      return res.status(400).json({ error: 'El cuerpo de la solicitud no contiene una descripción válida' });
    }
  
    if (req.method === 'PUT' && (!req.body || !req.body.description)) {
      return res.status(400).json({ error: 'El cuerpo de la solicitud no contiene una descripción válida' });
    }
  
    next();
  }
  
  app.use('/list-edit', validateEditMiddleware, listEditRouter);















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
