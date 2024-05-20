import styled from "styled-components";
import { PermissionsPage } from "./Permissions.styled";
import { useState } from "react";
import { PermissionsTable } from './components'

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const Permissions = () => {
  const defaultColumns = 4;
  const [columns, setColumns] = useState(3);
  const addColumn = () => setColumns((prev) => prev + 1);
  const deleteColumn = () => setColumns((prev) => (prev > defaultColumns ? prev - 1 : prev));

  return (
    <PermissionsPage>
      <Header>
        <h1>Permissions</h1>
        <button onClick={deleteColumn}>- Delete role</button>
        <button onClick={addColumn}>+ New role</button>
      </Header>
      <PermissionsTable
        columns={columns}
        onRemoveRole={deleteColumn}
        onEditRole={addColumn}
      />
    </PermissionsPage>
  );
};

