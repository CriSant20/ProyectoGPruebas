"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tareas_controller_1 = require("../controllers/tareas.controller");
const validateToken_routes_1 = __importDefault(require("./validateToken.routes"));
const router = (0, express_1.Router)();
router.get('/', tareas_controller_1.getTareas);
router.post('/', tareas_controller_1.newTareas);
router.get('/:id', validateToken_routes_1.default, tareas_controller_1.getTareaById);
router.put('/:id', validateToken_routes_1.default, tareas_controller_1.updateTareas);
router.delete('/:id', validateToken_routes_1.default, tareas_controller_1.deleteTareas);
exports.default = router;
