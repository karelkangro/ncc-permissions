import { ReactNode } from "react";
import styled from "styled-components";

const ActionColumn = styled.div`
  border-bottom: solid 1px var(--color-border);
`;

interface IActionColumn {
  columns: number;
  children: (index: number) => ReactNode;
}
export const TableColumns = ({ columns, children }: IActionColumn) => (
  <>
    {Array.from({ length: columns }).map((_, index) => (
      <ActionColumn key={`col-${index}`}>
        {children(index)}
      </ActionColumn>
    ))}
  </>
);