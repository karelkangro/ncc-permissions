import { createGlobalStyle } from 'styled-components';
import { BaseStyles } from './baseStyles';
import { darkTheme, lightTheme } from './color';

const ThemeStyles = createGlobalStyle`
  ${({ theme }) => (theme === 'light' ? lightTheme : darkTheme)}
`;

export const GlobalStylesComponent = ({ theme }: { theme: string }) => (
  <>
    <BaseStyles />
    <ThemeStyles theme={theme} />
  </>
);