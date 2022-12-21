import { Model, INTEGER, STRING } from 'sequelize';
import db from './index';

class Users extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;
}

Users.init(
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
    email: {
      type: STRING,
      allowNull: false,
    },
    password: {
      type: STRING,
    },
  },
  {
    sequelize: db,
    modelName: 'users',
    timestamps: false,
  },
);

export default Users;
