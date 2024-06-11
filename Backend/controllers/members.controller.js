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

const { Members } = require('../models/members.models');
const { ErrorMessages } = require('../error/manage.error');

// Obtener todos los miembros del club
const getMembers = async (req, res) => {
    try {
        const membersList = await Members.findAll();
        res.json({
            membersList
        });
    } catch (error) {
        return res.status(500).json({
            msg: ErrorMessages.SERVER_ERROR
        });
    }
};
exports.getMembers = getMembers;

// Obtener un miembro del club por su ID
const getMemberById = async (req, res) => {
    try {
        const memberId = req.params.id;
        const findMember = await Members.findByPk(memberId);
        if (!findMember) {
            return res.status(404).json({
                msg: ErrorMessages.MEMBER_NOT_FOUND
            });
        }
        res.json(findMember);
    } catch (error) {
        return res.status(500).json({
            msg: ErrorMessages.SERVER_ERROR,
            error
        });
    }
};
exports.getMemberById = getMemberById;

// Crear un nuevo miembro del club
const newMember = async (req, res) => {
    const { id_Miembro, Nombre, Apellido, Edad, Semestre, Carrera, Rol } = req.body;
    const existMember = await Members.findOne({ where: { Nombre: Nombre, Apellido: Apellido } });
    if (existMember) {
        return res.status(409).json({
            msg: ErrorMessages.MEMBER_EXIST
        });
    }
    try {
        await Members.create({
            id_Miembro: id_Miembro,
            Nombre: Nombre,
            Apellido: Apellido,
            Edad: Edad,
            Semestre: Semestre,
            Carrera: Carrera,
            Rol: Rol
        });
        res.json({
            msg: `El miembro ${Nombre} ${Apellido} se creó satisfactoriamente`
        });
    } catch (error) {
        return res.status(500).json({
            msg: ErrorMessages.SERVER_ERROR,
            error
        });
    }
};
exports.newMember = newMember;

// Actualizar un miembro del club
const updateMember = async (req, res) => {
    const memberId = req.params.id;
    const { Nombre, Apellido, Edad, Semestre, Carrera, Rol } = req.body;
    const existMember = await Members.findByPk(memberId);
    if (!existMember) {
        return res.status(404).json({
            msg: ErrorMessages.MEMBER_NOT_FOUND
        });
    }
    try {
        await existMember.update({
            Nombre: Nombre,
            Apellido: Apellido,
            Edad: Edad,
            Semestre: Semestre,
            Carrera: Carrera,
            Rol: Rol
        });
        res.json({
            msg: `El miembro ${existMember.Nombre} ${existMember.Apellido} ha sido editado satisfactoriamente`
        });
    } catch (error) {
        return res.status(500).json({
            msg: ErrorMessages.SERVER_ERROR,
            error
        });
    }
};
exports.updateMember = updateMember;

// Eliminar un miembro del club
const deleteMember = async (req, res) => {
    const memberId = req.params.id;
    const existMember = await Members.findByPk(memberId);
    if (!existMember) {
        return res.status(404).json({
            msg: ErrorMessages.MEMBER_NOT_FOUND
        });
    }
    try {
        await existMember.destroy();
        res.json({
            msg: `El miembro ${existMember.Nombre} ${existMember.Apellido} ha sido removido satisfactoriamente`
        });
    } catch (error) {
        return res.status(500).json({
            msg: ErrorMessages.SERVER_ERROR,
            error
        });
    }
};
exports.deleteMember = deleteMember;
