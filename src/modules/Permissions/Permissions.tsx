import styled from "styled-components";
import { PermissionsPage } from "./Permissions.styled";
import { useEffect, useRef, useState } from "react";
import { PermissionsTable, CreateEditRoleForm } from './components'
import { Button, Sidebar } from "components";
import { ACTION_GROUPS, DEFAULT_ROLES } from "./data";

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
const getInitialData = () => {
  const savedRoles = localStorage.getItem('roles');

  return savedRoles
    ? { actionGroups: ACTION_GROUPS, roles: JSON.parse(savedRoles) }
    : { actionGroups: ACTION_GROUPS, roles: DEFAULT_ROLES };
};

export const Permissions = () => {
  const [data, setData] = useState(getInitialData);
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem('roles', JSON.stringify(data.roles));
  }, [data.roles]);

  const addColumn = () => setData(prev => ({ ...prev, roles: [...prev.roles, { id: prev.roles.length + 1, name: `Role ${prev.roles.length + 1}`, actions: [] }] }));
  const deleteColumn = () => setData(prev => ({ ...prev, roles: prev.roles.length > DEFAULT_ROLES.length ? prev.roles.slice(0, -1) : prev.roles }));

  // const addRole = (roleName: string, copyFromRoleId: number) => {
  //   const roleToCopy = data.roles.find(role => role.id === copyFromRoleId);
  //   if (roleToCopy) {
  //     const newRole: Role = {
  //       id: data.roles.length + 1,
  //       name: roleName,
  //       actions: roleToCopy.actions.map(action => ({ ...action })),
  //     };
  //     setData({ ...data, roles: [...data.roles, newRole] });
  //   }
  // };

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(data.roles[0].id);
  const [roleName, setRoleName] = useState('');

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const selectRole: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSelectedRole(e.target.value);
  };

  const onSetName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setRoleName(e.target.value);
  };

  const addNewRole = () => {
    toggleSidebar();
  }

  const onSaveFormData = () => {
    // TODO implement saving to local storage
    console.log('formData', {
      roleName,
      selectedRole,
    });
    toggleSidebar();
  }

  useEffect(() => {
    if (tableRef.current) {
      tableRef.current?.scrollTo({
        left: tableRef.current.scrollWidth,
        behavior: 'smooth',
      });
    }
  }, [data.roles]);

  return (
    <PermissionsPage>
      <Sidebar isOpen={isSidebarOpen}>
        <CreateEditRoleForm
          options={data.roles}
          initialSelectedRole={selectedRole}
          onRoleChange={selectRole}
          onNameChange={onSetName}
          roleName={roleName}
          onCancel={toggleSidebar}
          onSave={onSaveFormData}
          onClose={toggleSidebar}
        />
      </Sidebar>
      <Header>
        <h1>Permissions</h1>
        <Button onClick={deleteColumn}>- Delete role</Button>
        <Button onClick={addNewRole}>+ New role</Button>
      </Header>
      <PermissionsTable
        innerRef={tableRef}
        data={data}
        onRemoveRole={deleteColumn}
        onEditRole={addColumn}
      />
    </PermissionsPage>
  );
};