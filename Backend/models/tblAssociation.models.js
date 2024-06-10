"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projects = exports.Students = exports.Clubs = exports.User = void 0;

const user_models_1 = require("./user.models");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return user_models_1.User; } });

const projects_models_1 = require("./projects.models");
Object.defineProperty(exports, "Projects", { enumerable: true, get: function () { return projects_models_1.Projects; } });

const students_models_1 = require("./students.models");
Object.defineProperty(exports, "Students", { enumerable: true, get: function () { return students_models_1.Students; } });

const clubs_models_1 = require("./clubs.models");
Object.defineProperty(exports, "Clubs", { enumerable: true, get: function () { return clubs_models_1.Clubs; } });

//@Associations
// Es difícil de entender pero
// Producto
// “El producto en la tabla tiene una clave foránea llamada idCatBelong, y una categoría podría tener algunos productos, pero un producto solo podría tener una categoría.”
// category_models_1.Category.hasMany(product_models_1.Product, { foreignKey: "idCatBelong", onUpdate: 'CASCADE' });

// Asociación entre estudiantes y clubes


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
