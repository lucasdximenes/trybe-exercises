import UserModel from '../database/models/user.model';
import { User, newUser } from '../interfaces';
import Boom from '@hapi/boom';
import bcrypt from 'bcrypt';

class UserService {
  private _userModel: typeof UserModel;

  constructor() {
    this._userModel = UserModel;
  }

  public async getAll(): Promise<User[]> {
    const users = await this._userModel.findAll({
      attributes: {
        exclude: ['password'],
      },
      raw: true,
    });

    return users;
  }

  public async getById(id: number): Promise<User> {
    const user = await this._userModel.findByPk(id, {
      attributes: {
        exclude: ['password'],
      },
      raw: true,
    });

    if (!user) {
      throw Boom.notFound('User not found');
    }

    return user;
  }

  private async _checkIfUserExists(email: string): Promise<boolean> {
    const user = await this._userModel.findOne({ where: { email }, raw: true });
    return !!user;
  }

  public async create(user: newUser): Promise<User> {
    const { name, email, password } = user;

    if (await this._checkIfUserExists(email)) {
      throw Boom.conflict('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await (
      await this._userModel.create({ name, email, password: hashedPassword })
    ).get({
      plain: true,
    });

    return newUser;
  }

  public async login(email: string, password: string): Promise<User> {
    const user = await this._userModel.findOne({
      where: { email },
      raw: true,
    });
    if (!user) {
      throw Boom.notFound('Email or password incorrect');
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      throw Boom.unauthorized('Email or password incorrect');
    }

    return user;
  }

  public async update(id: number, user: newUser): Promise<User> {
    const { name, email, password } = user;

    const registeredUser = await this._userModel.findByPk(id, { raw: true });
    if (!registeredUser) {
      throw Boom.notFound('User not found');
    }

    await this._userModel.update({ name, email, password }, { where: { id } });
    const updatedUser = await this._userModel.findByPk(id, {
      raw: true,
      attributes: {
        exclude: ['password'],
      },
    });

    return updatedUser as User;
  }

  public async delete(id: number): Promise<void> {
    const user = await this._userModel.findByPk(id, { raw: true });
    if (!user) {
      throw Boom.notFound('User not found');
    }

    await this._userModel.destroy({ where: { id } });
  }
}

export default UserService;
