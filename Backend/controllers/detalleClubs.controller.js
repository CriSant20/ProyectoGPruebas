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
exports.deleteDClub = exports.updateDClub = exports.newDClub = exports.getDClubById = exports.getDClubs = void 0;
const Dclubs_models_1 = require("../models/detalleClubs.models");
const manage_error_1 = require("../error/manage.error");

const getDClubs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const DclubsList = yield Dclubs_models_1.DClubs.findAll();
        res.json({
            DclubsList
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR
        });
    }
});
exports.getDClubs = getDClubs;

const getDClubById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idDClub = req.params.id;
        const Dclub = yield Dclubs_models_1.DClubs.findOne({ where: { id: idDClub } });
        if (!Dclub) {
            return res.status(404).json({
                msg: manage_error_1.ErrorMessages.CLUB_NOT_FOUND
            });
        }
        res.json(Dclub);
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.getDClubById = getDClubById;

const newDClub = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, id_estudiantes, id_cargo } = req.body;
    const existDClub = yield Dclubs_models_1.DClubs.findOne({ where: { id: id } });
    if (existDClub) {
        return res.status(409).json({
            msg: manage_error_1.ErrorMessages.CLUB_EXIST
        });
    }
    try {
        yield Dclubs_models_1.DClubs.create({
            id: id,
            id_estudiantes: id_estudiantes,
            id_cargo: id_cargo
        });
        res.json({
            msg: `El Detalle de club ${id} se creó satisfactoriamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.newDClub = newDClub;

const updateDClub = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idDClub = req.params.id;
    const { id, id_estudiantes, id_cargo } = req.body;
    const existDClub = yield Dclubs_models_1.DClubs.findOne({ where: { id: idDClub } });
    if (!existDClub) {
        return res.status(404).json({
            msg: manage_error_1.ErrorMessages.CLUB_NOT_FOUND
        });
    }
    try {
        yield Dclubs_models_1.DClubs.update({
            id: id,
            id_estudiantes: id_estudiantes,
            id_cargo: id_cargo
        }, { where: { id: idDClub } });
        res.json({
            msg: `El detalle de club ${existDClub.id} ha sido editado satisfactoriamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.updateDClub = updateDClub;

const deleteDClub = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idDClub = req.params.id;
    const existDClub = yield Dclubs_models_1.DClubs.findOne({ where: { id: idDClub } });
    if (!existDClub) {
        return res.status(404).json({
            msg: manage_error_1.ErrorMessages.CLUB_NOT_FOUND
        });
    }
    try {
        yield Dclubs_models_1.DClubs.destroy({ where: { id: idDClub } });
        res.json({
            msg: `El detalle de club ${existDClub.id} ha sido removido satisfactoriamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.deleteDClub = deleteDClub;
