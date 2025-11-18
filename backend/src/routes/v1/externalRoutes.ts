import { Router } from 'express';
import * as healthController from '@/api/v1/external/public/health/controller';

const router = Router();

// Public routes that do not require authentication

// Health check endpoint
router.get('/public/health', healthController.getHandler);

// ADD FEATURE-SPECIFIC PUBLIC ROUTES HERE
// Example:
// import * as publicCarController from '@/api/v1/external/public/cars/controller';
// router.get('/public/cars', publicCarController.listHandler);

export default router;
