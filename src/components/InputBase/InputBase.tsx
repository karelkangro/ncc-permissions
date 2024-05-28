// InputBase.js
import styled from 'styled-components';

const InputContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-bottom: var(--space-1);
`;

const InputField = styled.input`
  width: 100%;
  padding: var(--space-075);
  font-size: var(--font-size-xxs);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-xxs);
  color: var(--color-text);
  background-color: rgba(198, 206, 214, 0.05);
  border: none;
  border-radius: var(--radius-3xs);
  -webkit-appearance: none;
  -moz-appearance: none;

  &::placeholder {
    color: var(--color-secondary);
  }
`;

const InputLabel = styled.label`
  display: block;
  font-size: var(--font-size-xxs);
  line-height: var(--line-height-xxs);
  color: var(--color-secondary);
  margin-bottom: var(--space-075);
`;

interface IInputBaseProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const InputBase = ({ label, placeholder, value, onChange }: IInputBaseProps) => (
  <InputContainer>
    {label && <InputLabel>{label}</InputLabel>}
    <InputField placeholder={placeholder} value={value} onChange={onChange} />
  </InputContainer>
);