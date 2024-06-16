"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./models/server"));

//@dotenv: configuration dotenv to could see the PORT
dotenv_1.default.config();
const server = new server_1.default();

if (process.env.NODE_ENV !== 'test') {
    server.listen();
}

module.exports = server.app; // Exporta la instancia de la aplicación Express
