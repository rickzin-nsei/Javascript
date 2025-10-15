const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');

router.get('/', siteController.index);
router.get('/formulario', siteController.formulario);
router.post('/saudacao', siteController.saudacao);
router.post('/users', siteController.users);
router.post('/seila', siteController.seila);

module.exports = router;
