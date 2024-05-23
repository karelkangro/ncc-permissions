import styled from "styled-components";
import { PermissionsPage } from "./Permissions.styled";
import { useEffect, useRef, useState } from "react";
import { PermissionsTable } from './components'
import { Button } from "components/Button";

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: var(--space-3);

  > h1 {
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-normal);
    color: var(--color-text);
    line-height: 1rem;
  }
`
const DEFAULT_COLUMNS = 5;

export const Permissions = () => {
  const [columns, setColumns] = useState(DEFAULT_COLUMNS);
  const tableRef = useRef<HTMLDivElement>(null);

  const addColumn = () => setColumns(prev => prev + 1);
  const deleteColumn = () =>
    setColumns(prev => (prev > DEFAULT_COLUMNS ? prev - 1 : prev))

  useEffect(() => {
    if (tableRef.current) {
      if (tableRef.current) {
        tableRef.current?.scrollTo({
          left: tableRef.current.scrollWidth,
          behavior: 'smooth',
        });
      }
    }
  }, [columns]);

  return (
    <PermissionsPage>
      <Header>
        <h1>Permissions</h1>
        <button onClick={deleteColumn}>- Delete role</button>
        <Button $primary onClick={addColumn}>+ New role</Button>
      </Header>
      <PermissionsTable
        innerRef={tableRef}
        columns={columns}
        onRemoveRole={deleteColumn}
        onEditRole={addColumn}
      />
    </PermissionsPage>
  );
};

