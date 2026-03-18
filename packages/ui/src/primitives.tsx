import type { PropsWithChildren } from 'react';
import { Paragraph, SizableText, Stack, YStack } from 'tamagui';

export const Screen = ({ children }: PropsWithChildren) => (
  <YStack
    flex={1}
    backgroundColor="$background"
    paddingHorizontal="$5"
    paddingVertical="$6"
    gap="$4"
  >
    {children}
  </YStack>
);

export const Card = ({ children }: PropsWithChildren) => (
  <Stack
    backgroundColor="$surface"
    borderWidth={1}
    borderColor="$borderColor"
    borderRadius="$3"
    padding="$4"
    gap="$3"
  >
    {children}
  </Stack>
);

export const Title = ({ children }: PropsWithChildren) => (
  <SizableText size="$6" fontWeight="700" color="$color">
    {children}
  </SizableText>
);

export const Copy = ({ children }: PropsWithChildren) => (
  <Paragraph color="$color" opacity={0.82}>
    {children}
  </Paragraph>
);
