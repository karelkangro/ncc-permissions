import { ViteLogo } from "assets/icons";
import { Button } from "components";
import { useTheme } from 'context';
import { LandingPage } from "./Landing.styled";

export const Landing = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <LandingPage>
      <h1>Welcolme!</h1>
      <ViteLogo />
      <Button primary onClick={toggleTheme}>
        {theme === 'light' ? 'Dark' : 'Light'}
      </Button>
    </LandingPage>
  )
};
