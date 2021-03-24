import { defaultTheme } from 'styles/theme';
import { Dispatch, SetStateAction, createContext } from 'react';

type IContext = {
  theme: unknown;
  setTheme?: Dispatch<SetStateAction<unknown>>
}

export const ThemeContext = createContext<IContext>({
  theme: defaultTheme
});