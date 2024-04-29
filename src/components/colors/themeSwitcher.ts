'use client';

import * as React from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useColor } from '../../../hooks/useColor';

// import { useConfig } from "@/hooks/use-config"

export function ThemeSwitcher() {
  const [color] = useColor();
  //   const segment = useSelectedLayoutSegment();
  React.useEffect(() => {
    document.body.classList.forEach((className) => {
      if (className.match(/^theme.*/)) {
        document.body.classList.remove(className);
      }
    });

    // const theme = segment === 'themes' ? color : null;
    const theme = color || 'blue';
    if (theme) {
      return document.body.classList.add(`theme-${theme}`);
    }
  }, [color]);

  return null;
}
