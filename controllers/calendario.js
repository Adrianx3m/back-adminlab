const jwt = require('jsonwebtoken');
const calendario       = require('../models').calendario;
module.exports = {
 create(req, res) {
    jwt.verify(req.token, 'secretkey', (error, authData) => {
        if(error){
            res.sendStatus(403);
        }else{
            return calendario
            .create ({
                 title: req.body.title,
                 start: req.body.start,
                   end: req.body.end
            })
            .then(calendario => res.status(200).send(calendario))
            .catch(error => res.status(400).send(error))
        }
    });

 },
 list(_, res) {
    return calendario.findAll()
        .then(calendario => res.status(200).send(calendario))
        .catch(error => res.status(400).send(error))
 },
 find (req, res) {
    jwt.verify(req.token, 'secretkey', (error, authData) => {
        if(error){
            res.sendStatus(403);
        }else{
            return calendario.findAll({
                where: {
                    id: req.body.id,
                }
            })
                .then(calendario => res.status(200).send(calendario))
                .catch(error => res.status(400).send(error))
        }
    });

  },
};