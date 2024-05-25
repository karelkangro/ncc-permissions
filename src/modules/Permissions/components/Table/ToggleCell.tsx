import styled from "styled-components";
import { TableCell } from "./TableCell";

export const ToggleCell = styled(TableCell)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  &:first-child {
    border-left: solid 1px var(--color-border);
  }
  &:last-child {
    border-right: solid 1px var(--color-border);
  }
`;