"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projects = void 0;
const connection_db_1 = __importDefault(require("../db/connection.db"));
const sequelize_1 = require("sequelize");
exports.Projects = connection_db_1.default.define('projectos', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Nombre: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    Encargado: {
        type: sequelize_1.DataTypes.STRING(50),
    },
    id_detalle_proyectos: {
        type: sequelize_1.DataTypes.INTEGER,
    }
});
