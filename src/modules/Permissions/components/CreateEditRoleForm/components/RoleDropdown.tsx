import { DropdownMenu } from "components/DropdownMenu";
import { usePermissionStore } from "modules/Permissions/hooks";

interface IRoleDropdownProps {
  isEditMode?: boolean;
  defaultRole: string;
}
export const RoleDropdown = (
  { isEditMode,
  }: IRoleDropdownProps) => {

  const {
    roles,
    roleIdToInheritPermissions,
    setRoleIdToInheritPermissions
  } = usePermissionStore();

  if (isEditMode) return null;

  const onRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRoleIdToInheritPermissions(+e.target.value);
  }

  return (
    <DropdownMenu
      label="Existing roles to inherit permissions from"
      options={roles?.map(role => ({
        id: `${role.id}`,
        name: role.name,
      }))}
      value={`${roleIdToInheritPermissions}`}
      onChange={onRoleChange}
    />
  )
}