import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import { config } from '@/config';
import { errorMiddleware, notFoundMiddleware } from '@/middleware';
import { logger } from '@/utils/logger';
import apiRoutes from '@/routes';

const app: Application = express();

// Security Middleware
app.use(helmet());
app.use(cors(config.api.cors));

// Request Processing Middleware
app.use(compression());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Logging Middleware
if (config.env !== 'production') {
  app.use(morgan('dev'));
}

// API Routes with versioning
// This will create routes like:
// - /api/v1/external/...
// - /api/v1/internal/...
app.use('/api', apiRoutes);

// 404 Handler for unmatched routes
app.use(notFoundMiddleware);

// Centralized Error Handling Middleware
app.use(errorMiddleware);

const server = app.listen(config.api.port, () => {
  logger.info(`Server running on port ${config.api.port} in ${config.env} mode`);
});

// Graceful Shutdown
const signals = ['SIGTERM', 'SIGINT'];

const gracefulShutdown = (signal: string) => {
  process.on(signal, () => {
    logger.info(`${signal} received, closing server gracefully...`);
    server.close(() => {
      logger.info('Server closed.');
      process.exit(0);
    });
  });
};

signals.forEach((signal) => gracefulShutdown(signal));

export default app;
