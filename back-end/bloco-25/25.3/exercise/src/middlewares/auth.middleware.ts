import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import Boom from '@hapi/boom';
const secret = process.env.JWT_SECRET as string;

export const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    throw Boom.unauthorized('Token not found');
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.body.user = decoded;
    return next();
  } catch (error) {
    throw Boom.unauthorized('Expired or invalid token');
  }
};
