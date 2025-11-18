import { Request, Response } from 'express';
import { successResponse } from '@/utils/apiResponse';

/**
 * @summary
 * Handles the health check request.
 *
 * @api {get} /api/v1/external/public/health Health Check
 * @apiName HealthCheck
 * @apiGroup Public
 * @apiVersion 1.0.0
 *
 * @apiSuccess {Boolean} success Indicates if the request was successful.
 * @apiSuccess {Object} data The response data.
 * @apiSuccess {String} data.status The current status of the server.
 * @apiSuccess {String} data.timestamp The server timestamp.
 */
export function getHandler(_req: Request, res: Response): void {
  const healthCheck = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
  };
  res.status(200).json(successResponse(healthCheck));
}
