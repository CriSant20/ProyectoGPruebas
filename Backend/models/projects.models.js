"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projects = void 0;
const connection_db_1 = __importDefault(require("../db/connection.db"));
const sequelize_1 = require("sequelize");
exports.Projects = connection_db_1.default.define('projects', {
    id_Proyecto: {
        type: sequelize_1.DataTypes.STRING(10),
        primaryKey: true
    },
    Nombre: {
        type: sequelize_1.DataTypes.STRING(40),
        allowNull: false
    },
    Descripcion: {
        type: sequelize_1.DataTypes.STRING(1000),
        allowNull: false
    },
    phoneSup: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false
    },
    Fecha_Inicio: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    Fecha_Fin: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    ID_Responsable: {
        type: sequelize_1.DataTypes.STRING(10),
        allowNull: false
    }
});
