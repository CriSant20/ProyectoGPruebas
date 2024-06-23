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
exports.deleteDEventos = exports.updateDEventos = exports.newDEventos = exports.getDEventoById = exports.getDEventos = void 0;
const Deventos_models_1 = require("../models/detalleEventos.models");
const manage_error_1 = require("../error/manage.error");

const getDEventos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const DeventosList = yield Deventos_models_1.DEvents.findAll();
        res.json({
            DeventosList
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR
        });
    }
});
exports.getDEventos = getDEventos;

const getDEventoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idDEvento = req.params.id;
        const Devento = yield Deventos_models_1.DEvents.findOne({ where: { id: idDEvento } });
        if (!Devento) {
            return res.status(404).json({
                msg: manage_error_1.ErrorMessages.DEVENTS_NOT_FOUND
            });
        }
        res.json(Devento);
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.getDEventoById = getDEventoById;

const newDEventos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, NombreTipoEvento } = req.body;
    const existDEventos = yield Deventos_models_1.DEvents.findOne({ where: { id: id } });
    if (existDEventos) {
        return res.status(409).json({
            msg: manage_error_1.ErrorMessages.DEVENTS_EXIST
        });
    }
    try {
        yield Deventos_models_1.DEvents.create({
            id: id,
            NombreTipoEvento: NombreTipoEvento
        });
        res.json({
            msg: `El Detalle del evento ${NombreTipoEvento} se creó satisfactoriamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.newDEventos = newDEventos;

const updateDEventos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idDEvento = req.params.id;
    const { id, NombreTipoEvento } = req.body;
    const existDEventos = yield Deventos_models_1.DEvents.findOne({ where: { id: idDEvento } });
    if (!existDEventos) {
        return res.status(404).json({
            msg: manage_error_1.ErrorMessages.DEVENTS_NOT_FOUND
        });
    }
    try {
        yield Deventos_models_1.DEvents.update({
            id: id,
            NombreTipoEvento: NombreTipoEvento
        }, { where: { id: idDEvento } });
        res.json({
            msg: `El detalle del evento ${existDEventos.NombreTipoEvento} ha sido editado satisfactoriamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.updateDEventos = updateDEventos;

const deleteDEventos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idDEventos = req.params.id;
    const existDEventos = yield Deventos_models_1.DEvents.findOne({ where: { id: idDEventos } });
    if (!existDEventos) {
        return res.status(404).json({
            msg: manage_error_1.ErrorMessages.DEVENTS_NOT_FOUND
        });
    }
    try {
        yield Deventos_models_1.DEvents.destroy({ where: { id: idDEventos } });
        res.json({
            msg: `El detalle del evento ${existDEventos.NombreTipoEvento} ha sido removido satisfactoriamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.deleteDEventos = deleteDEventos;
