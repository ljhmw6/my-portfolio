export const theme = {
    colors: {
      primary: '#2F80ED',
      secondary: '#F2C94C',
      bg: '#ffffff',
      text: '#333333',
      gray: '#888888',
      white: '#ffffff',
      card: '#ffffff',
      background: '#333333',
    },
    fonts: {
      base: 'Pretendard, sans-serif',
      code: 'Source Code Pro, monospace',
    },
    spacing: (factor: number) => `${factor * 8}px`,
  };
  
  export type ThemeType = typeof theme;
  