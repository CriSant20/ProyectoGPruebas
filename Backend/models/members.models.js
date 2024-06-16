"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Members = void 0;
const connection_db_1 = __importDefault(require("../db/connection.db"));
const sequelize_1 = require("sequelize");
exports.Members = connection_db_1.default.define('members', {
    id_Miembro: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Nombre: {
        type: sequelize_1.DataTypes.STRING(40),
        allowNull: false
    },
    Apellido: {
        type: sequelize_1.DataTypes.STRING(40),
        allowNull: false
    },
    Edad: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    Semestre: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    Carrera: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false
    },
    Rol: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false
    }
});
