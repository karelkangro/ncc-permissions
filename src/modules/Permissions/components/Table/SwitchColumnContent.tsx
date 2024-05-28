import styled from "styled-components";
import { SwitchButton } from "components/SwitchButton";
import { TooltipBase } from "components";

const SwitchColumnContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 4rem;
  border-right: 1px solid var(--color-border);
`

interface ISwitchColumnContentProps {
  checked: boolean;
  isSwitchDisabled: boolean;
  onSwitchChange: (checked?: boolean) => void;
}

export const SwitchColumnContent = (
  { isSwitchDisabled,
    checked,
    onSwitchChange
  }: ISwitchColumnContentProps) => (
  <SwitchColumnContentWrapper>
    {isSwitchDisabled
      ? (
          <TooltipBase
            trigger={
              <SwitchButton
                checked={checked}
                disabled={isSwitchDisabled}
                onChange={onSwitchChange}
              />
            }
            content="Admin permissions are not editable"
          />
        )
      : (
        <SwitchButton
          checked={checked}
          disabled={isSwitchDisabled}
          onChange={onSwitchChange}
        />
    )}
  </SwitchColumnContentWrapper>
  );