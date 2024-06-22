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
exports.deletePExterno = exports.updatePExterno = exports.newPExterno = exports.getPExternoById = exports.getPExternos = void 0;
const Pexternos_models_1 = require("../models/pagosEventos.models");
const manage_error_1 = require("../error/manage.error");

const getPExternos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const PexternosList = yield Pexternos_models_1.Pexterno.findAll();
        res.json({
            PexternosList
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR
        });
    }
});
exports.getPExternos = getPExternos;

const getPExternoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idPExterno = req.params.id;
        const Pexterno = yield Pexternos_models_1.Pexterno.findOne({ where: { id: idPExterno } });
        if (!Pexterno) {
            return res.status(404).json({
                msg: manage_error_1.ErrorMessages.CLUB_NOT_FOUND
            });
        }
        res.json(Pexterno);
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.getPExternoById = getPExternoById;

const newPExterno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, id_evento, fechaEvento, id_detalle_pago } = req.body;
    const existPexterno = yield Pexternos_models_1.Pexterno.findOne({ where: { id: id } });
    if (existPexterno) {
        return res.status(409).json({
            msg: manage_error_1.ErrorMessages.CLUB_EXIST
        });
    }
    try {
        yield Pexternos_models_1.DetallePagoExterno.create({
            id: id,
            id_evento: id_evento,
            fechaEvento: fechaEvento,
            id_detalle_pago: id_detalle_pago
        });
        res.json({
            msg: `El pago externo ${id} se creó satisfactoriamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.newPExterno = newPExterno;

const updatePExterno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idPExterno = req.params.id;
    const { id, id_evento, fechaEvento, id_detalle_pago } = req.body;
    const existPexterno = yield Pexternos_models_1.PEvents.findOne({ where: { id: idPExterno } });
    if (!existPexterno) {
        return res.status(404).json({
            msg: manage_error_1.ErrorMessages.CLUB_NOT_FOUND
        });
    }
    try {
        yield Pexternos_models_1.PEvents.update({
            id: id,
            id_evento: id_evento,
            fechaEvento: fechaEvento,
            id_detalle_pago: id_detalle_pago
        }, { where: { id: idPExterno } });
        res.json({
            msg: `El pago externo ${existPexterno.id} ha sido editado satisfactoriamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.updatePExterno = updatePExterno;

const deletePExterno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idPExterno = req.params.id;
    const existPexterno = yield Pexternos_models_1.PEvents.findOne({ where: { id: idPExterno } });
    if (!existPexterno) {
        return res.status(404).json({
            msg: manage_error_1.ErrorMessages.CLUB_NOT_FOUND
        });
    }
    try {
        yield Pexternos_models_1.PEvents.destroy({ where: { id: idPExterno } });
        res.json({
            msg: `El pago ${existPexterno.id} ha sido removido satisfactoriamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.deletePExterno = deletePExterno;
