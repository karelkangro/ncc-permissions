import styled from 'styled-components';
import { DotsVerticalIcon, GarbageIcon, PencilIcon } from 'assets/icons'; // Adjust the import according to your file structure
import { Dialog, ButtonTransparent, ButtonDanger } from 'components';
import { useState, useCallback } from 'react';
import { IRole } from 'modules/Permissions/types/table.data';
import { usePermissionStore } from 'modules/Permissions/hooks';

const DotsIconStyled = styled(DotsVerticalIcon)`
  position: relative;
  cursor: pointer;
  margin-left: var(--space-075);
  flex-shrink: 0;
`;

interface IEditRoleProps {
  id: IRole['id'];
  name: IRole['name'];
}

export const EditRoleDialog = ({ id }: IEditRoleProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {
    setIsEditRoleMode,
    setRoleIdForEdit,
    deleteRole,
    setIsFormOpen
  } = usePermissionStore();

  const toggleDialog = useCallback(() => {
    setIsDialogOpen((prev) => !prev);
  }, []);

  const handleEditClick = useCallback(() => {
    setIsEditRoleMode(true);
    setRoleIdForEdit(id);
    setIsFormOpen(true);
  }, [id, setIsEditRoleMode, setRoleIdForEdit, setIsFormOpen]);

  const handleDeleteClick = useCallback(() => {
    deleteRole(id);
  }, [id, deleteRole]);

  return (
    <div style={{ position: 'relative' }}>
      <DotsIconStyled onClick={toggleDialog} />
      <Dialog isOpen={isDialogOpen} toggleDialog={toggleDialog}>
        <ButtonTransparent
          style={{ marginBottom: '.375rem' }}
          onClick={handleEditClick}
        >
          <PencilIcon /> Edit details
        </ButtonTransparent>
        <hr style={{ border: 'solid 1px var(--color-border)' }} />
        <ButtonDanger
          style={{ marginTop: '.375rem' }}
          onClick={handleDeleteClick}
        >
          <GarbageIcon /> Remove
        </ButtonDanger>
      </Dialog>
    </div>
  );
};