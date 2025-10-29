const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');
const produtosController = require('../controllers/produtosController');
const clienteController = require('../controllers/clienteController');


router.get('/', siteController.index);
router.get('/formulario', siteController.formulario);
router.post('/saudacao', siteController.saudacao);
router.post('/users', siteController.users);
router.post('/seila', siteController.seila);
router.get('/produtos', produtosController.produtos);
router.get('/clientes', clienteController.cliente);
router.get('/login', clienteController.login);

module.exports = router;
