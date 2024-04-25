const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const User = require('../models/user');

const authController = require('../controllers/auth');

router.post(
    '/signup',
    [
        body('Cedula').trim().not().isEmpty(),
        body('Nombre').trim().not().isEmpty(),
        body('Apellido').trim().not().isEmpty(),
        body('Telefono').trim().not().isEmpty(),
        body('Correo').trim().not().isEmpty(),
        body('Carrera').trim().not().isEmpty(),
        body('Semestre').trim().not().isEmpty(),
        body('Categoria').trim().not().isEmpty(),
        body('Usuario').trim().not().isEmpty(),
        body('Contrasenia').trim().not().isEmpty()
        
    ], authController.signup
);

/*
router.post(
    '/login', authController.login);
*/
module.exports = router;