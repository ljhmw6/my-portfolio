// src/styles/styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      bg: string;
      text: string;
      gray: string;
      white: string;
      card:string;
      
    };
    fonts: {
      base: string;
      code: string;
    };
    spacing: (factor: number) => string;
  }
}
