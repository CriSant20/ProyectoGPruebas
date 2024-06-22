"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dPeventos_controller_1 = require("../controllers/detallePagoEventos.controller");
const validateToken_routes_1 = __importDefault(require("./validateToken.routes"));
const router = (0, express_1.Router)();
router.get('/', dPeventos_controller_1.getPEventos);
router.post('/', dPeventos_controller_1.newPEventos);
router.get('/:id', validateToken_routes_1.default, dPeventos_controller_1.getPEventoById);
router.put('/:id', validateToken_routes_1.default, dPeventos_controller_1.updatePEventos);
router.delete('/:id', validateToken_routes_1.default, dPeventos_controller_1.deletePEventos);
exports.default = router;
