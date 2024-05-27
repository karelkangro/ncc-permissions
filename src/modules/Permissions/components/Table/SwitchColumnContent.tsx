import styled from "styled-components";
import { SwitchButton } from "components/SwitchButton";

const SwitchColumnContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 4rem;
  border-right: 1px solid var(--color-border);
`

interface ISwitchColumnContentProps {
  checked: boolean;
  isSwitchDisabled: boolean;
  onChange: (checked: boolean) => void;
}

export const SwitchColumnContent = (
  { isSwitchDisabled,
    checked,
    onChange
  }: ISwitchColumnContentProps) => (
  <SwitchColumnContentWrapper>
    <SwitchButton
      checked={checked}
      disabled={isSwitchDisabled}
      onChange={onChange}
    />
  </SwitchColumnContentWrapper>
);