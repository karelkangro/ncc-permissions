import { Title, CloseButton } from "../CreateEditRoleForm.styled";

interface IHeaderProps {
  isEditMode?: boolean
  onClose: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
}
export const FormHeader = ({ isEditMode, onClose }: IHeaderProps) => (
  <div>
    <Title>{isEditMode ? 'Edit role' : 'Create new role'}</Title>
    <CloseButton onClick={onClose}>&times;</CloseButton>
  </div>
);