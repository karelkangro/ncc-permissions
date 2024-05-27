import styled from "styled-components";
import { PermissionsPage } from "./Permissions.styled";
import { useEffect, useRef } from "react";
import { PermissionsTable, CreateEditRoleForm } from './components'
import { Button } from "components";
import { usePermissionStore } from 'modules/Permissions/hooks';

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
`;

export const Permissions = () => {
  const tableRef = useRef<HTMLDivElement>(null);

  const roles = usePermissionStore((state) => state.roles);
  const { isFormOpen, setIsFormOpen } = usePermissionStore();

  useEffect(() => {
    if (tableRef.current) {
      tableRef.current?.scrollTo({
        left: tableRef.current.scrollWidth,
        behavior: 'smooth',
      });
    }
  }, [roles]);

  return (
    <PermissionsPage>
      <Header>
        <h1>Permissions</h1>
        <Button onClick={() => setIsFormOpen(!isFormOpen)}>+ New role</Button>
      </Header>
      <PermissionsTable innerRef={tableRef}/>
      <CreateEditRoleForm/>
    </PermissionsPage>
  );
};