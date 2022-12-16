"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
const Author_1 = __importDefault(require("./Author"));
const Genre_1 = __importDefault(require("./Genre"));
class Book extends sequelize_1.Model {
}
Book.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    authorId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    genreId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: index_1.default,
    modelName: 'books',
    timestamps: false,
    underscored: true,
});
Book.belongsTo(Author_1.default, { foreignKey: 'authorId', as: 'author' });
Book.belongsTo(Genre_1.default, { foreignKey: 'genreId', as: 'genre' });
Author_1.default.hasMany(Book, { foreignKey: 'authorId', as: 'books' });
Genre_1.default.hasMany(Book, { foreignKey: 'genreId', as: 'books' });
exports.default = Book;
