"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = void 0;
const connection_db_1 = __importDefault(require("../db/connection.db"));
const sequelize_1 = require("sequelize");

exports.Events = connection_db_1.default.define('eventos', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    NombreEvento: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    id_tipo_Evento: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    Estado: {
        type: sequelize_1.DataTypes.BOOLEAN(true),
        allowNull: false
    }
});


