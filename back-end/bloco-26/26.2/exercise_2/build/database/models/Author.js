"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize"); // Import the Model class and DataTypes object from the package
const index_1 = __importDefault(require("./index")); // Import the connection instance
class Author extends sequelize_1.Model {
}
Author.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
}, {
    sequelize: index_1.default,
    modelName: 'authors',
    timestamps: false, // This is to disable the default timestamp columns
});
exports.default = Author;
