// A simple logger implementation. In a real-world application,
// this would be replaced with a more robust logger like Winston or Pino.

const getTimestamp = (): string => new Date().toISOString();

export const logger = {
  info: (message: string, meta?: Record<string, any>) => {
    console.log(`[${getTimestamp()}] [INFO] ${message}`, meta || '');
  },
  warn: (message: string, meta?: Record<string, any>) => {
    console.warn(`[${getTimestamp()}] [WARN] ${message}`, meta || '');
  },
  error: (message: string, meta?: Record<string, any>) => {
    console.error(`[${getTimestamp()}] [ERROR] ${message}`, meta || '');
  },
  debug: (message: string, meta?: Record<string, any>) => {
    if (process.env.NODE_ENV !== 'production') {
      console.debug(`[${getTimestamp()}] [DEBUG] ${message}`, meta || '');
    }
  },
};
