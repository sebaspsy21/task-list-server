// Middleware para validar los métodos HTTP
function validateHTTPMethodsMiddleware(req, res, next) {
    if (req.method !== 'GET' && req.method !== 'POST' && req.method !== 'PUT' && req.method !== 'DELETE') {
      return res.status(405).json({ error: 'Método HTTP no permitido' });
    }
  
    next();
  }
  
  app.use(validateHTTPMethodsMiddleware);
  