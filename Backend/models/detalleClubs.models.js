"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperty(exports, "__esModule", { value: true });
exports.DClubs = void 0;
const connection_db_1 = __importDefault(require("../db/connection.db"));
const sequelize_1 = require("sequelize");



exports.DClubs = connection_db_1.default.define('detalleClubs', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_estudiantes: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
   
    id_cargo: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    Estado:{
        type: sequelize_1.DataTypes.BOOLEAN(true)
    }
});


