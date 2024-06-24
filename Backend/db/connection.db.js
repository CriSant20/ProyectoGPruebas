"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");

class Connection {
    constructor() { }

    static getInstance() {
        if (!Connection.instance) {
            // Config DBConnection only once
            Connection.instance = new sequelize_1.Sequelize('u664644391_gestion_proyec', 'u664644391_Adminsito', 'Adminsito1.', {
                host: 'srv1056.hstgr.io',
                dialect: 'mysql',
                logging: false // Desactivar logging de Sequelize
            });
        }
        return Connection.instance;
    }

    /*
    static getInstance() {
        if (!Connection.instance) {
            // Config DBConnection only once
            Connection.instance = new sequelize_1.Sequelize('test', 'root', '', {
                host: 'localhost',
                port: 3306,
                dialect: 'mysql',
                logging: false // Desactivar logging de Sequelize
            });
        }
        return Connection.instance;
    }
    */
    static async close() {
        if (Connection.instance) {
            await Connection.instance.close();
            Connection.instance = null;
        }
    }
}

Connection.instance = null;
exports.default = Connection.getInstance();
exports.Connection = Connection; // Exportar la clase Connection para poder llamar a close()
