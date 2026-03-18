import { env } from './config/env.js';
import { buildServer } from './app.js';

const start = async () => {
  const app = await buildServer();

  try {
    await app.listen({
      host: env.API_HOST,
      port: env.API_PORT,
    });
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

void start();
