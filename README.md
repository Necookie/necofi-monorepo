# NecoFi Monorepo

Base monorepo for the NecoFi product stack.

## Apps

- `apps/landing`: public marketing site on Next.js
- `apps/web`: authenticated product web app on Next.js
- `apps/mobile`: Expo mobile client
- `apps/api`: Fastify API with Prisma

## Shared packages

- `packages/api-client`: typed frontend API helpers
- `packages/types`: shared TypeScript contracts
- `packages/ui`: shared UI primitives/provider
- `packages/theme`: shared design tokens/theme objects
- `packages/utils`: shared utilities
- `packages/validation`: shared Zod schemas
- `packages/config`: shared lint and prettier config

## Local setup

1. Install dependencies:

```bash
pnpm install
```

2. Copy environment variables:

```bash
cp .env.example .env
```

3. Set a real `DATABASE_URL` in `.env`.

4. Generate Prisma client:

```bash
pnpm prisma:generate
```

## Workspace commands

```bash
pnpm dev
pnpm dev:api
pnpm dev:web
pnpm dev:landing
pnpm dev:mobile
pnpm lint
pnpm typecheck
pnpm build
pnpm check
```

## Default local ports

- Web app: `http://localhost:3000`
- API: `http://localhost:3001`
- Landing page: `http://localhost:3002`

## Current base status

- Monorepo wiring is in place with `pnpm` workspaces and Turbo
- Shared package boundaries are set up
- API health endpoint is already connected to web and mobile clients
- `pnpm lint`, `pnpm typecheck`, and `pnpm build` pass in a normal local environment
