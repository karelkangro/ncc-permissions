import styled from "styled-components";
import { TableCell } from "./TableCell";
import { ToggleCell } from "./ToggleCell";
import { SwitchButton } from "components/SwitchButton";

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

export const ActionRows = ({ columns }: { columns: number }) => (
  <>
    <SectionRow cols={columns}>General</SectionRow>
    {Array.from({ length: columns }).map((_, i) => (
      <ActionRow key={`col-${i}`}>
        {i === 0 && (
          <FirstColumnCell id="firstcol">
            <Action>
              <ActionTitle>
                <span>Action Title</span>
              </ActionTitle>
              <ActionDescription>
                <span>Action Description</span>
              </ActionDescription>
            </Action>
          </FirstColumnCell>
        )}
        {i !== 0 && (
          <ToggleCell key={`col-${i}`}>
            <SwitchButton disabled={i === 1} />
          </ToggleCell>
        )}
      </ActionRow>
    ))}
  </>
);