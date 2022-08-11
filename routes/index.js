const usuarioController = require('../controllers/usuario');
const calendarioController = require('../controllers/calendario');
const bitacoraController = require('../controllers/bitacora');

module.exports = (app) => {
   app.get('/api', (req, res) => res.status(200).send ({
        message: 'Example project did not give you access to the api web services',
   }));


app.post('/api/calendario/create', calendarioController.create);
app.get('/api/calendario/list', calendarioController.list);
app.get('/api/calendario/find', calendarioController.find);

app.post('/api/bitacora/create', bitacoraController.create);
app.get('/api/bitacora/list', bitacoraController.list);
app.get('/api/bitacora/find', bitacoraController.find);
};