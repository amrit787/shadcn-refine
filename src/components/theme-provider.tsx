'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  let themes = ['theme-red', 'light', 'dark'];
  return (
    <NextThemesProvider themes={themes} {...props}>
      {children}
    </NextThemesProvider>
  );
}
