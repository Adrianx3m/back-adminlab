const user = require('../models').usuario;
const jwt = require("jsonwebtoken");
const { Sequelize } = require('../models');

module.exports = {
   verify(req,res){
       return user.findAll({
            attributes: [
                'id',
                [Sequelize.fn('AES_DECRYPT',Sequelize.col("username"),"lab"),"username"]
                ],
                where:{
                    username: Sequelize.fn('AES_ENCRYPT',req.body.usuario,"lab"),
                    password: Sequelize.fn('AES_ENCRYPT',req.body.contrasenia,"lab")
                }
        })
        .then(user => {
            if(JSON.stringify(user)!="[]"){
            jwt.sign({user}, 'secretkey', {expiresIn: '1200s'}, (err, token) => {
                res.json({
                    token
                });
            })
        }else{
            res.status(422).send({message:"Usuario y/o Contraseña incorrecto"});
        }
        })
        .catch(()=>{res.status(500).send({message:"Ha ocurrido un error en el servidor, te pedimos paciencia"})})
    }
}