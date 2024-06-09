"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
 exports.Projects = exports.User  = void 0;


const user_models_1 = require("./user.models");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return user_models_1.User; } });


const projects_models_1 = require("./projects.models");
Object.defineProperty(exports, "Projects", { enumerable: true, get: function () { return projects_models_1.Projects; } });



//@Associations
//Its difficult to understand but 
//Product
//“The product in the table has a foreign key called idCatBelong, and a category could have some products, but a product could only have one category.”
// category_models_1.Category.hasMany(product_models_1.Product, { foreignKey: "idCatBelong", onUpdate: 'CASCADE' });
//User Register and Output products
// productRegistration_models_1.ProductRegistration.belongsTo(user_models_1.User, { foreignKey: "dniUserReceive", onUpdate: 'CASCADE' });
// productOutput_models_1.ProductOutput.belongsTo(user_models_1.User, { foreignKey: "dniUserOutput", onUpdate: 'CASCADE' });
//Supplier in Register products
// productRegistration_models_1.ProductRegistration.belongsTo(supplier_models_1.Supplier, { foreignKey: 'idSup', onUpdate: 'CASCADE' });
//Product Registration Detail
// product_models_1.Product.hasMany(detailProductRegistration_models_1.DetailRegistration, { foreignKey: 'idProductBelong', onUpdate: 'CASCADE' });
// productRegistration_models_1.ProductRegistration.hasMany(detailProductRegistration_models_1.DetailRegistration, { foreignKey: 'idRegistrationBelong', onUpdate: 'CASCADE' });
//Product Output Detail
// product_models_1.Product.hasMany(detailProductOutput_models_1.DetailOutput, { foreignKey: 'idProductBelong', onUpdate: 'CASCADE' });
// productOutput_models_1.ProductOutput.hasMany(detailProductOutput_models_1.DetailOutput, { foreignKey: 'idOutputBelong', onUpdate: 'CASCADE' });
