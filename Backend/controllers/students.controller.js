"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudent = exports.newStudent = exports.getStudentById = exports.getStudents = void 0;
const students_models_1 = require("../models/students.models");
const manage_error_1 = require("../error/manage.error");

const getStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentsList = yield students_models_1.Students.findAll();
        res.json({
            studentsList
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR
        });
    }
});
exports.getStudents = getStudents;

const getStudentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idStudent = req.params.id;
        const findStudent = yield students_models_1.Students.findOne({ where: { id: idStudent } });
        if (!findStudent) {
            return res.status(404).json({
                msg: manage_error_1.ErrorMessages.STUDENT_NOT_FOUND
            });
        }
        res.json(findStudent);
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.getStudentById = getStudentById;

const newStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, Nombre, Apellido, Edad, Carrera, Semestre, id_Cargo, Estado, Cedula, Correo, Contrasena } = req.body;
    const existStudent = yield students_models_1.Students.findOne({ where: { Nombre: Nombre, Apellido: Apellido } });
    if (existStudent) {
        return res.status(409).json({
            msg: manage_error_1.ErrorMessages.STUDENT_EXIST
        });
    }
    try {
        yield students_models_1.Students.create({
            id: id,
            Nombre: Nombre,
            Apellido: Apellido,
            Edad: Edad,
            Carrera: Carrera,
            Semestre: Semestre,
            id_Cargo: id_Cargo,
            Estado: Estado,
            Cedula: Cedula,
            Correo: Correo,
            Contrasena, Contrasena
        });
        res.json({
            msg: `El estudiante ${Nombre} ${Apellido} se creó satisfactoriamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.newStudent = newStudent;

const updateStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idStudent = req.params.id;
    const { id, Nombre, Apellido, Edad, Carrera, Semestre, id_Cargo, Estado, Cedula, Correo, Contrasena } = req.body;
    const existStudent = yield students_models_1.Students.findOne({ where: { id: idStudent } });
    if (!existStudent) {
        return res.status(404).json({
            msg: manage_error_1.ErrorMessages.STUDENT_NOT_FOUND
        });
    }
    try {
        yield students_models_1.Students.update({
            id: id,
            Nombre: Nombre,
            Apellido: Apellido,
            Edad: Edad,
            Carrera: Carrera,
            Semestre: Semestre,
            id_Cargo: id_Cargo,
            Estado: Estado,
            Cedula: Cedula,
            Correo: Correo,
            Contrasena, Contrasena
        }, { where: { id: idStudent } });
        res.json({
            msg: `El estudiante ${existStudent.Nombre} ${existStudent.Apellido} ha sido editado satisfactoriamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.updateStudent = updateStudent;

const deleteStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idStudent = req.params.id;
    const existStudent = yield students_models_1.Students.findOne({ where: { id: idStudent } });
    if (!existStudent) {
        return res.status(404).json({
            msg: manage_error_1.ErrorMessages.STUDENT_NOT_FOUND
        });
    }
    try {
        yield students_models_1.Students.destroy({ where: { id: idStudent } });
        res.json({
            msg: `El estudiante ${existStudent.Nombre} ${existStudent.Apellido} ha sido removido satisfactoriamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.deleteStudent = deleteStudent;
