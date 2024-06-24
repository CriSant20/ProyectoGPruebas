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
exports.deleteCargos = exports.updateCargo = exports.newCargos = exports.getCargoById = exports.getCargos = void 0;
const cargo_models_1 = require("../models/cargos.models");
const manage_error_1 = require("../error/manage.error");

const getCargos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cargosList = yield cargo_models_1.Cargos.findAll();
        res.json({
            cargosList
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR
        });
    }
});
exports.getCargos = getCargos;

const getCargoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idCargo = req.params.id;
        const cargo = yield cargo_models_1.Cargos.findOne({ where: { id: idCargo } });
        if (!cargo) {
            return res.status(404).json({
                msg: manage_error_1.ErrorMessages.CLUB_NOT_FOUND
            });
        }
        res.json(cargo);
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.getCargoById = getCargoById;

const newCargos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Nombre, seccionCargo, Estado } = req.body;
    const existCargo = yield cargo_models_1.Cargos.findOne({ where: { Nombre: Nombre } });
    if (existCargo) {
        return res.status(409).json({
            msg: manage_error_1.ErrorMessages.CLUB_EXIST
        });
    }
    try {
        yield cargo_models_1.Cargos.create({
            Nombre: Nombre,
            seccionCargo: seccionCargo,
            Estado:Estado
        });
        res.json({
            msg: `El cargo ${Nombre} se creó satisfactoriamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.newCargos = newCargos;

const updateCargo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { Nombre, seccionCargo, Estado } = req.body;
    const existCargo = yield cargo_models_1.Cargos.findOne({ where: { id: id } });
    if (!existCargo) {
        return res.status(404).json({
            msg: manage_error_1.ErrorMessages.CLUB_NOT_FOUND
        });
    }
    try {
        yield cargo_models_1.Cargos.update({
            Nombre: Nombre,
            seccionCargo: seccionCargo,
            Estado:Estado
        }, { where: { id: id } });
        res.json({
            msg: `El cargo ${existCargo.Nombre} ha sido editado satisfactoriamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.updateCargo = updateCargo;

const deleteCargos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const existCargo = yield cargo_models_1.Clubs.findOne({ where: { id: id } });
    if (!existCargo) {
        return res.status(404).json({
            msg: manage_error_1.ErrorMessages.CLUB_NOT_FOUND
        });
    }
    try {
        yield cargo_models_1.Clubs.destroy({ where: { id: id } });
        res.json({
            msg: `El cargo ${existCargo.Nombre} ha sido removido satisfactoriamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: manage_error_1.ErrorMessages.SERVER_ERROR,
            error
        });
    }
});
exports.deleteCargos = deleteCargos;
