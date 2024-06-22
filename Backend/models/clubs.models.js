"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperty(exports, "__esModule", { value: true });
exports.Clubs = void 0;
const connection_db_1 = __importDefault(require("../db/connection.db"));
const sequelize_1 = require("sequelize");



exports.Clubs = connection_db_1.default.define('clubs', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    NombreClub: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
   
    Encargado: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    id_detalle_club: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    Estado:{
        type: sequelize_1.DataTypes.BOOLEAN(true)
    }
});


