"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dProjects_controller_1 = require("../controllers/detalleProjects.controller");
const validateToken_routes_1 = __importDefault(require("./validateToken.routes"));
const router = (0, express_1.Router)();
router.get('/', dProjects_controller_1.getDProjects);
router.post('/', dProjects_controller_1.newPDroject);
router.get('/:id', validateToken_routes_1.default, dProjects_controller_1.getDProjectById);
router.put('/:id', validateToken_routes_1.default, dProjects_controller_1.updateDProject);
router.delete('/:id', validateToken_routes_1.default, dProjects_controller_1.deleteDProject );
exports.default = router;
