"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const deventos_controller_1 = require("../controllers/detalleEventos.controller");
const validateToken_routes_1 = __importDefault(require("./validateToken.routes"));
const router = (0, express_1.Router)();
router.get('/', deventos_controller_1.getDEventos);
router.post('/', deventos_controller_1.newDEventos);
router.get('/:id', validateToken_routes_1.default, deventos_controller_1.getDEventoById);
router.put('/:id', validateToken_routes_1.default, deventos_controller_1.updateDEventos);
router.delete('/:id', validateToken_routes_1.default, deventos_controller_1.deleteDEventos);
exports.default = router;
