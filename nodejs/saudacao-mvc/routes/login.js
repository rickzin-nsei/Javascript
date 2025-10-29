const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

/* GET seila listing. */
router.get('/login', clienteController.login);
router.post('/logininfo', clienteController.logininfo);

module.exports = router;
