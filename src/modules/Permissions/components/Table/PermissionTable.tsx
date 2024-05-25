import styled from 'styled-components';
import { HeaderRow } from './HeaderRow';
import { ActionGroups } from './ActionGroups';
import { ActionGroup, Role } from 'modules/Permissions/types/table.data';

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
  data: {
    actionGroups: ActionGroup[];
    roles: Role[];
  };
  onRemoveRole: (index: number) => void;
  onEditRole: () => void;
  innerRef: React.RefObject<HTMLDivElement>;
}

export const PermissionsTable = ({
  data,
  onEditRole,
  onRemoveRole,
  innerRef
}: ITable) => (
  <TableScrollContainer>
    <ScrollableTable ref={innerRef} cols={data.roles.length}>
      <HeaderRow
        columns={data.roles.length}
        roles={data.roles}
        onEditRole={onEditRole}
        onRemoveRole={onRemoveRole}
      />
      {data?.actionGroups?.map((group, index) => (
        <ActionGroups
          key={index}
          groupName={group.name}
          actions={group.actions}
          columns={data.roles.length}
        />
      ))}
    </ScrollableTable>
  </TableScrollContainer>
);