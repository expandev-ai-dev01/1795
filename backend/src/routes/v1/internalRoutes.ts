import { Router } from 'express';

const router = Router();

// Internal routes that require authentication
// The authentication middleware would be applied here or in server.ts

// ADD FEATURE-SPECIFIC INTERNAL ROUTES HERE
// Example:
// import * as carController from '@/api/v1/internal/cars/controller';
// router.post('/cars', carController.createHandler);

export default router;
