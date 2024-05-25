import { useState } from 'react';
import { Container, Label, Input, Switch } from './SwitchButton.styled';

export const SwitchButton = ({ disabled }: {disabled?: boolean}) => {
  const [isOn, setIsOn] = useState(false);

  const handleSwitch = () => {
    if(!disabled) setIsOn(!isOn);
  };

  return (
    <Container>
      <Label $disabled={disabled} $isOn={isOn}>
        <Input
          type="checkbox"
          checked={isOn}
          onChange={handleSwitch}
          aria-checked={isOn}
        />
        <Switch $disabled={disabled} $isOn={isOn} />
      </Label>
    </Container>
  );
};