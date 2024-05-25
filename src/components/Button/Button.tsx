import styled from 'styled-components';

export const Button = styled.button<{ $primary?: boolean;}>`
  display: flex;
  gap: var(--space-1);
  justify-content: center;
  align-items: center;
  padding: var(--space-15) var(--space-25);
  color: ${({$primary}) => $primary
    ? 'var(--color-text)'
    : 'var(--color-primary)'};
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-xs);
  border: none;
  border-radius: var(--radius-2xs);
  background: ${({ $primary }) => $primary
    ? 'var(--color-primary)'
    : 'var(--color-primary-100)'
  };
  cursor: pointer;
`;

export const ButtonTransparent = styled(Button)`
  background: transparent;
  color: var(--color-text);
`

export const ButtonDanger = styled(ButtonTransparent)`
  color: var(--color-danger);
`