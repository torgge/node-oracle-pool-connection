const express = require('express');
const router = new express.Router();
const usuario_controller = require('../controllers/usuario-controller.js');

router.route('/usuarios/:id?')
    .get(usuario_controller.get)
    .post(usuario_controller.post)
    .put(usuario_controller.put)
    .delete(usuario_controller.delete);

module.exports = router


