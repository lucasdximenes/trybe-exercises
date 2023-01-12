import { Request, Response } from 'express';
import { User, newUser } from '../interfaces';
import UserService from '../services/user.services';
import jwt from 'jsonwebtoken';
const secret = process.env.JWT_SECRET;

class UserController {
  private _userService: UserService;

  constructor() {
    this._userService = new UserService();
  }

  public async getAll(_req: Request, res: Response): Promise<Response> {
    const users: User[] = await this._userService.getAll();
    return res.status(200).json({ users });
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const user: User = await this._userService.getById(Number(id));
    return res.status(200).json({ user });
  }

  public async register(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;
    const user: newUser = { name, email, password };
    const newUser: User = await this._userService.create(user);

    const payload = { id: newUser.id, email: newUser.email };
    const token = jwt.sign(payload, secret as string, { expiresIn: '1d' });

    return res.status(201).json({ token });
  }

  public async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const user: User = await this._userService.login(email, password);

    const payload = { id: user.id, email: user.email };
    const token = jwt.sign(payload, secret as string, { expiresIn: '1d' });

    return res.status(200).json({ token });
  }

  public async edit(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;
    const { id } = req.body.user;
    const user: newUser = { name, email, password };
    const updatedUser: User = await this._userService.update(Number(id), user);
    return res.status(200).json({ updatedUser });
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.body.user;
    await this._userService.delete(Number(id));
    return res.status(204).json();
  }
}

export default UserController;
