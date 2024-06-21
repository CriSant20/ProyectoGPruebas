"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tareas = void 0;
const connection_db_1 = __importDefault(require("../db/connection.db"));
const sequelize_1 = require("sequelize");
exports.Tareas = connection_db_1.default.define('tareas', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Nombre: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    id_estudiante: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    id_club: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    descripcionTarea:{
        type: sequelize_1.DataTypes.STRING(50)
    },
    Estado:{
        type: sequelize_1.DataTypes.BOOLEAN(true)
    }
});
