"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cargos = void 0;
const connection_db_1 = __importDefault(require("../db/connection.db"));
const sequelize_1 = require("sequelize");

exports.Cargos = connection_db_1.default.define('cargos', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Nombre: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    seccionCargo: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    Estado: {
        type: sequelize_1.DataTypes.BOOLEAN(true),
        allowNull: false
    }
});


