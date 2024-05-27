import { useEffect, useState } from 'react';
import { usePermissionStore } from './usePermissionStore';

export const useRoleForm = () => {
  const {
    createNewRole,
    updateRoleName,
    roleIdInEdit,
    setIsEditRoleMode,
    roleNameInEdit,
    roleIdToInheritPermissions,
    setRoleIdToInheritPermissions
  } = usePermissionStore();

  const [roleName, setRoleName] = useState('');

  useEffect(() => {
    if (roleIdInEdit && roleNameInEdit) {
      setRoleName(roleNameInEdit);
    }
  }, [roleNameInEdit, roleIdInEdit]);

  const onSetName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setRoleName(e.target.value);
  };

  const onSaveFormData = () => {
    if (roleIdInEdit) {
      updateRoleName(roleIdInEdit, roleName);
    } else {
      const roleId = roleIdToInheritPermissions !== null
        ? roleIdToInheritPermissions
        : undefined;
      createNewRole(roleName, roleId);
      setRoleIdToInheritPermissions(1)
    }
    setIsEditRoleMode(false);
    setRoleName('');
  };

  return {
    roleName,
    onSetName,
    onSaveFormData,
  };
};