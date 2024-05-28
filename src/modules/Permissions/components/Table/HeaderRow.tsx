import styled from "styled-components";
import { TableCell } from "./TableCell";
import { LockIcon } from "assets/icons";
import { EditRoleDialog } from "./EditRoleDialog";
import { IRole } from "modules/Permissions/types/table.data";

const HeaderRowCell = styled(TableCell) <{ $isFirstItem?: boolean }>`
  font-size: var(--font-size-xxs);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-xs);
  color: var(--color-secondary);
  padding: var(--space-1);
  padding-left: ${({ $isFirstItem }) =>
    $isFirstItem
      ? 'var(--space-075)'
      : 'none'
  };
  background: var(--color-bg-dark);
  border: 1px solid var(--color-border);

  &:not(:last-child) {
    border-right: none;
  }
`;

const HeaderRowCellContent = styled.div<{ $isFirstItem?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${({ $isFirstItem }) =>
    $isFirstItem
      ? 'auto'
      : 'none'
  };
`;

const AdminRoleIconWrapper = styled(LockIcon)`
  pointer-events: none;
  margin-left: var(--space-075);
`;

interface IHeaderRow {
  columns: number;
  roles: IRole[];
}
export const HeaderRow = ({
  columns,
  roles
}: IHeaderRow) => (
  <>
    {Array.from({ length: columns }).map((_, i) => (
      <HeaderRowCell
        key={`header-${i}`}
        $isFirstItem={i === 0}
      >
        <HeaderRowCellContent $isFirstItem={i === 0}>
          {i === 0 ? "Action" : `${roles[i-1].name}`}
          {i === 1
            ? <AdminRoleIconWrapper />
            : i !== 0 && (
              <EditRoleDialog
                id={roles[i - 1]?.id}
                name={roles[i - 1]?.name}
              />
            )
          }
        </HeaderRowCellContent>
      </HeaderRowCell>
    ))}
  </>
);