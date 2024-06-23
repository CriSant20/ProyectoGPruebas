"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessages = void 0;
var ErrorMessages;
(function (ErrorMessages) {
    ErrorMessages["SUP_NOT_FOUND"] = "El proveedor no existe en la base de datos";
    ErrorMessages["SUP_EXIST"] = "El proveedor actualmente existe en la base de datos";
    ErrorMessages["CAT_NOT_FOUND"] = "La categoria no existe en la base de datos";
    ErrorMessages["CAT_EXIST"] = "La category actualmente existe en la base de datos";
    ErrorMessages["PRO_NOT_FOUND"] = "El producto no existe en la base de datos";
    ErrorMessages["PRO_EXIST"] = "El producto actualmente existe en la base de datos";
    ErrorMessages["USER_EXIST"] = "Ya existe un usuario con esa identificaci\u00F3n";
    ErrorMessages["SERVER_ERROR"] = "Upps, ha ocurrido un error con el servidor";
    ErrorMessages["UNAUTHORIZED"] = "No tienes los permisos suficientes para ingresar a este apartado";
    ErrorMessages["WRONG_PASS"] = "Contrase\u00F1a incorrecta";
    ErrorMessages["WRONG_TOKEN"] = "Token Invalido";
    ErrorMessages["MAX_AMOUNT"] = "No se puede retirar mas productos que la cantidad existente";
    
    
    ErrorMessages["DETALLE_PE_NOT_FOUND"] = "Detalle de pago externo no encontrado. . .";
    ErrorMessages["DETALLE_PE_EXISTS"] = "Nuevo detalle de pago ya existente, id repetido. . .";
    ErrorMessages["DEVENTS_NOT_FOUND"] = "Detalle de evento no encontrado. . .";
    ErrorMessages["DEVENTS_EXIST"] = "Nuevo detalle de evento ya existente, id repetido. . .";
    
})(ErrorMessages || (exports.ErrorMessages = ErrorMessages = {}));
