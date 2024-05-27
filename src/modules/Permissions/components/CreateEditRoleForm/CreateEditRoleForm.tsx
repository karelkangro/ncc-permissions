import { Sidebar } from "components";
import { Form } from './CreateEditRoleForm.styled'
import { FormHeader, RoleNameInput, RoleDropdown, FormFooter } from './components'
import { usePermissionStore, useRoleForm } from "modules/Permissions/hooks";

export const CreateEditRoleForm = () => {

  const { roles, isFormOpen, setIsFormOpen, isEditRoleMode } = usePermissionStore();
  const {
    roleName,
    onSetName,
    onSaveFormData
  } = useRoleForm();

  const onSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    onSaveFormData();
    setIsFormOpen(false);
  }

  const closeForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null) => {
    if (e) e.preventDefault();
    setIsFormOpen(false);
  };

  return (
    <Sidebar isOpen={isFormOpen}>
      <Form onSubmit={onSubmit}>
        <FormHeader isEditMode={isEditRoleMode} onClose={closeForm} />
        <RoleNameInput
          roleName={roleName}
          onNameInputChange={onSetName}
        />
        <RoleDropdown
          isEditMode={isEditRoleMode}
          defaultRole={roles[0].name}
        />
        <FormFooter
          isEditMode={isEditRoleMode}
          onCancel={() => closeForm(null)}
        />
      </Form>
    </Sidebar>
  )
}