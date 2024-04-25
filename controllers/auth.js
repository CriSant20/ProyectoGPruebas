const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.signup = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    const Cedula = req.body.Cedula;
    const Nombre = req.body.Nombre;
    const Apellido = req.body.Apellido;
    const Telefono = req.body.Telefono;
    const Correo = req.body.Correo;
    const Carrera = req.body.Carrera;
    const Semestre = req.body.Semestre;
    const Fecha_Registro = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const Categoria = req.body.Categoria;
    const Usuario = req.body.Usuario;
    const Contrasenia = req.body.Contrasenia;

    try {
        // Establecer el valor predeterminado del estado como 1
        const Estado = 1;

        const userDetails = {
            Cedula: Cedula,
            Nombre: Nombre,
            Apellido: Apellido,
            Telefono: Telefono,
            Correo: Correo,
            Carrera: Carrera,
            Semestre: Semestre,
            Fecha_Registro: Fecha_Registro,
            Categoria: Categoria,
            Usuario: Usuario,
            Contrasenia: Contrasenia,
            Estado: Estado // Asignar el valor del estado aquí
        };

        const result = await User.save(userDetails);
        res.status(201).json({ message: 'Usuario Registrado' });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
