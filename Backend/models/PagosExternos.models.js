"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagosExternos = void 0;
const connection_db_1 = __importDefault(require("../db/connection.db"));
const sequelize_1 = require("sequelize");

exports.PagosExternos = connection_db_1.default.define('pagosExternos', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_evento: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    fechaEvento: {
        type: sequelize_1.DataTypes.DATE,
    },
    id_detalle_pago:{
        type: sequelize_1.DataTypes.INTEGER
    },
    Estado: {
        type: sequelize_1.DataTypes.BOOLEAN(true),
        allowNull: false
    }
});


