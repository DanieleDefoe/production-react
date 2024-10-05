import { useContext } from 'react';
import { ThemeContext } from '../config';

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('useTheme hook must be used within a ThemeProvider');
  }

  return themeContext;
};
