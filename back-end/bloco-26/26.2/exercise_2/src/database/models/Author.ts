import { Model, INTEGER, STRING } from 'sequelize'; // Import the Model class and DataTypes object from the package
import db from './index'; // Import the connection instance

class Author extends Model {
  declare id: number;
  declare name: string;
}

Author.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db, // This is the connection instance
    modelName: 'authors', // The name of table in database
    timestamps: false, // This is to disable the default timestamp columns
  },
);

export default Author;
