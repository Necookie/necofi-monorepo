import type { PropsWithChildren } from 'react';
import { Paragraph, SizableText, Stack, YStack, XStack } from 'tamagui';

export const Screen = ({ children }: PropsWithChildren) => (
  <YStack
    flex={1}
    backgroundColor="$background"
    paddingHorizontal="$5"
    paddingVertical="$6"
    gap="$4"
    maxWidth={1080}
    width="100%"
    marginHorizontal="auto"
  >
    {children}
  </YStack>
);

export const Card = ({ children, ...props }: PropsWithChildren<any>) => (
  <Stack
    backgroundColor="$surface"
    borderWidth={1}
    borderColor="$borderColor"
    borderRadius="$4"
    padding="$5"
    gap="$4"
    {...props}
  >
    {children}
  </Stack>
);

export const Title = ({ children, ...props }: PropsWithChildren<any>) => (
  <SizableText size="$6" fontWeight="500" color="$color" letterSpacing={-0.5} {...props}>
    {children}
  </SizableText>
);

export const Copy = ({ children, ...props }: PropsWithChildren<any>) => (
  <Paragraph color="$color" opacity={0.7} lineHeight={24} {...props}>
    {children}
  </Paragraph>
);

export const HeaderStack = ({ children }: PropsWithChildren) => (
  <XStack justifyContent="space-between" alignItems="flex-end" marginBottom="$4">
    {children}
  </XStack>
);

export const Divider = () => (
  <Stack height={1} backgroundColor="$borderColor" width="100%" />
);
