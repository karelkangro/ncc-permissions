import styled from 'styled-components';

export const DialogContainer = styled.div`
  position: absolute;
  top: var(--space-2);
  right: 0;
  width: 10rem;
  padding: var(--space-05) 0;
  background-color: var(--color-tooltip-bg);
  border-radius: var(--radius-2xs);
  z-index: var(--zindex-dialog);
`;