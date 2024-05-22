import { Link } from "react-router-dom";
import styled from "styled-components";

export const MenuItem = styled(Link) <{ $active?: boolean, $topLevel?: boolean }>`
  display: flex;
  align-items: center;
  height: ${({$topLevel}) => $topLevel
    ? 'var(--space-5)'
    : 'var(--space-5)'
  };
  font-size: ${({$topLevel}) => $topLevel
    ? 'var(--font-size-3xs)'
    : 'var(--font-size-xxs)'
  };
  color: var(--color-text-dark);
  text-decoration: none;
  letter-spacing: 1;
  background: ${({$active}) => $active
    ? '#10171F'
    : 'none'
  };
  border-radius: var(--radius-2xs);
`;

export const MenuIconWrap = styled.div`
  margin-right: 0.56rem;
  margin-left: var(--space-1);
`