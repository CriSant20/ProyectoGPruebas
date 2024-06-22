"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pexternos_controller_1 = require("../controllers/pagosExternos.controller");
const validateToken_routes_1 = __importDefault(require("./validateToken.routes"));
const router = (0, express_1.Router)();
router.get('/', pexternos_controller_1.getPExternos);
router.post('/', pexternos_controller_1.newPExterno);
router.get('/:id', validateToken_routes_1.default, pexternos_controller_1.getPExternoById);
router.put('/:id', validateToken_routes_1.default, pexternos_controller_1.updatePExterno);
router.delete('/:id', validateToken_routes_1.default, pexternos_controller_1.deletePExterno);
exports.default = router;
