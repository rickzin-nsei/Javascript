const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');

router.get('/', produtosController.produtos);
router.get('/camisetas', produtosController.camisetas);
router.get('/formcadastrar', produtosController.formcadastrar);
router.post('/formcadastrar', produtosController.cadastrar);

module.exports = router;
