import { createFont, createTamagui, createTokens } from 'tamagui';

const tokens = createTokens({
  color: {
    background: '#08111f',
    surface: '#0f172a',
    surfaceStrong: '#162033',
    text: '#f8fafc',
    textMuted: '#94a3b8',
    accent: '#38bdf8',
    border: '#1e293b',
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
    1: 6,
    2: 10,
    3: 14,
    4: 18,
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
        4: '600',
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
      background: '#f8fafc',
      color: '#0f172a',
      borderColor: '#cbd5e1',
      accentColor: '#0ea5e9',
    },
    dark: {
      background: '#08111f',
      color: '#f8fafc',
      borderColor: '#1e293b',
      accentColor: '#38bdf8',
    },
  },
  defaultTheme: 'dark',
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
