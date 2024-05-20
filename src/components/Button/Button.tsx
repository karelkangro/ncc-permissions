import styled from 'styled-components';

export const Button = styled.button<{ primary?: boolean; }>`
  display: flex;
  gap: var(--space-1);
  justify-content: center;
  align-items: center;
  padding: var(--space-05) var(--space-2);
  color: ${props => props.primary ? 'var(--color-secondary)' : 'var(--color-primary)'};
  border-radius: var(--radius-xs);
  border: var(--border);
  background: ${props => props.primary ? 'var(--color-primary)' : 'none'};
`;