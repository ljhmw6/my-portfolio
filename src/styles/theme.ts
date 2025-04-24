// src/styles/theme.ts

export const theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#1A1A1A',
    background: '#ffffff',
    text: '#333333',
    card: '#f9f9f9',
    gray: '#e0e0e0',
    white: '#ffffff',
  },
  fontSize: {
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1280px',
  },
  spacing: (factor: number) => `${0.25 * factor}rem`,
};

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: '#1e1e1e',
    text: '#eeeeee',
    card: '#2a2a2a',
  },
};

export type ThemeType = typeof theme;
