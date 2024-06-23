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
exports.deleteEventos = exports.updateEventos = exports.newEventos = exports.getEventoById = exports.getEventos = void 0;
const eventos_models_1 = require("../models/events.models");
const manage_error_1 = require("../error/manage.error");

const getEventos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const eventosList = yield eventos_models_1.Events.findAll();
        res.json({
            eventosList
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR
        });
    }
});
exports.getEventos = getEventos;

const getEventoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idEvento = req.params.id;
        const evento = yield eventos_models_1.Events.findOne({ where: { id: idEvento } });
        if (!evento) {
            return res.status(404).json({
                msg: manage_error_1.ErrorMessages.EVENTS_NOT_FOUND
            });
        }
        res.json(evento);
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.getEventoById = getEventoById;

const newEventos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, NombreEvento, id_tipo_Evento, Estado } = req.body;
    const existEventos = yield eventos_models_1.Events.findOne({ where: { id: id } });
    if (existEventos) {
        return res.status(409).json({
            msg: manage_error_1.ErrorMessages.EVENTS_EXIST
        });
    }
    try {
        yield eventos_models_1.Events.create({
            id: id,
            NombreEvento: NombreEvento,
            id_tipo_Evento: id_tipo_Evento,
            Estado: Estado
        });
        res.json({
            msg: `El evento ${NombreEvento} se creó satisfactoriamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.newEventos = newEventos;

const updateEventos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idEvento = req.params.id;
    const { id, NombreEvento, id_tipo_Evento, Estado } = req.body;
    const existEventos = yield eventos_models_1.Events.findOne({ where: { id: idEvento } });
    if (!existEventos) {
        return res.status(404).json({
            msg: manage_error_1.ErrorMessages.EVENTS_NOT_FOUND
        });
    }
    try {
        yield eventos_models_1.Events.update({
            id: id,
            NombreEvento: NombreEvento,
            id_tipo_Evento: id_tipo_Evento,
            Estado: Estado
        }, { where: { id: idEvento } });
        res.json({
            msg: `El evento ${existEventos.NombreEvento} ha sido editado satisfactoriamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.updateEventos = updateEventos;

const deleteEventos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idEventos = req.params.id;
    const existEventos = yield eventos_models_1.Events.findOne({ where: { id: idEventos } });
    if (!existEventos) {
        return res.status(404).json({
            msg: manage_error_1.ErrorMessages.EVENTS_NOT_FOUND
        });
    }
    try {
        yield eventos_models_1.Events.destroy({ where: { id: idEventos } });
        res.json({
            msg: `El evento ${existEventos.NombreEvento} ha sido removido satisfactoriamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.deleteEventos = deleteEventos;
