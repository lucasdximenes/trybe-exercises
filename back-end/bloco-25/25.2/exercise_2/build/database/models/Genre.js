"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
class Genre extends sequelize_1.Model {
}
Genre.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    genre: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
}, {
    sequelize: index_1.default,
    modelName: 'genres',
    timestamps: false,
});
exports.default = Genre;
