import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultColors = {
  primary: '#1976d2',
  secondary: '#9c27b0',
  error: '#d32f2f',
  success: '#2e7d32',
  foreground: '#fcf2f2',
  background: '#fff7f7',
  header: '#1976d2'
} 

const colorTheme = JSON.parse(localStorage.getItem('colorTheme')) || defaultColors;
  


export const ColorContext = React.createContext(null);

const ColorThemeContext = ({children}) => {
  const [colors, setColors] = React.useState(colorTheme);

  const theme = createTheme({
    palette: {
      primary: {
        main: colors.primary,
      },
      secondary: {
        main: colors.secondary,
      },
      error: {
        main: colors.error,
      },
      success: {
        main: colors.success,
      },
      custom: {
        foreground: colors.foreground,
        background: colors.background,
        header: colors.header
      }
    },
  });

  //why theis not rerender when i use setColors

  return (
    <ColorContext.Provider value={{ colors, setColors }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorContext.Provider>
  );
};

export default ColorThemeContext;