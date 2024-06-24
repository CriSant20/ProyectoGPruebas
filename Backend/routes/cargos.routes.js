"use strict";
var _importDefault = (this && this._importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cargos_controller_1 = require("../controllers/cargos.controller");
const validateToken_routes_1 = _importDefault(require("./validateToken.routes"));
const router = (0, express_1.Router)();
router.get('/', cargos_controller_1.getCargos);
router.post('/', cargos_controller_1.newCargos);
router.get('/:id', cargos_controller_1.getCargoById);
router.put('/:id', cargos_controller_1.updateCargo);
router.delete('/:id', cargos_controller_1.deleteCargos);
exports.default = router;