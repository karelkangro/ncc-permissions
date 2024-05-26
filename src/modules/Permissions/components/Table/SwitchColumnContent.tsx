import { FC } from "react";
import styled from "styled-components";
import { SwitchButton } from "components/SwitchButton";

const SwitchColumnContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 4rem;
  border-right: 1px solid var(--color-border);
`

export const SwitchColumnContent: FC<{ isSwitchDisabled: boolean }> = ({ isSwitchDisabled }) => (
  <SwitchColumnContentWrapper>
    <SwitchButton disabled={isSwitchDisabled} />
  </SwitchColumnContentWrapper>
);