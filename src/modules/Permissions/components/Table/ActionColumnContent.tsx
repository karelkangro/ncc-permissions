import { FC } from "react";
import styled from "styled-components";
import { TableCell } from "./TableCell";

const Action = styled.div<{ isFirst: boolean }>`
  height: 4rem;
`;

const ActionTitle = styled(TableCell) <{ $isFirstItem?: boolean }>`
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-xs);
  color: var(--color-text);
  padding-left: var(--space-2);

  & > span {
    margin-right: auto;
  }
`;

const ActionDescription = styled(TableCell) <{ $isFirstItem?: boolean }>`
  font-size: var(--font-size-xxs);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-xs);
  padding-left: var(--space-2);
  color: var(--color-secondary);

  & > span {
    margin-right: auto;
  }
`;

interface IActionColumnContentProps {
  isFirst: boolean;
  title: string;
  description: string;
}

export const ActionColumnContent: FC<IActionColumnContentProps> = ({ isFirst, title, description }) => (
  <Action isFirst={isFirst} key={title}>
    <ActionTitle>
      <span>{title}</span>
    </ActionTitle>
    <ActionDescription>
      <span>{description}</span>
    </ActionDescription>
  </Action>
);