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
exports.deleteTareas = exports.updateTareas = exports.newTareas = exports.getTareaById = exports.getTareas = void 0;
const tareas_models_1 = require("../models/tareas.models");
const manage_error_1 = require("../error/manage.error");

const getTareas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tareasList = yield tareas_models_1.Tareas.findAll();
        res.json({
            tareasList
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR
        });
    }
});
exports.getTareas = getTareas;

const getTareaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idTarea = req.params.id;
        const tarea = yield tareas_models_1.Tareas.findOne({ where: { id: idTarea } });
        if (!tarea) {
            return res.status(404).json({
                msg: manage_error_1.ErrorMessages.CLUB_NOT_FOUND
            });
        }
        res.json(tarea);
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.getTareaById = getTareaById;

const newTareas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, Nombre, id_estudiante, id_club, descripcionTarea } = req.body;
    const existTarea = yield tareas_models_1.Tareas.findOne({ where: { id: id } });
    if (existTarea) {
        return res.status(409).json({
            msg: manage_error_1.ErrorMessages.CLUB_EXIST
        });
    }
    try {
        yield tareas_models_1.Tareas.create({
            id: id,
            Nombre: Nombre,
            id_estudiante: id_estudiante,
            id_club: id_club,
            descripcionTarea: descripcionTarea
        });
        res.json({
            msg: `La tarea ${Nombre} se creó satisfactoriamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.newTareas = newTareas;

const updateTareas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idTarea = req.params.id;
    const { id, Nombre, id_estudiante, id_club, descripcionTarea } = req.body;
    const existClub = yield clubs_models_1.Clubs.findOne({ where: { id: idTarea } });
    if (!existTarea) {
        return res.status(404).json({
            msg: manage_error_1.ErrorMessages.CLUB_NOT_FOUND
        });
    }
    try {
        yield tareas_models_1.Tareas.update({
            id: id,
            Nombre: Nombre,
            id_estudiante: id_estudiante,
            id_club: id_club,
            descripcionTarea: descripcionTarea
        }, { where: { id: idTarea } });
        res.json({
            msg: `La tarea ${existTarea.Nombre} ha sido editado satisfactoriamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.updateTareas = updateTareas;

const deleteTareas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idTarea = req.params.id;
    const existTarea = yield tareas_models_1.Tareas.findOne({ where: { id: idTarea } });
    if (!existTarea) {
        return res.status(404).json({
            msg: manage_error_1.ErrorMessages.CLUB_NOT_FOUND
        });
    }
    try {
        yield tareas_models_1.Tareas.destroy({ where: { id: idTarea } });
        res.json({
            msg: `La tarea ${existTarea.Nombre} ha sido removido satisfactoriamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.deleteTareas = deleteTareas;
