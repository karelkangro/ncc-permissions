import { InputBase } from "components/InputBase";

interface IRoleNameInputProps {
  roleName: string;
  onNameInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RoleNameInput = ({ roleName, onNameInputChange }: IRoleNameInputProps) => (
  <InputBase
    label="Role name"
    placeholder="Name"
    value={roleName}
    onChange={onNameInputChange}
  />
);
