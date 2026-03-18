import Fastify from 'fastify';
import { registerCors } from './plugins/cors.js';
import { registerHealthRoutes } from './routes/health.js';

export const buildServer = async () => {
  const app = Fastify({
    logger: true,
  });

  app.setErrorHandler((error, _request, reply) => {
    app.log.error(error);

    const message =
      error instanceof Error ? error.message : 'Unexpected server error';
    const statusCode =
      typeof error === 'object' &&
      error !== null &&
      'statusCode' in error &&
      typeof error.statusCode === 'number'
        ? error.statusCode
        : 500;

    reply.status(statusCode).send({
      message,
    });
  });

  await registerCors(app);
  await registerHealthRoutes(app);

  return app;
};
