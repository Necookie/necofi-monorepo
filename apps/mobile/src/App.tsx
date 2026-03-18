import { useQuery } from '@tanstack/react-query';
import { createHealthQueryOptions } from '@necofi/api-client';
import { Card, Copy, NecoFiProvider, Screen, Title } from '@necofi/ui';

const apiBaseUrl =
  process.env.EXPO_PUBLIC_API_BASE_URL ?? 'http://localhost:3001';

const MobileShell = () => {
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
        <Title>Mobile app ready</Title>
        <Copy>Expo, Tamagui, and TanStack Query are wired together.</Copy>
        <Copy>
          API health: {healthStatus}
        </Copy>
      </Card>
    </Screen>
  );
};

export const AppRoot = () => (
  <NecoFiProvider>
    <MobileShell />
  </NecoFiProvider>
);
