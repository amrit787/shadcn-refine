import { useTheme } from 'next-themes';
import { themes } from './themes';
export type CssProperty =
  | 'background'
  | 'foreground'
  | 'card'
  | 'primary'
  | 'primary-foreground'
  | 'radius'
  | 'border';
const setTheme = (el: HTMLElement, property: CssProperty, value: string) => {
  el.style.setProperty(`--${property}`, value);
};

export function applyStyle(property: CssProperty, value: string) {
  let r = document.querySelector('body') as HTMLElement;
  if (!r) return;
  setTheme(r, property, value);
}
