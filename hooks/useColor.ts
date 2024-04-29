import { atom, useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const colo = atomWithStorage<
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
>('color', 'red');

export const useColor = () => {
  return useAtom(colo);
};
