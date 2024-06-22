"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Dclubs_controller_1 = require("../controllers/detalleClubs.controller");
const validateToken_routes_1 = __importDefault(require("./validateToken.routes"));
const router = (0, express_1.Router)();
router.get('/', Dclubs_controller_1.getDClubs);
router.post('/', Dclubs_controller_1.newDClub);
router.get('/:id', Dclubs_controller_1.getDClubById);
router.put('/:id', Dclubs_controller_1.updateDClub);
router.delete('/:id', Dclubs_controller_1.deleteDClub);
exports.default = router;
