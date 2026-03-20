'use client';

import { useQuery } from '@tanstack/react-query';
import { createHealthQueryOptions } from '@necofi/api-client';
import { Card, Copy, Screen, Title, HeaderStack, Divider } from '@necofi/ui';
import { YStack, XStack, SizableText } from 'tamagui';

const apiBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3001';

export const HomeScreen = () => {
  const healthQuery = useQuery(createHealthQueryOptions(apiBaseUrl));
  const healthStatus = healthQuery.isLoading
    ? 'Checking connection...'
    : healthQuery.isError
      ? 'Unreachable'
      : (healthQuery.data?.status ?? 'Connected');

  return (
    <Screen>
      <HeaderStack>
        <YStack>
          <SizableText size="$3" textTransform="uppercase" letterSpacing={1.2} color="$textMuted" marginBottom="$1">
            Dashboard
          </SizableText>
          <Title size="$8" letterSpacing={-1}>Overview</Title>
        </YStack>
        <XStack backgroundColor="$surfaceStrong" paddingHorizontal="$3" paddingVertical="$1" borderRadius="$2" alignItems="center" gap="$2">
          <YStack width={8} height={8} borderRadius={4} backgroundColor={healthStatus === 'Connected' ? '$accent' : '$borderColor'} />
          <SizableText size="$2" color="$textMuted">API: {healthStatus}</SizableText>
        </XStack>
      </HeaderStack>

      <YStack gap="$5" marginTop="$4">
        <Card borderTopWidth={3} borderTopColor="$accent">
          <SizableText size="$3" color="$textMuted" marginBottom="$2">Total Balance</SizableText>
          <SizableText size="$9" fontWeight="400" letterSpacing={-1.5}>$18,420.80</SizableText>
        </Card>

        <YStack gap="$3">
          <Title size="$5">Recent Activity</Title>
          <Card padding="$0" overflow="hidden">
            <YStack>
              {/* Transaction 1 */}
              <XStack padding="$4" justifyContent="space-between" alignItems="center">
                <YStack gap="$1">
                  <SizableText fontWeight="500">Monthly Salary</SizableText>
                  <SizableText size="$2" color="$textMuted">Stripe Inc • Today</SizableText>
                </YStack>
                <SizableText fontWeight="500" color="$text">+$5,240.00</SizableText>
              </XStack>
              <Divider />
              {/* Transaction 2 */}
              <XStack padding="$4" justifyContent="space-between" alignItems="center">
                <YStack gap="$1">
                  <SizableText fontWeight="500">Apartment Rent</SizableText>
                  <SizableText size="$2" color="$textMuted">Scheduled • Tomorrow</SizableText>
                </YStack>
                <SizableText fontWeight="500">-$2,100.00</SizableText>
              </XStack>
              <Divider />
              {/* Transaction 3 */}
              <XStack padding="$4" justifyContent="space-between" alignItems="center">
                <YStack gap="$1">
                  <SizableText fontWeight="500">Whole Foods Market</SizableText>
                  <SizableText size="$2" color="$textMuted">Groceries • Yesterday</SizableText>
                </YStack>
                <SizableText fontWeight="500">-$142.50</SizableText>
              </XStack>
            </YStack>
          </Card>
        </YStack>
      </YStack>
    </Screen>
  );
};
