import styled from "styled-components";
import { TableCell } from "./TableCell";
import { LockIcon } from "assets/icons";
import { EditRoleDialog } from "./EditRoleDialog";

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

const HeaderRowCell = styled(TableCell) <{ $isFirstItem?: boolean }>`
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

const AdminRoleIconWrapper = styled(LockIcon)`
  pointer-events: none;
  margin-left: var(--space-15);
`;

export const HeaderRow = ({ columns, onEditRole }: { columns: number; onEditRole: () => void }) => (
  <>
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
          }
        </HeaderRowCellContent>
      </HeaderRowCell>
    ))}
  </>
);