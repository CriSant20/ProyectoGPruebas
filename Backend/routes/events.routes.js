"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const eventos_controller_1 = require("../controllers/events.controller");
const validateToken_routes_1 = __importDefault(require("./validateToken.routes"));
const router = (0, express_1.Router)();
router.get('/', eventos_controller_1.getEventos);
router.post('/', eventos_controller_1.newEventos);
router.get('/:id', eventos_controller_1.getEventoById);
router.put('/:id', eventos_controller_1.updateEventos);
router.delete('/:id', eventos_controller_1.deleteEventos);
exports.default = router;
