import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label<{ $isOn: boolean, $disabled?: boolean }>`
  width: 1.6875rem;
  height: var(--space-2);
  border-radius: var(--radius-2xs);
  background-color: ${({ $isOn, $disabled }) => (
    $isOn
      ? $disabled
        ? 'var(--color-switch-bg-blue-disabled)'
        : 'var(--color-primary-300)'
      : 'var(--color-switch-bg-gray)'
  )};
  position: relative;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s;
`;

export const Input = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  z-index: -1;
`;

export const Switch = styled.div<{ $isOn: boolean, $disabled?: boolean }>`
  width: var(--space-15);
  height: var(--space-15);
  position: absolute;
  top: var(--space-01);
  left: ${({ $isOn }) => (
    $isOn
      ? 'calc(100% - 0.85rem)'
      : 'var(--space-01)'
  )};
  background-color: ${({ $isOn, $disabled }) => (
    $isOn
      ? $disabled
        ? 'rgba(103, 116, 244, 0.40);'
        : '#6774F4'
      : 'var(--color-text)'
    )};
  border-radius: 50%;
  transition: left 0.3s, background-color 0.3s;
`;