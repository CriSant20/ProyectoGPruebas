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
exports.deleteClub = exports.updateClub = exports.newClub = exports.getClubById = exports.getClubs = void 0;
const clubs_models_1 = require("../models/clubs.models");
const manage_error_1 = require("../error/manage.error");

const getClubs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clubsList = yield clubs_models_1.Clubs.findAll();
        res.json({
            clubsList
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR
        });
    }
});
exports.getClubs = getClubs;

const getClubById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idClub = req.params.id;
        const club = yield clubs_models_1.Clubs.findOne({ where: { ID_Club: idClub } });
        if (!club) {
            return res.status(404).json({
                msg: manage_error_1.ErrorMessages.CLUB_NOT_FOUND
            });
        }
        res.json(club);
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.getClubById = getClubById;

const newClub = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { NombreClub, Encargado } = req.body;
    const existClub = yield clubs_models_1.Clubs.findOne({ where: { NombreClub: NombreClub } });
    if (existClub) {
        return res.status(409).json({
            msg: manage_error_1.ErrorMessages.CLUB_EXIST
        });
    }
    try {
        yield clubs_models_1.Clubs.create({
            NombreClub: NombreClub,
            Encargado: Encargado
        });
        res.json({
            msg: `El club ${NombreClub} se creó satisfactoriamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.newClub = newClub;

const updateClub = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idClub = req.params.id;
    const { NombreClub, Encargado } = req.body;
    const existClub = yield clubs_models_1.Clubs.findOne({ where: { ID_Club: idClub } });
    if (!existClub) {
        return res.status(404).json({
            msg: manage_error_1.ErrorMessages.CLUB_NOT_FOUND
        });
    }
    try {
        yield clubs_models_1.Clubs.update({
            NombreClub: NombreClub,
            Encargado: Encargado
        }, { where: { ID_Club: idClub } });
        res.json({
            msg: `El club ${existClub.NombreClub} ha sido editado satisfactoriamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.updateClub = updateClub;

const deleteClub = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idClub = req.params.id;
    const existClub = yield clubs_models_1.Clubs.findOne({ where: { ID_Club: idClub } });
    if (!existClub) {
        return res.status(404).json({
            msg: manage_error_1.ErrorMessages.CLUB_NOT_FOUND
        });
    }
    try {
        yield clubs_models_1.Clubs.destroy({ where: { ID_Club: idClub } });
        res.json({
            msg: `El club ${existClub.NombreClub} ha sido removido satisfactoriamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.deleteClub = deleteClub;
