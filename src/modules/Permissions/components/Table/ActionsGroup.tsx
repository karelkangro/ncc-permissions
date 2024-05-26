import styled from "styled-components";
import { IActionGroup } from "modules/Permissions/types/table.data";
import { FC } from "react";
import { ActionColumnContent } from "./ActionColumnContent";
import { SwitchColumnContent } from "./SwitchColumnContent";
import { TableColumns } from "./TableColumns";


interface IActionRows {
  actions: IActionGroup['actions'];
  title: string;
  columns: number;
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

export const ActionsGroup: FC<IActionRows> = ({ columns, title, actions }) => (
  <>
    <GroupTitle>{title}</GroupTitle>
    <TableColumns columns={columns}>
      {(columnIndex: number) => {
        const isActionColumn = columnIndex === 0;
        const isAdminColumn = columnIndex === 1;

        return (
          <ColumnContent isActionColumn={isActionColumn} rows={actions.length}>
            {isActionColumn
              ? actions.map((action, idx) => (
                  <ActionColumnContent
                    index={idx}
                    key={action.title}
                    title={action.title}
                    description={action.description}
                  />
                ))
              : actions.map(action => (
                  <SwitchColumnContent
                    isSwitchDisabled={isAdminColumn}
                    key={action.title}
                  />
                ))}
          </ColumnContent>
        );
      }}
    </TableColumns>
  </>
);