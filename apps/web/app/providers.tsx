'use client';

import type { PropsWithChildren } from 'react';
import { NecoFiProvider } from '@necofi/ui';

export const Providers = ({ children }: PropsWithChildren) => (
  <NecoFiProvider>{children}</NecoFiProvider>
);
