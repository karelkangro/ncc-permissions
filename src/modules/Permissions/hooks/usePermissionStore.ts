import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IRole, IActionGroup } from 'modules/Permissions/types/table.data';
import { ACTION_GROUPS, DEFAULT_ROLES } from 'modules/Permissions/data';

interface IRolesAndPermissionsState {
  actionGroups: IActionGroup[];
  roles: IRole[];
  isFormOpen: boolean,
  isEditRoleMode: boolean,
  roleIdInEdit: number | null,
  roleNameInEdit: string,
  roleIdToInheritPermissions: number | null,
  createNewRole: (roleName: string, inheritFromRoleId?: number) => void;
  toggleAction: (roleId: number, actionId: number) => void;
  updateRoleName: (idToUpdate: number, roleName: string) => void;
  deleteRole: (roleId: number) => void;
  setIsFormOpen: (isOpen: boolean) => void;
  setIsEditRoleMode: (isEditMode: boolean) => void;
  setRoleIdForEdit: (roleIdInEdit: number) => void;
  setRoleIdToInheritPermissions: (roleId: number) => void;
}

export const usePermissionStore = create<IRolesAndPermissionsState>()(
  persist(
    (set) => ({
      actionGroups: ACTION_GROUPS,
      roles: DEFAULT_ROLES,
      isFormOpen: false,
      setIsFormOpen: (isFormOpen) => set({ isFormOpen }),
      isEditRoleMode: false,
      roleNameInEdit: '',
      roleIdToInheritPermissions: 1,
      setRoleIdToInheritPermissions: (roleIdToInheritPermissions) => set({ roleIdToInheritPermissions }),
      setIsEditRoleMode: (isEditRoleMode) => {
        set({ isEditRoleMode })
        if(!isEditRoleMode) set({ roleIdInEdit: null });
      },
      roleIdInEdit: null,
      setRoleIdForEdit: (roleIdInEdit: number) => set((state) => {
        const role = state.roles.find((role) => role.id === roleIdInEdit);

        return {
          roleIdInEdit,
          roleNameInEdit: role ? role?.name : '',
        };
      }),
      toggleAction: (roleId, actionId) => {
        set((state) => {
          const updatedRoles = state.roles.map((role) =>
            role.id === roleId
              ? {
                ...role,
                actions: role.actions.includes(actionId)
                  ? role.actions.filter((id) => id !== actionId)
                  : [...role.actions, actionId],
              }
              : role
          );

          return { roles: updatedRoles };
        });
      },
      createNewRole: (roleName: string, inheritFromRoleId?: number) => {
        set((state) => {
          const newId = Math.max(...state.roles.map((role) => role.id)) + 1;
          const roleIdToInherit = inheritFromRoleId ?? state.roleIdToInheritPermissions;
          const inheritedActions = state.roleIdToInheritPermissions === 1
            ? state.roles[0].actions
            : state.roles.find((role) => role.id === roleIdToInherit)?.actions || [];
          const newRole: IRole = {
            id: newId,
            name: roleName,
            actions: inheritedActions,
          };

          return {
            roles: [...state.roles, newRole],
          };
        });
      },
      updateRoleName: (idToUpdate, roleName) => {
        set((state) => ({
          roles: state.roles.map((role) =>
            role.id === idToUpdate
              ? { ...role, name: roleName }
              : role
          ),
        }));
      },
      deleteRole: (roleId) =>
        set((state) => ({
          roles: state.roles.filter((role) => role.id !== roleId),
        })),
    }),
    {
      name: 'permission-storage',
    }
  )
);