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
exports.deleteDProject = exports.updateDProject = exports.newDProject = exports.getDProjectById = exports.getDProjects = void 0;
const dproject_models_1 = require("../models/detalleProjects.models");
const manage_error_1 = require("../error/manage.error");

const getDProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dprojectsList = yield dproject_models_1.DProjects.findAll();
        res.json({
            dprojectsList
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR
        });
    }
});
exports.getDProjects = getDProjects;

const getDProjectById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idDProject = req.params.id;
        const findDProject = yield dproject_models_1.DProjects.findOne({ where: { id: idDProject } });
        if (!findDProject) {
            return res.status(404).json({
                msg: manage_error_1.ErrorMessages.PROJ_NOT_FOUND
            });
        }
        res.json(findDProject);
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.getDProjectById = getDProjectById;

const newDProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, id_clubs } = req.body;
    const existDProject = yield dproject_models_1.DProjects.findOne({ where: { id: id } });
    if (existDProject) {
        return res.status(409).json({
            msg: manage_error_1.ErrorMessages.PROJ_EXIST
        });
    }
    try {
        yield dproject_models_1.DProject.create({
            id: id,
            id_clubs: id_clubs
        });
        res.json({
            msg: `El detalle del proyecto ${id} se creó satisfactoriamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.newPDroject = newDProject;

const updateDProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idDProject = req.params.id;
    const { id, id_clubs } = req.body;
    const existDProject = yield dproject_models_1.DProjects.findOne({ where: { id: idDProject } });
    if (!existDProject) {
        return res.status(404).json({
            msg: manage_error_1.ErrorMessages.PROJ_NOT_FOUND
        });
    }
    try {
        yield dproject_models_1.DProjects.update({
            id: id,
            id_clubs: id_clubs
        }, { where: { id: idDProject } });
        res.json({
            msg: `El detalle de proyecto ${existDProject.id} ha sido editado satisfactoriamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.updateDProject = updateDProject;

const deleteDProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idDProject = req.params.id;
    const existDProject = yield dproject_models_1.DProjects.findOne({ where: { id: idDProject } });
    if (!existDProject) {
        return res.status(404).json({
            msg: manage_error_1.ErrorMessages.PROJ_NOT_FOUND
        });
    }
    try {
        yield dproject_models_1.DProject.destroy({ where: { id: idDProject } });
        res.json({
            msg: `El detale del proyecto ${existDProject.id} ha sido removido satisfactoriamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.deleteDProject = deleteDProject;
