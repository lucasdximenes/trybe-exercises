import { Model, INTEGER, STRING } from 'sequelize';
import db from './index';

import Author from './Author';
import Genre from './Genre';

class Book extends Model {
  declare id: number;
  declare title: string;
  declare authorId: number;
  declare genreId: number;
}

Book.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: STRING,
      allowNull: false,
    },
    authorId: {
      type: INTEGER,
      allowNull: false,
    },
    genreId: {
      type: INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'books',
    timestamps: false,
    underscored: true,
  },
);

Book.belongsTo(Author, { foreignKey: 'authorId', as: 'author' });
Book.belongsTo(Genre, { foreignKey: 'genreId', as: 'genre' });

Author.hasMany(Book, { foreignKey: 'authorId', as: 'books' });
Genre.hasMany(Book, { foreignKey: 'genreId', as: 'books' });

export default Book;
