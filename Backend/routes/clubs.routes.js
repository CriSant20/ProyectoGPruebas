"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clubs_controller_1 = require("../controllers/clubs.controller");
const validateToken_routes_1 = __importDefault(require("./validateToken.routes"));
const router = (0, express_1.Router)();
router.get('/', clubs_controller_1.getClubs);
router.post('/', clubs_controller_1.newClub);
router.get('/:id', clubs_controller_1.getClubById);
router.put('/:id', clubs_controller_1.updateClub);
router.delete('/:id', clubs_controller_1.deleteClub);
exports.default = router;
