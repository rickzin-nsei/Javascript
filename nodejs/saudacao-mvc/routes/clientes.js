const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

/* GET seila listing. */
router.get('/clientes', clienteController.cliente);

module.exports = router;
