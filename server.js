const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config(); // Carga las variables de entorno desde el archivo .env
const app = express();
app.use(express.json());
const port = 3060;

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username && u.password === password);
  
    if (!user) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }
  
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
    res.json({ token });
  });

  app.get('/ruta-protegida', (req, res) => {
    const token = req.header('Authorization');
  
    if (!token) {
      return res.status(401).json({ error: 'Token no proporcionado' });
    }
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Token inválido' });
      }
  
      // Si llegamos a este punto, el token es válido, y puedes realizar acciones en esta ruta.
      res.json({ mensaje: 'Ruta protegida accedida con éxito' });
    });
  });
  


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
