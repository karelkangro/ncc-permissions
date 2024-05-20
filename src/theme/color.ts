import { css } from 'styled-components';

type ColorType =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "info"

type ShadeType = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type BaseThemeType = {
  '--color-primary': string;
  '--color-primary-50': string;
  '--color-primary-100': string;
  '--color-primary-200': string;
  '--color-primary-300': string;
  '--color-primary-400': string;
  '--color-primary-500': string;
  '--color-primary-600': string;
  '--color-primary-700': string;
  '--color-primary-800': string;
  '--color-primary-900': string;
  '--color-secondary': string;
  '--color-secondary-50': string;
  '--color-secondary-100': string;
  '--color-secondary-200': string;
  '--color-secondary-300': string;
  '--color-secondary-400': string;
  '--color-secondary-500': string;
  '--color-secondary-600': string;
  '--color-secondary-700': string;
  '--color-secondary-800': string;
  '--color-secondary-900': string;
  '--color-success': string;
  '--color-danger': string;
  '--color-info': string;
}

export type ThemeType = BaseThemeType & {
  [K in `${ColorType}-${ShadeType}`]?: string;
};

export const lightTheme = css`
  :root {
    --color-primary: #2113A1;
    --color-primary-100: #D6C4F7;
    --color-primary-500: #703BCB;

    --color-secondary: #7F0068;
    --color-secondary-100: #FABACC;
    --color-secondary-500: #ED0057;

    --color-success: #43B055;
    --color-danger: #FF0012;
    --color-info: #FFBB00;
  }
`;

export const darkTheme = css`
  :root {
    --color-primary: #7F0068;
    --color-primary-100: #FABACC;
    --color-primary-500: #ED0057;

    --color-secondary: #2113A1;
    --color-secondary-100: #D6C4F7;
    --color-secondary-500: #703BCB;

    --color-success: #43B055;
    --color-danger: #FF0012;
    --color-info: #FFBB00;
  }
`;