import styled from 'styled-components';
import { DotsVerticalIcon, GarbageIcon, LockIcon, PencilIcon } from 'assets/icons'; // Adjust the import according to your file structure
import { SwitchButton, Dialog, Button, ButtonTransparent, ButtonDanger } from 'components';
import { useState } from 'react';

const TableContainer = styled.div`
  width: 100%;
  max-width: 100%;
`;

const PermissionsTableWrapper = styled.div<{ cols: number }>`
  display: grid;
  grid-template-columns: minmax(50vw, 1fr) repeat(${props => props.cols - 1}, minmax(var(--space-13), var(--space-13)));
  overflow-x: auto;
  max-width: 100%;
  border-top-left-radius: var(--radius-xs);
  border-top-right-radius: var(--radius-xs);
  border: 1px solid var(--color-border-light);
`;

const Cell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: none;
  border: solid 1px var(--color-border-light);
`;

const FirstColumnCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;


const DotsIconStyled = styled(DotsVerticalIcon)`
  position: relative;
  cursor: pointer;
  margin-left: var(--space-15);
`;

const AdminRoleIconWrapper = styled(LockIcon)`
  pointer-events: none;
  margin-left: var(--space-15);
`;

const HeaderRowCell = styled(Cell) <{ $isFirstItem?: boolean }>`
  font-size: var(--font-size-xxs);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-xs);
  color: var(--color-secondary);
  padding: var(--space-1);
  padding-left: ${({ $isFirstItem }) =>
    $isFirstItem
    ? 'var(--space-15)'
    : 'none'
  };
  background: var(--color-bg-dark);
  border: 1px solid var(--color-border);
`;

const HeaderRowCellContent = styled.div<{$isFirstItem?: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${({ $isFirstItem }) =>
    $isFirstItem
      ? 'auto'
    : 'none'
  };
`;

const SectionRow = styled.div<{ cols: number }>`
  display: grid;
  grid-column: 1 / -1;
  padding: var(--space-2);
  padding-top: var(--space-25);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-xxs);
  color: var(--color-secondary);
  border-left: solid 1px var(--color-border);
  border-right: solid 1px var(--color-border);
`;

const ActionRow = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  border-bottom: solid 1px var(--color-border);

`
const Action = styled.div`
  border-left: solid 1px var(--color-border);
  padding-bottom: var(--space-1);

  &:last-child {
    padding-bottom: var(--space-1);
  }
`
const ActionTitle = styled(Cell) <{ $isFirstItem?: boolean }>`
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-xs);
  color: var(--color-text);
  padding-left: var(--space-2);

  & > span {
    margin-right: auto
  }
`;

const ActionDescription = styled(Cell) <{ $isFirstItem?: boolean }>`
  font-size: var(--font-size-xxs);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-xs);
  padding-left: var(--space-2);
  color: var(--color-secondary);

  & > span {
    margin-right: auto
  }
`;

const ToggleCell = styled(Cell)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  &:first-child {
    border-left: solid 1px var(--color-border);
  }
  &:last-child {
    border-right: solid 1px var(--color-border);
  }
`;

interface ITable {
  columns: number;
  onRemoveRole: (index: number) => void;
  onEditRole: () => void;
  innerRef: React.RefObject<HTMLDivElement>;
}

const EditRoleDialog = ({ onEditRole, index }: { onEditRole: (index: number) => void, index: number }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen((prev) => !prev);
  };

  return (
    <div style={{ position: 'relative' }}>
      <DotsIconStyled onClick={toggleDialog} />
      <Dialog isOpen={isDialogOpen} toggleDialog={toggleDialog}>
        <ButtonTransparent style={{marginBottom: '.375rem'}}>
          <PencilIcon /> Edit details
        </ButtonTransparent>
        <hr style={{border: 'solid 1px var(--color-border)'}} />
        <ButtonDanger
          style={{ marginTop: '.375rem' }}
          onClick={() => onEditRole(index)}
        >
          <GarbageIcon /> Remove
          </ButtonDanger>
      </Dialog>
    </div>
  );
};

export const PermissionsTable = ({ columns, onEditRole, innerRef }: ITable) => (
    <TableContainer>
      <PermissionsTableWrapper ref={innerRef} cols={columns}>
        {Array.from({ length: columns }).map((_, i) => (
          <HeaderRowCell
            key={`header-${i}`}
            $isFirstItem={i === 0}
          >
            <HeaderRowCellContent $isFirstItem={i === 0}>
              {i === 0 ? "Action" : `Role ${i}`}
              {i === 1
                ? <AdminRoleIconWrapper />
                : i !== 0 && <EditRoleDialog index={i} onEditRole={() => console.log('role', i)} />
                // TODO refactor to use table data as input
              }
            </HeaderRowCellContent>
          </HeaderRowCell>
        ))}
        <SectionRow cols={columns}>
          General
        </SectionRow>
      {Array.from({ length: columns }).map((_, i) => (
        <ActionRow key={`col-${i}`}>
          {i === 0 && (
            <FirstColumnCell id="firstcol">
              <Action>
                <ActionTitle>
                  <span>Action Title</span>
                </ActionTitle>
                <ActionDescription>
                  <span>Action Description</span>
                </ActionDescription>
              </Action>
            </FirstColumnCell>
          )}
          {i !== 0 && (
            <ToggleCell key={`col-${i}`}>
              <SwitchButton disabled={i === 1} />
            </ToggleCell>
          )}
        </ActionRow>
      ))}
      </PermissionsTableWrapper>
    </TableContainer>
  )