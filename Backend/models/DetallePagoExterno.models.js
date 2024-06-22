"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetallePagoExterno = void 0;
const connection_db_1 = __importDefault(require("../db/connection.db"));
const sequelize_1 = require("sequelize");

exports.DetallePagoExterno = connection_db_1.default.define('detallePagoExterno', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Detalle: {
        type: sequelize_1.DataTypes.STRING(50),
    },
    Estado: {
        type: sequelize_1.DataTypes.BOOLEAN(true),
    }
});


