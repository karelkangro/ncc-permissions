import { useState, forwardRef } from 'react';
import { Container, Label, Input, Switch } from './SwitchButton.styled';

interface ISwitchButton {
  disabled?: boolean;
  checked: boolean;
  onChange: (checked?: boolean) => void;
}

export const SwitchButton = forwardRef<HTMLInputElement, ISwitchButton>(
  ({ disabled, checked, onChange }, ref) => {
    const [isOn, setIsOn] = useState(checked);

    const handleSwitch = () => {
      if (!disabled) {
        const newIsOn = !isOn;
        setIsOn(newIsOn);
        onChange(newIsOn);
      }
    };

    return (
      <Container>
        <Label $disabled={disabled} $isOn={isOn}>
          <Input
            ref={ref}
            type="checkbox"
            checked={isOn}
            onChange={handleSwitch}
            aria-checked={isOn}
          />
          <Switch $disabled={disabled} $isOn={isOn} />
        </Label>
      </Container>
    );
  }
);