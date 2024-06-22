"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const peventos_controller_1 = require("../controllers/pagosEventos.controller");
const validateToken_routes_1 = __importDefault(require("./validateToken.routes"));
const router = (0, express_1.Router)();
router.get('/', peventos_controller_1.getPEventos);
router.post('/', peventos_controller_1.newPEventos);
router.get('/:id', peventos_controller_1.getPEventoById);
router.put('/:id', peventos_controller_1.updatePEventos);
router.delete('/:id', peventos_controller_1.deletePEventos);
exports.default = router;
