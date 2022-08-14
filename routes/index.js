
const calendarioController = require('../controllers/calendario');
const bitacoraController = require('../controllers/bitacora');
const archivoController = require('../controllers/documentos');
const authController = require('../controllers/auth');

function verifyToken(req, res, next){
   const bearerHeader =  req.headers['authorization'];

   if(typeof bearerHeader !== 'undefined'){
        const bearerToken = bearerHeader.split(" ")[1];
        req.token  = bearerToken;
        next();
   }else{
       res.sendStatus(403);
   }
}


module.exports = (app) => {
   app.get('/api', (_, res) => res.status(200).send ({
        message: 'Example project did not give you access to the api web services',
   }));

app.post('/api/login',authController.verify);


app.post('/api/calendario/create',verifyToken, calendarioController.create);
app.get('/api/calendario/list', calendarioController.list);
app.get('/api/calendario/find',verifyToken, calendarioController.find);

app.post('/api/bitacora/create', bitacoraController.create);
app.get('/api/bitacora/list',verifyToken, bitacoraController.list);
app.get('/api/bitacora/find',verifyToken, bitacoraController.find);

app.get('/api/generar/excel',verifyToken, archivoController.excel);
};