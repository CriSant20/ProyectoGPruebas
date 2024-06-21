"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const connection_db_1 = __importDefault(require("../db/connection.db"));
const sequelize_1 = require("sequelize");
const Clubs = require('./clubs.models')

exports.User = connection_db_1.default.define('usuario', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Nombre: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
   
    Apellido: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false
    },
    Edad: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    Organizacion: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    id_evento: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    Equipo: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    Pagos:{
        type: sequelize_1.DataTypes.DECIMAL(10,2),
        allowNull: false
    },

    Estado: {
        type: sequelize_1.DataTypes.BOOLEAN(true),
        allowNull: false
    },

});
