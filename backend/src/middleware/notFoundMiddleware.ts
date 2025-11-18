import { Request, Response } from 'express';
import { errorResponse } from '@/utils/apiResponse';

export const notFoundMiddleware = (req: Request, res: Response) => {
  const message = `Route not found: ${req.method} ${req.originalUrl}`;
  res.status(404).json(errorResponse(message));
};
