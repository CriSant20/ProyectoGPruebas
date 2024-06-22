"use strict";

const { Clubs } = require('./clubs.models');
const { Members } = require('./members.models');
const { User } = require('./user.models'); 

exports.Projects = exports.Students = exports.Clubs = exports.User = exports.Members = exports.Cargos = exports.DClubs = exports.DEvents = exports.DetallePagoEventos = exports.DetallePagoExterno = exports.DProjects = exports.Events = exports.PagosEvents = exports.PagosExternos = exports.Tareas = void 0;
Object.defineProperty(exports, "__esModule", { value: true });

const user_models_1 = require("./user.models");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return user_models_1.User; } });

const projects_models_1 = require("./projects.models");
Object.defineProperty(exports, "Projects", { enumerable: true, get: function () { return projects_models_1.Projects; } });

const students_models_1 = require("./students.models");
Object.defineProperty(exports, "Students", { enumerable: true, get: function () { return students_models_1.Students; } });

const clubs_models_1 = require("./clubs.models");
Object.defineProperty(exports, "Clubs", { enumerable: true, get: function () { return clubs_models_1.Clubs; } });

const members_models_1 = require("./members.models");
Object.defineProperty(exports, "Members", { enumerable: true, get: function () { return members_models_1.Members; }});

const cargos_models_1 = require("./cargos.models");
Object.defineProperty(exports, "Cargos", { enumerable: true, get: function () { return cargos_models_1.Cargos}});

const dClubs_models_1 = require("./detalleClubs.models");
Object.defineProperty(exports, "DetalleClubs", { enumerable: true, get: function () { return dClubs_models_1.DClubs}});

const dEventos_models_1 = require("./detalleEventos.models");
Object.defineProperty(exports, "DetalleEventos", { enumerable: true, get: function () { return dEventos_models_1.DEvents}});

const dPEventos_models_1 = require("./DetallePagoEventos.models");
Object.defineProperty(exports, "DetallePagoEventos", { enumerable: true, get: function () { return dPEventos_models_1.DetallePagoEventos}});

const dPExterno_models_1 = require("./DetallePagoExterno.models");
Object.defineProperty(exports, "DetallePagoExterno", { enumerable: true, get: function () { return dPExterno_models_1.DetallePagoExterno}});

const dProjects_models_1 = require("./detalleProjects.models");
Object.defineProperty(exports, "DetalleProyectos", { enumerable: true, get: function () { return dProjects_models_1.DProjects}});

const events_models_1 = require("./events.models");
Object.defineProperty(exports, "Eventos", { enumerable: true, get: function () { return events_models_1.Events}});

const pEventos_models_1 = require("./pagosEventos.models");
Object.defineProperty(exports, "PagosEventos", { enumerable: true, get: function () { return pEventos_models_1.PagosEvents}});

const pExternos_models_1 = require("./PagosExternos.models");
Object.defineProperty(exports, "PagosExternos", { enumerable: true, get: function () { return pExternos_models_1.PagosExternos}});

const tareas_models_1 = require("./tareas.models");
Object.defineProperty(exports, "Tareas", { enumerable: true, get: function () { return tareas_models_1.Tareas}});
//@Associations
// Es difícil de entender pero
// Producto
// “El producto en la tabla tiene una clave foránea llamada idCatBelong, y una categoría podría tener algunos productos, pero un producto solo podría tener una categoría.”
// category_models_1.Category.hasMany(product_models_1.Product, { foreignKey: "idCatBelong", onUpdate: 'CASCADE' });

// Asociación entre estudiantes y clubes
// Asociación entre Clubs y Members

// Ejemplo de otras asociaciones
// Usuario Registro y Salida de productos
// productRegistration_models_1.ProductRegistration.belongsTo(user_models_1.User, { foreignKey: "dniUserReceive", onUpdate: 'CASCADE' });
// productOutput_models_1.ProductOutput.belongsTo(user_models_1.User, { foreignKey: "dniUserOutput", onUpdate: 'CASCADE' });

// Proveedor en Registro de productos
// productRegistration_models_1.ProductRegistration.belongsTo(supplier_models_1.Supplier, { foreignKey: 'idSup', onUpdate: 'CASCADE' });

// Detalle del Registro del Producto
// product_models_1.Product.hasMany(detailProductRegistration_models_1.DetailRegistration, { foreignKey: 'idProductBelong', onUpdate: 'CASCADE' });
// productRegistration_models_1.ProductRegistration.hasMany(detailProductRegistration_models_1.DetailRegistration, { foreignKey: 'idRegistrationBelong', onUpdate: 'CASCADE' });

// Detalle de la Salida del Producto
// product_models_1.Product.hasMany(detailProductOutput_models_1.DetailOutput, { foreignKey: 'idProductBelong', onUpdate: 'CASCADE' });
// productOutput_models_1.ProductOutput.hasMany(detailProductOutput_models_1.DetailOutput, { foreignKey: 'idOutputBelong', onUpdate: 'CASCADE' });
