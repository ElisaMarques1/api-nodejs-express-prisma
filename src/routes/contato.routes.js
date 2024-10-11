const express = require('express');
const router = express.Router();
const contatosController = require('../controllers/contato.controller');

router.get('/', contatosController.listarContatos);
router.post('/', contatosController.criarContato);

module.exports = router;