import { Request, Response, NextFunction } from 'express';
import { config } from '@/config';
import { logger } from '@/utils/logger';
import { errorResponse } from '@/utils/apiResponse';

export interface AppError extends Error {
  statusCode: number;
  isOperational: boolean;
}

export const errorMiddleware = (
  err: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  const message = err.isOperational ? err.message : 'An unexpected error occurred.';

  logger.error(err.message, {
    statusCode,
    stack: err.stack,
    isOperational: err.isOperational,
  });

  const response = errorResponse(message, config.env === 'development' ? err.stack : undefined);

  res.status(statusCode).json(response);
};
