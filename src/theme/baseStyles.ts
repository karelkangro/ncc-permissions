import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';

export const BaseStyles = createGlobalStyle`
  ${reset}
  :root {
    /** Typography **/
    --font-family-body: sans-serif;
    --font-family-heading: sans-serif;
    --font-family-quote: sans-serif;

    --font-size-xs: 1rem;
    --font-size-sm: 1.3125rem;
    --font-size-md: 1.625rem;
    --font-size-lg: 2.0625rem;
    --font-size-xl: 2.625rem;
    --font-size-2xl: 3.375rem;
    --font-size-3xl: 4.25rem;
    --font-size-4xl: 5.4375rem;

    --line-height-xs: 1.3rem;
    --line-height-sm: 1.7rem;
    --line-height-md: 2.1rem;
    --line-height-lg: 2.7rem;
    --line-height-xl: 3.4rem;
    --line-height-2xl: 4.4rem;
    --line-height-3xl: 5.5rem;
    --line-height-4xl: 7rem;
    --font-weight-thin: 100;
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-semiBold: 600;
    --font-weight-bold: 700;
    --font-weight-extraBold: 900;

    /** Gradient **/
    --gradient-primary: linear-gradient(171.22deg, var(--color-primary-500) -6.09%, var(--color-bg) 119.46%);

    /** Radius **/
    --radius-4xs: 0.25rem;
    --radius-3xs: 0.3125rem;
    --radius-2xs: 0.5rem;
    --radius-xs: 1rem;
    --radius-sm: 1.25rem;
    --radius-md: 2.5rem;

    /** Border **/
    --border-width: 1px;
    --border-color: grey;
    --border-radius: var(--radius-2xs);
    --border-color-input-error: var(--color-input-error);
    --border-color-input-warning: var(--color-input-warning);

    /** Opacity **/
    --opacity-light: 0.3;
    --opacity-medium: 0.6;
    --opacity-dark: 0.9;

    /** Spacing (8px Grid) **/
    --space-01: 0.125rem;
    --space-025: 0.25rem;
    --space-05: 0.375rem;
    --space-1: 0.5rem;
    --space-15: 0.75rem;
    --space-2: 1rem;
    --space-25: 1.25rem;
    --space-3: 1.5rem;
    --space-4: 2rem;
    --space-5: 2.5rem;
    --space-6: 3rem;
    --space-8: 4rem;
    --space-10: 5rem;
    --space-12: 6rem;

    /** Z-index **/
    --zindex-dropdown: 1000;
    --zindex-navbar: 1010;
    --zindex-modal: 1020;

    /** Animation **/
    --animation-duration-short: 0.3s;
    --animation-duration-medium: 0.5s;
    --animation-duration-long: 1s;
    --animation-easing-in: cubic-bezier(0.4, 0, 1, 1);
    --animation-easing-out: cubic-bezier(0, 0, 0.2, 1);
    --animation-easing-inout: cubic-bezier(0.4, 0, 0.2, 1);

    /** Shadows **/
    --box-shadow-light: 0px 0.2rem 0.4rem rgba(0, 0, 0, 0.1);
    --box-shadow-medium: 0px 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
    --box-shadow-dark: 0px 1rem 2rem rgba(0, 0, 0, 0.2);

    /** Base **/
    --font-family-base: var(--font-family-body);
    --font-size-base: var(--font-size-xs);
    --font-weight-base: var(--font-weight-regular);
    --line-height-base: var(--line-height-xs);
  }
`;