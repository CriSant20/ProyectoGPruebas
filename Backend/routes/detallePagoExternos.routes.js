"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dPexternos_controller_1 = require("../controllers/detallePagoExterno.controller");
const validateToken_routes_1 = __importDefault(require("./validateToken.routes"));
const router = (0, express_1.Router)();
router.get('/', dPexternos_controller_1.getPExternos);
router.post('/', dPexternos_controller_1.newPExterno);
router.get('/:id', dPexternos_controller_1.getPExternoById);
router.put('/:id', dPexternos_controller_1.updatePExterno);
router.delete('/:id', dPexternos_controller_1.deletePExterno);
exports.default = router;
