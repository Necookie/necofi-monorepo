'use client';

import { useQuery } from '@tanstack/react-query';
import { createHealthQueryOptions } from '@necofi/api-client';
import { Card, Copy, Screen, Title } from '@necofi/ui';

const apiBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3001';

export const HomeScreen = () => {
  const healthQuery = useQuery(createHealthQueryOptions(apiBaseUrl));
  const healthStatus = healthQuery.isLoading
    ? 'checking'
    : healthQuery.isError
      ? 'unreachable'
      : (healthQuery.data?.status ?? 'unknown');

  return (
    <Screen>
      <Title>necofi</Title>
      <Card>
        <Title>Web app ready</Title>
        <Copy>Next.js, Tamagui, and TanStack Query are wired together.</Copy>
        <Copy>
          API health: {healthStatus}
        </Copy>
      </Card>
    </Screen>
  );
};
