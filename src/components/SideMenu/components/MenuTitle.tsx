import { ChevronLeftIcon } from "assets/icons"
import styled from "styled-components"

const StyledTitle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: var(--space-1); /* Add gap here for consistency */

  & > div {
    background-color: var(--color-tooltip-bg);
    border-radius: var(--radius-4xs);
    width: var(--space-3);
    height: var(--space-3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > h2 {
    font-size: var(--font-size-xxs);
    font-weight: var(--font-weight-normal);
    color: var(--color-text);
  }
`
export const MenuTitle = () => (
  <StyledTitle>
    <div><ChevronLeftIcon /></div>
    <h2>Settings</h2>
  </StyledTitle>
)