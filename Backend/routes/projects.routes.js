"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const projects_controller_1 = require("../controllers/projects.controller");
const validateToken_routes_1 = __importDefault(require("./validateToken.routes"));
const router = (0, express_1.Router)();
router.get('/', projects_controller_1.getProjects);
router.post('/', projects_controller_1.newProject);
router.get('/:id', projects_controller_1.getProjectById);
router.put('/:id', projects_controller_1.updateProject);
router.delete('/:id', projects_controller_1.deleteProject);
exports.default = router;
