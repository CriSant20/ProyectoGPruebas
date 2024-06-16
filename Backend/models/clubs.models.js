"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperty(exports, "__esModule", { value: true });
exports.Clubs = void 0;
const connection_db_1 = __importDefault(require("../db/connection.db"));
const sequelize_1 = require("sequelize");

exports.Clubs = connection_db_1.default.define('clubs', {
    ID_Club: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    NombreClub: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false
    },
   
    Encargado: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false
    }
});
