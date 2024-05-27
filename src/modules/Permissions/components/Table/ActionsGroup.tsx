import styled from "styled-components";
import { IAction, IActionGroup, IRole } from "modules/Permissions/types/table.data";
import { FC } from "react";
import { ActionColumnContent } from "./ActionColumnContent";
import { SwitchColumnContent } from "./SwitchColumnContent";
import { TableColumns } from "./TableColumns";
import { usePermissionStore } from "modules/Permissions/hooks";
import { ACTIONS } from "modules/Permissions/data/initialData"; // Import the actions array

interface IActionRows {
  actions: IActionGroup['actions'];
  title: string;
  columns: number;
  roles: IRole[];
}

const ColumnContent = styled.div<{ rows: number; isActionColumn: boolean }>`
  display: grid;
  grid-template-rows: repeat(${props => props.rows - 1}, 1fr);
  border-right: ${props => (props.isActionColumn ? 'solid 1px var(--color-border)' : 'none')};
`;

const GroupTitle = styled.div`
  display: grid;
  grid-column: 1 / -1;
  padding: var(--space-2);
  padding-top: var(--space-25);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-xxs);
  color: var(--color-secondary);
  border-left: solid 1px var(--color-border);
  border-right: solid 1px var(--color-border);
`;

export const ActionsGroup: FC<IActionRows> = ({ columns, title, actions, roles }) => {
  const { toggleAction } = usePermissionStore();

  const actionLookup = ACTIONS.reduce((acc, action) => {
    acc[action.id] = action;
    return acc;
  }, {} as Record<number, IAction>);

  return (
    <>
      <GroupTitle>{title}</GroupTitle>
      <TableColumns columns={columns}>
        {(columnIndex: number) => {
          const isActionColumn = columnIndex === 0;
          const isAdminColumn = columnIndex === 1;

          return (
            <ColumnContent isActionColumn={isActionColumn} rows={actions.length}>
              {isActionColumn
                ? actions.map((actionId) => {
                  const action = actionLookup[actionId];

                  return (
                    <ActionColumnContent
                      key={actionId}
                      isFirst={isActionColumn}
                      title={action.title}
                      description={action.description}
                    />
                  )
                })
                : actions.map(actionId => {
                  const role = roles[columnIndex - 1];

                  const onToggle = (state: boolean) => {
                    toggleAction(role?.id, actionId);

                    return state;
                  }

                  return (
                    <SwitchColumnContent
                      isSwitchDisabled={isAdminColumn}
                      key={`${actionId}`}
                      checked={role?.actions?.includes(actionId)}
                      onChange={(s) => onToggle(s)}
                    />
                  )
                })
              }
            </ColumnContent>
          );
        }}
      </TableColumns>
    </>
  );
};