import styled from 'styled-components';
import { HeaderRow } from './HeaderRow';
import { usePermissionStore } from 'modules/Permissions/hooks';
import { ActionsGroup } from './ActionsGroup';

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
  innerRef: React.RefObject<HTMLDivElement>;
}

export const PermissionsTable = ({
  innerRef,
}: ITable) => {

  const roles = usePermissionStore((state) => state.roles);
  const actionGroups = usePermissionStore((state) => state.actionGroups);
  const columns = roles.length + 1;

  return (
    <TableScrollContainer>
      <ScrollableTable ref={innerRef} cols={columns}>
        <HeaderRow
          columns={columns}
          roles={roles}
        />
        {actionGroups?.map((group, index) => (
          <ActionsGroup
            key={index}
            title={group.name}
            actions={group.actions}
            roles={roles}
            columns={columns}
          />
        ))}
      </ScrollableTable>
    </TableScrollContainer>
  )
}