"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const students_controller_1 = require("../controllers/students.controller");
const validateToken_routes_1 = __importDefault(require("./validateToken.routes"));
const router = (0, express_1.Router)();

router.get('/', students_controller_1.getStudents);
router.post('/', students_controller_1.newStudent);
router.get('/:id', students_controller_1.getStudentById);
router.put('/:id', students_controller_1.updateStudent);
router.delete('/:id', students_controller_1.deleteStudent);

exports.default = router;
