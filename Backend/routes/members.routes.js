"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const members_controller_1 = require("../controllers/members.controller");
const validateToken_routes_1 = __importDefault(require("./validateToken.routes"));
const router = (0, express_1.Router)();
router.get('/', members_controller_1.getMembers);
router.post('/', members_controller_1.newMember);
router.get('/:id', members_controller_1.getMemberById);
router.put('/:id', members_controller_1.updateMember);
router.delete('/:id', members_controller_1.deleteMember);
exports.default = router;
