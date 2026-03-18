import cors from '@fastify/cors';
import type { FastifyInstance } from 'fastify';

const developmentOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'http://localhost:8081',
  'http://127.0.0.1:8081',
];

export const registerCors = async (app: FastifyInstance) => {
  await app.register(cors, {
    origin: (origin, callback) => {
      if (!origin || developmentOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error('Origin not allowed by CORS'), false);
    },
    credentials: true,
  });
};
