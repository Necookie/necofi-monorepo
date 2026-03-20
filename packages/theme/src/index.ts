import { createFont, createTamagui, createTokens } from 'tamagui';

const tokens = createTokens({
  color: {
    background: '#ffffff',
    surface: '#ffffff',
    surfaceStrong: '#f4f4f5',
    text: '#09090b',
    textMuted: '#71717a',
    accent: '#2563eb',
    border: '#e4e4e7',
  },
  space: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    true: 16,
    5: 24,
    6: 32,
  },
  size: {
    0: 0,
    1: 12,
    2: 14,
    3: 16,
    4: 20,
    true: 20,
    5: 24,
    6: 32,
  },
  radius: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
  },
  zIndex: {
    0: 0,
    1: 10,
    2: 20,
    3: 30,
  },
});

export const appTheme = createTamagui({
  fonts: {
    body: createFont({
      family: 'System',
      size: {
        1: 12,
        2: 14,
        3: 16,
        4: 20,
        5: 24,
        6: 32,
      },
      lineHeight: {
        1: 16,
        2: 20,
        3: 24,
        4: 28,
        5: 32,
        6: 40,
      },
      weight: {
        4: '400',
        7: '700',
      },
      letterSpacing: {
        4: 0,
        7: -0.25,
      },
    }),
    heading: createFont({
      family: 'System',
      size: {
        1: 12,
        2: 14,
        3: 16,
        4: 20,
        5: 24,
        6: 32,
      },
      lineHeight: {
        1: 16,
        2: 20,
        3: 24,
        4: 28,
        5: 32,
        6: 40,
      },
      weight: {
        4: '500',
        7: '700',
      },
      letterSpacing: {
        4: 0,
        7: -0.4,
      },
    }),
  },
  tokens,
  themes: {
    light: {
      background: '#ffffff',
      color: '#09090b',
      borderColor: '#e4e4e7',
      accentColor: '#2563eb',
    },
    dark: {
      background: '#08111f',
      color: '#f8fafc',
      borderColor: '#1e293b',
      accentColor: '#38bdf8',
    },
  },
  defaultTheme: 'light',
  shorthands: {
    p: 'padding',
    px: 'paddingHorizontal',
    py: 'paddingVertical',
    m: 'margin',
    mx: 'marginHorizontal',
    my: 'marginVertical',
    bg: 'backgroundColor',
  },
});

export type AppTheme = typeof appTheme;
