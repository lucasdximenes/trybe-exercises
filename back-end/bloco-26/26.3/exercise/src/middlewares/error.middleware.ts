import { Request, Response, NextFunction } from 'express';
import { Boom } from '@hapi/boom';

const errorMiddleware = (err: Error & Boom, _req: Request, res: Response, _next: NextFunction): Response => {
  if (err.isBoom) {
    const {
      statusCode,
      payload: { message },
    } = err.output;
    return res.status(statusCode).json({ message });
  }
  console.error(err);
  return res.status(500).json({ message: 'Internal Server Error' });
};

export default errorMiddleware;
