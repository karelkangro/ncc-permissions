// Dropdown.js
import { ChevronDownIcon } from 'assets/icons';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const DropdownSelect = styled.select`
  width: 100%;
  padding: var(--space-075);
  font-size: var(--font-size-xxs);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-xxs);
  color: var(--color-text);
  appearance: none;
  background-color: rgba(198, 206, 214, 0.05);
  border: none;
  border-radius: var(--radius-3xs);
  -webkit-appearance: none;
  -moz-appearance: none;
`;

const DropdownLabel = styled.label`
  display: block;
  font-size: var(--font-size-xxs);
  line-height: var(--line-height-xxs);
  color: var(--color-secondary);
  margin-bottom: var(--space-1);
`;

const ArrowIcon = styled(ChevronDownIcon)`
  position: absolute;
  bottom: .5rem;
  right: var(--space-2);
  transform: translateY(-50%);
  pointer-events: none;
  font-size: var(--font-size-md);
  color: var(--color-secondary);
`;

interface IDropdownMenu {
  label?: string;
  options: {
    id: string;
    name: string;
  }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export const DropdownMenu = ({ label, options, value, onChange } : IDropdownMenu) => (
  <DropdownContainer>
    {label && <DropdownLabel>{label}</DropdownLabel>}
    <DropdownSelect value={value} onChange={onChange}>
      {options?.map((option, index) => (
        <option key={index} value={option.id}>
          {option.name}
        </option>
      ))}
    </DropdownSelect>
    <ArrowIcon />
  </DropdownContainer>
);