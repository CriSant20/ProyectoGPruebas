"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//singleton Pattern
class Connection {
    constructor() {
    }
    static getInstance() {
        if (!Connection.instance) {
            // Config DBConnection only once
            Connection.instance = new sequelize_1.Sequelize('test', 'root', '', {
                host: 'localhost',
                port: 3415,
                dialect: 'mysql'
            });
        }
        return Connection.instance;
    }
}
Connection.instance = null;
exports.default = Connection.getInstance();
