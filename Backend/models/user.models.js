"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const connection_db_1 = __importDefault(require("../db/connection.db"));
const sequelize_1 = require("sequelize");

exports.User = connection_db_1.default.define('user', {
    ID_Usuario: {
        type: sequelize_1.DataTypes.STRING(10),
        primaryKey: true
    },
    Nombre: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false
    },
   
    Apellido: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false
    },
    Cedula: {
        type: sequelize_1.DataTypes.STRING(10),
        primaryKey: true
    },
    Telefono: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false
    },
    Correo: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false
    },
    Carrera: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false
    },
    Semestre: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false
    },
    Fecha_Registro: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    Categoria: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false
    },
    Usuario: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false
    },
    Contraseña: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false
    },
    Estado: {
        type: sequelize_1.DataTypes.BOOLEAN(true),
        allowNull: false
    },

});
