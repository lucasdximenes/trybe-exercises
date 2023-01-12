import { newUserSchema, loginUserSchema } from './schemas';
import { Request, Response, NextFunction } from 'express';
import Boom from '@hapi/boom';
import { newUser } from '../interfaces';

export const validateUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;
  const user: newUser = { name, email, password };

  const { error } = newUserSchema.validate(user);

  if (error) {
    throw Boom.badRequest(error.message);
  }

  return next();
};

export const validateLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const user = { email, password };

  const { error } = loginUserSchema.validate(user);

  if (error) {
    throw Boom.badRequest(error.message);
  }

  return next();
};
