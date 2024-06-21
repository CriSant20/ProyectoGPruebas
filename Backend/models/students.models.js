"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperty(exports, "__esModule", { value: true });
exports.Students = void 0;
const connection_db_1 = __importDefault(require("../db/connection.db"));
const sequelize_1 = require("sequelize");


exports.Students = connection_db_1.default.define('estudiantes', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    Nombre: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
   
    Apellido: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
        Edad: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        }, 

    Carrera: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true
    },
    Semestre: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    id_Cargo: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    Estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    },
    Cedula: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    Correo:{
        type: sequelize_1.DataTypes.STRING(50),
        allowNull:false
    },
    Contrasena:{
        type : sequelize_1.DataTypes.STRING(50),
        allowNull:false
    }

});
