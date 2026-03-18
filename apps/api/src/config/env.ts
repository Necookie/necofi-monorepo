import { config as loadEnv } from 'dotenv';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { z } from 'zod';

const currentDir = dirname(fileURLToPath(import.meta.url));
const appEnvPath = resolve(currentDir, '../../.env');
const repoEnvPath = resolve(currentDir, '../../../../.env');

// Load the repo-level env for monorepo commands, then let app-local overrides win.
loadEnv({ path: repoEnvPath });
loadEnv({ path: appEnvPath, override: true });

const envSchema = z.object({
  API_HOST: z.string().default('0.0.0.0'),
  API_PORT: z.coerce.number().default(3001),
  DATABASE_URL: z.string().min(1),
  NEXT_PUBLIC_API_BASE_URL: z.string().url().optional(),
  EXPO_PUBLIC_API_BASE_URL: z.string().url().optional(),
});

export const env = envSchema.parse(process.env);
