import { Button, ButtonDark } from "components/Button"
import { DropdownMenu, InputBase } from "components"
import styled from "styled-components";

interface IForm {
  options: string[];
  initialSelectedRole: string;
  isEditing?: boolean;
  onRoleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCancel: () => void;
  onSave: () => void;
  onClose: () => void;
  roleName: string;
}

// TODO use form element
const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

`
const Footer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2);
  margin-top: auto;
  border: solid 1px tomato;
`
const Title = styled.h2`
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-xs);
  color: var(--color-text);
  margin-bottom: var(--space-4);
`
const CloseButton = styled.button`
  position: absolute;
  top: var(--space-1);
  right: var(--space-1);
  background: none;
  border: none;
  font-size: var(--font-size-lg);
  cursor: pointer;
  color: var(--color-text);
`;

export const CreateEditRoleForm = (
  {
    options,
    initialSelectedRole,
    onCancel,
    onSave,
    isEditing,
    roleName,
    onRoleChange,
    onNameChange,
    onClose
  }: IForm) => (
  <Content>
    <div>
      <Title>{isEditing ? 'Edit role' : 'Create new role'}</Title>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      <InputBase
        label="Role name"
        placeholder="Name"
        value={roleName}
        onChange={onNameChange}
      />
      <DropdownMenu
        label="Exisiting roles to inherit permissions from"
        options={options}
        value={initialSelectedRole}
        onChange={onRoleChange}
      />
    </div>
    <Footer>
      <ButtonDark onClick={onCancel}>Cancel</ButtonDark>
      <Button $primary onClick={onSave}>Create</Button>
    </Footer>
  </Content>
)