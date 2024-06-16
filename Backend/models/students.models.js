"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperty(exports, "__esModule", { value: true });
exports.Students = void 0;
const connection_db_1 = __importDefault(require("../db/connection.db"));
const sequelize_1 = require("sequelize");
const { Clubs } = require("./clubs.models");

exports.Students = connection_db_1.default.define('students', {
    ID_Estudiante: {
        type: sequelize_1.DataTypes.INTEGER,
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
    Carrera: {
        type: sequelize_1.DataTypes.STRING(10),
        primaryKey: true
    },
    Semestre: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    Club: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    Rol: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false
    }
});
