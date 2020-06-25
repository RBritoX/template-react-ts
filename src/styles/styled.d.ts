import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;

      background: string;
      card: string;

      theme: string;
      themeBg: sting;

      text: string;

      transparent: string;
    };
  }
}
