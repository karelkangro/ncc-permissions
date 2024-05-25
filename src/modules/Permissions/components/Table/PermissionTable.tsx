import styled from 'styled-components';
import { HeaderRow } from './HeaderRow';
import { ActionRows } from './ActionRows';

const TableScrollContainer = styled.div`
  width: 100%;
  max-width: 100%;
`;

const ScrollableTable = styled.div<{ cols: number }>`
  display: grid;
  grid-template-columns: minmax(50vw, 1fr) repeat(${props => props.cols - 1}, minmax(var(--space-13), var(--space-13)));
  overflow-x: auto;
  max-width: 100%;
  border-top-left-radius: var(--radius-xs);
  border-top-right-radius: var(--radius-xs);
  border: 1px solid var(--color-border-light);
`;
interface ITable {
  columns: number;
  onRemoveRole: (index: number) => void;
  onEditRole: () => void;
  innerRef: React.RefObject<HTMLDivElement>;
}

export const PermissionsTable = ({ columns, onEditRole, innerRef }: ITable) => (
    <TableScrollContainer>
      <ScrollableTable ref={innerRef} cols={columns}>
      <HeaderRow columns={columns} onEditRole={() => console.log('role')} />
      <ActionRows columns={columns} />
      </ScrollableTable>
    </TableScrollContainer>
  )