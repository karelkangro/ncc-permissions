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
  '--color-text': string;
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

    --color-secondary: #677B92;
    --color-secondary-100: #FABACC;
    --color-secondary-500: #ED0057;

    --color-success: #43B055;
    --color-danger: #FF0012;
    --color-info: #FFBB00;

    --color-text: #ECEFF1;
  }
`;

export const darkTheme = css`
  :root {
    --color-primary: #5D55F0;
    --color-primary-100: rgba(93, 85, 240, 0.1);
    --color-primary-300: rgba(93, 85, 240, 0.3);

    --color-secondary: #677B92;
    --color-secondary-100: #D6C4F7;
    --color-secondary-500: #703BCB;

    --color-success: #43B055;
    --color-danger: #D51E68;
    --color-info: #FFBB00;

    --color-text: #ECEFF1;
    --color-text-dark: #677B92;
    --color-text-darker: #273647;

    --color-bg-dark: #10171F;
    --color-border: rgba(217, 217, 217, 0.05);

    --color-bg-dark: #131B24;
    --color-tooltip-bg: #1A2430;
    --color-tooltip-border: #273647;

    --color-switch-bg-blue: rgba(93, 85, 240, 0.30);
    --color-switch-bg-blue-disabled: rgba(103, 116, 244, 0.20);
    --color-switch-bg-gray: rgba(198, 206, 214, 0.10);
  }
`;