import styled from 'styled-components';
import { DotsVerticalIcon, LockIcon } from 'assets/icons'; // Adjust the import according to your file structure

const TableContainer = styled.div`
  width: 100%;
  max-width: 100%;
`;

// Wrapper component for the entire table
const PermissionsTableWrapper = styled.div<{ cols: number }>`
  display: grid;
  grid-template-columns: minmax(50vw, 1fr) repeat(${props => props.cols - 1}, minmax(var(--space-13), var(--space-13)));
  overflow-x: auto;
  max-width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
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
  grid-column: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// Styled component for toggle switches
const Toggle = styled.input.attrs({ type: 'checkbox' })`
  cursor: pointer;
`;

// Remove icon styled component
const DotsIcon = styled(DotsVerticalIcon)`
  cursor: pointer;
  margin-left: var(--space-15);
`;

const AdminRoleIconWrapper = styled(LockIcon)`
  pointer-events: none;
  margin-left: var(--space-15);
`;

const HeaderRowCell = styled(Cell)<{$isFirstItem?: boolean}>`
  font-size: var(--font-size-xxs);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-xs);
  color: var(--color-secondary);
  padding: var(--space-2);
  background: var(--color-bg-dark);
  border: 1px solid var(--color-border);

  & > span {
    margin-right: ${({$isFirstItem}) => $isFirstItem ? 'auto' : 'none'}
  }
`;

const HeaderRowCellContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Styled component for the section row
const SectionRow = styled.div<{ cols: number }>`
  display: grid;
  grid-column: 1 / -1;
  padding: var(--space-2);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-xxs);
  color: var(--color-secondary);
  border-left: solid 1px var(--color-border);
  border-right: solid 1px var(--color-border);
`;

const ActionTitle = styled(Cell) <{ $isFirstItem?: boolean }>`
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-xs);
  color: var(--color-text);
  padding-left: var(--space-2);
  border-left: solid 1px var(--color-border);

  & > span {
    margin-right: auto
  }
`;

const Action = styled.div`
  &:last-child {
    border-left: solid 1px var(--color-border);
    border-bottom: solid 1px var(--color-border);
  }
`

const ActionDescription = styled(Cell) <{ $isFirstItem?: boolean }>`
  font-size: var(--font-size-xxs);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-xs);
  padding-left: var(--space-2);
  color: var(--color-secondary);
  border-left: solid 1px var(--color-border);


  & > span {
    margin-right: auto
  }
`;

interface Props {
  columns: number;
  onRemoveRole: (index: number) => void;
  onEditRole: () => void;
  innerRef: React.RefObject<HTMLDivElement>;
}

export const PermissionsTable = ({ columns, onRemoveRole, innerRef }: Props) => (
    <TableContainer>
      <PermissionsTableWrapper ref={innerRef} cols={columns}>
        {Array.from({ length: columns }).map((_, i) => (
          <HeaderRowCell
            key={`header-${i}`}
            $isFirstItem={i === 0}
          >
            <HeaderRowCellContent>
              {i === 0 ? "Action" : `Role ${i}`}
              {i === 1
                ? <AdminRoleIconWrapper />
                : i !== 0 && <DotsIcon onClick={() => onRemoveRole(i)} />
                // TODO refactor to use table data as input
              }
            </HeaderRowCellContent>
          </HeaderRowCell>
        ))}
        <SectionRow cols={columns}>
          General
        </SectionRow>
        {Array.from({ length: columns }).map((_, i) => (i === 0
          ? (
            <FirstColumnCell key={`col-${i}`}>
              <Action>
                <ActionTitle>
                  <span>Action Title</span>
                </ActionTitle>
                <ActionDescription>
                  <span>Action Description</span>
                </ActionDescription>
              </Action>
            </FirstColumnCell>
          )
          : (
            <Cell key={`col-${i}`}>
              <Toggle />
            </Cell>
          )
        ))}
      </PermissionsTableWrapper>
    </TableContainer>
  )