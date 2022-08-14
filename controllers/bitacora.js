const bitacora       = require('../models').bitacora;
const jwt = require('jsonwebtoken');
module.exports = {
 create(req, res) {
    
    return bitacora
        .create ({
             fecha: req.body.fecha,
             materia: req.body.materia,
	       laboratorio: req.body.laboratorio,
           grupo: req.body.grupo,
           practica: req.body.practica,
           h_entrada: req.body.h_entrada,
           nombre_practica: req.body.nombre_practica,
           encargado: req.body.encargado
        })
        .then(bitacora => res.status(200).send(bitacora))
        .catch(error => res.status(400).send(error))
 },
 list(req, res) {
    jwt.verify(req.token, 'secretkey', (error, authData) => {
        if(error){
            res.sendStatus(403);
        }else{
            return bitacora.findAll()
        .then(bitacora => res.status(200).send(bitacora))
        .catch(error => res.status(400).send(error))
        }
    });
     
 },
 find (req, res) {
    jwt.verify(req.token, 'secretkey', (error, authData) => {
        if(error){
            res.sendStatus(403);
        }else{
            return bitacora.findAll({
                where: {
                    laboratorio: req.body.laboratorio,
                }
            })
            .then(bitacora => res.status(200).send(bitacora))
            .catch(error => res.status(400).send(error))
        }
    });
     
  },
};