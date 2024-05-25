import styled from "styled-components";
import { TableCell } from "./TableCell";
import { ToggleCell } from "./ToggleCell";
import { SwitchButton } from "components/SwitchButton";
import { ActionGroup } from "modules/Permissions/types/table.data";

const ActionRow = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  border-bottom: solid 1px var(--color-border);

`
const Action = styled.div`
  border-left: solid 1px var(--color-border);
  padding-bottom: var(--space-1);

  &:last-child {
    padding-bottom: var(--space-1);
  }
`
const ActionTitle = styled(TableCell) <{ $isFirstItem?: boolean }>`
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-xs);
  color: var(--color-text);
  padding-left: var(--space-2);

  & > span {
    margin-right: auto
  }
`;

const ActionDescription = styled(TableCell) <{ $isFirstItem?: boolean }>`
  font-size: var(--font-size-xxs);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-xs);
  padding-left: var(--space-2);
  color: var(--color-secondary);

  & > span {
    margin-right: auto
  }
`;

const FirstColumnCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionRow = styled.div<{ cols: number }>`
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

interface IActionRows {
  actions: ActionGroup['actions'];
  groupName: string;
  columns: number;
}
export const ActionGroups = ({ columns, groupName, actions }: IActionRows) => (
  <>
    <SectionRow cols={columns}>{groupName}</SectionRow>
    {Array.from({ length: columns }).map((_, i) => (
      <ActionRow key={`col-${i}`}>
        {i === 0 && (
          <FirstColumnCell id="firstcol">
            {actions.map((action, index) => (
              <Action key={index}>
                <ActionTitle>
                  <span>{action.title}</span>
                </ActionTitle>
                <ActionDescription>
                  <span>{action.description}</span>
                </ActionDescription>
              </Action>
            ))}
          </FirstColumnCell>
        )}
        {i !== 0 && (
          <ToggleCell>
            <SwitchButton disabled={i === 1} />
          </ToggleCell>
        )}
      </ActionRow>
    ))}
  </>
);