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
exports.deletePEventos = exports.updatePEventos = exports.newPEventos = exports.getPEventoById = exports.getPEventos = void 0;
const Peventos_models_1 = require("../models/DetallePagoEventos.models");
const manage_error_1 = require("../error/manage.error");

const getPEventos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const PeventosList = yield Peventos_models_1.DetallePagoEventos.findAll();
        res.json({
            PeventosList
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR
        });
    }
});
exports.getPEventos = getPEventos;

const getPEventoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idPEvento = req.params.id;
        const Pevento = yield Peventos_models_1.DetallePagoEventos.findOne({ where: { id: idPEvento } });
        if (!Pevento) {
            return res.status(404).json({
                msg: manage_error_1.ErrorMessages.CLUB_NOT_FOUND
            });
        }
        res.json(Pevento);
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.getPEventoById = getPEventoById;

const newPEventos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, id_usuarios } = req.body;
    const existPEventos = yield Peventos_models_1.DetallePagoEventos.findOne({ where: { id: id } });
    if (existPEventos) {
        return res.status(409).json({
            msg: manage_error_1.ErrorMessages.CLUB_EXIST
        });
    }
    try {
        yield Peventos_models_1.DEvents.create({
            id: id,
            id_usuarios: id_usuarios
        });
        res.json({
            msg: `El Detalle del pago de eventos ${id} se creó satisfactoriamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.newPEventos = newPEventos;

const updatePEventos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idPEvento = req.params.id;
    const { id, id_usuarios } = req.body;
    const existPEventos = yield Peventos_models_1.DetallePagoEventos.findOne({ where: { id: idPEvento } });
    if (!existPEventos) {
        return res.status(404).json({
            msg: manage_error_1.ErrorMessages.CLUB_NOT_FOUND
        });
    }
    try {
        yield Peventos_models_1.PEvents.update({
            id: id,
            id_usuarios: id_usuarios
        }, { where: { id: idPEvento } });
        res.json({
            msg: `El detalle del evento ${existPEventos.id} ha sido editado satisfactoriamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.updatePEventos = updatePEventos;

const deletePEventos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idPEventos = req.params.id;
    const existPEventos = yield Peventos_models_1.DetallePagoEventos.findOne({ where: { id: idPEventos } });
    if (!existPEventos) {
        return res.status(404).json({
            msg: manage_error_1.ErrorMessages.CLUB_NOT_FOUND
        });
    }
    try {
        yield Peventos_models_1.PEvents.destroy({ where: { id: idDEventos } });
        res.json({
            msg: `El detalle del evento ${existPEventos.id} ha sido removido satisfactoriamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.deletePEventos = deletePEventos;
