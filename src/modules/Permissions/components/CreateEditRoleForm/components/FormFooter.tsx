import { Button, ButtonDark } from "components/Button";
import { Footer } from "../CreateEditRoleForm.styled";

interface IFormFooterProps {
  onCancel: () => void;
  isEditMode?: boolean;
}
export const FormFooter = ({ onCancel, isEditMode }: IFormFooterProps) => (
  <Footer>
    <ButtonDark onClick={onCancel}>Cancel</ButtonDark>
    <Button type="submit" $primary>{
      isEditMode ? 'Save' : 'Create'}
    </Button>
  </Footer>
);