const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');


router.get('/produtos', produtosController.produtos);
router.get('/produtos/camisetas', produtosController.camisetas);

module.exports = router;
