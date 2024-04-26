import { useTheme } from 'next-themes';
import { themes } from './themes';

const setTheme = (
  el: Element,
  mode: 'dark' | 'light' = 'light',
  themeName:
    | 'zinc'
    | 'slate'
    | 'stone'
    | 'gray'
    | 'neutral'
    | 'red'
    | 'rose'
    | 'orange'
    | 'green'
    | 'blue'
    | 'yellow'
    | 'violet'
) => {
  const theme = themes.find((item) => item.name === themeName);
  if (!theme) return;
  let t = theme.cssVars[mode];

  for (let key in t) {
    //@ts-ignore
    el?.style.setProperty(`--${key}`, t[key]);
  }
};

export const useSetTheme = () => {
  let themeNames = themes.map((item) => item.name);
  let { resolvedTheme: mode } = useTheme() as {
    resolvedTheme: 'light' | 'dark' | null;
  };

  function apply(name: (typeof themeNames)[number]) {
    let r = document.querySelector('.themee');

    setTheme(r, mode === 'dark' ? 'dark' : 'light', name);
  }

  return { apply };
};
