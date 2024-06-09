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
exports.deleteProject = exports.updateProject = exports.newProject = exports.getProjectById = exports.getProjects = void 0;
const project_models_1 = require("../models/projects.models");
const manage_error_1 = require("../error/manage.error");

const getProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projectsList = yield project_models_1.Project.findAll();
        res.json({
            projectsList
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR
        });
    }
});
exports.getProjects = getProjects;

const getProjectById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idProject = req.params.id;
        const findProject = yield project_models_1.Project.findOne({ where: { ID_Proyecto: idProject } });
        if (!findProject) {
            return res.status(404).json({
                msg: manage_error_1.ErrorMessages.PROJ_NOT_FOUND
            });
        }
        res.json(findProject);
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.getProjectById = getProjectById;

const newProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ID_Proyecto, Nombre, Descripcion, Fecha_Inicio, Fecha_Fin, ID_Responsable } = req.body;
    const existProject = yield project_models_1.Project.findOne({ where: { ID_Proyecto: ID_Proyecto } });
    if (existProject) {
        return res.status(409).json({
            msg: manage_error_1.ErrorMessages.PROJ_EXIST
        });
    }
    try {
        yield project_models_1.Project.create({
            ID_Proyecto: ID_Proyecto,
            Nombre: Nombre,
            Descripcion: Descripcion,
            Fecha_Inicio: Fecha_Inicio,
            Fecha_Fin: Fecha_Fin,
            ID_Responsable: ID_Responsable
        });
        res.json({
            msg: `El proyecto ${Nombre} se creó satisfactoriamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.newProject = newProject;

const updateProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idProject = req.params.id;
    const { Nombre, Descripcion, Fecha_Inicio, Fecha_Fin, ID_Responsable } = req.body;
    const existProject = yield project_models_1.Project.findOne({ where: { ID_Proyecto: idProject } });
    if (!existProject) {
        return res.status(404).json({
            msg: manage_error_1.ErrorMessages.PROJ_NOT_FOUND
        });
    }
    try {
        yield project_models_1.Project.update({
            Nombre: Nombre,
            Descripcion: Descripcion,
            Fecha_Inicio: Fecha_Inicio,
            Fecha_Fin: Fecha_Fin,
            ID_Responsable: ID_Responsable
        }, { where: { ID_Proyecto: idProject } });
        res.json({
            msg: `El proyecto ${existProject.Nombre} ha sido editado satisfactoriamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.updateProject = updateProject;

const deleteProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idProject = req.params.id;
    const existProject = yield project_models_1.Project.findOne({ where: { ID_Proyecto: idProject } });
    if (!existProject) {
        return res.status(404).json({
            msg: manage_error_1.ErrorMessages.PROJ_NOT_FOUND
        });
    }
    try {
        yield project_models_1.Project.destroy({ where: { ID_Proyecto: idProject } });
        res.json({
            msg: `El proyecto ${existProject.Nombre} ha sido removido satisfactoriamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.deleteProject = deleteProject;
