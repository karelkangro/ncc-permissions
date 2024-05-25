import styled from 'styled-components';
import { DotsVerticalIcon, GarbageIcon, PencilIcon } from 'assets/icons'; // Adjust the import according to your file structure
import { Dialog, ButtonTransparent, ButtonDanger } from 'components';
import { useState } from 'react';

const DotsIconStyled = styled(DotsVerticalIcon)`
  position: relative;
  cursor: pointer;
  margin-left: var(--space-15);
`;

interface IEditRoleProps {
  index: number;
  onRemoveRole: (index: number) => void;
  onEditRole: (index: number) => void;
}

export const EditRoleDialog = ({ onEditRole, onRemoveRole, index }: IEditRoleProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen((prev) => !prev);
  };

  return (
    <div style={{ position: 'relative' }}>
      <DotsIconStyled onClick={toggleDialog} />
      <Dialog isOpen={isDialogOpen} toggleDialog={toggleDialog}>
        <ButtonTransparent
          style={{ marginBottom: '.375rem' }}
          onClick={()=> onEditRole(index)}
        >
          <PencilIcon /> Edit details
        </ButtonTransparent>
        <hr style={{ border: 'solid 1px var(--color-border)' }} />
        <ButtonDanger
          style={{ marginTop: '.375rem' }}
          onClick={() => onRemoveRole(index)}
        >
          <GarbageIcon /> Remove
        </ButtonDanger>
      </Dialog>
    </div>
  );
};