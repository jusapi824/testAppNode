const db = require('../models')
const {Router} = require('express'); // Obtengo solo el método Router
const router = Router();

router.get('/', (req, res) => { // req->request->petición ||   res->response->respuesta
    res.send({message:'Hello ADSI !!!'});
});

module.exports = router; // Se exporta el módulo para usarlo