import { Link } from "react-router-dom";
import styled from "styled-components";

export const MenuItem = styled(Link) <{ $isActive?: boolean, $isTopLevel?: boolean }>`
  display: flex;
  align-items: center;
  height: ${({$isTopLevel}) => $isTopLevel
    ? 'var(--space-5)'
    : 'var(--space-5)'
  };
  font-size: ${({$isTopLevel}) => $isTopLevel
    ? 'var(--font-size-3xs)'
    : 'var(--font-size-xxs)'
  };
  color: var(--color-text-dark);
  text-decoration: none;
  letter-spacing: 1;
  background: ${({$isActive}) => $isActive
    ? 'var(--color-bg-dark)'
    : 'none'
  };
  border-radius: var(--radius-2xs);
  cursor: ${({ $isTopLevel }) => !$isTopLevel
    ? 'pointer'
    : 'default'
    };

  &:hover {
     svg path {
      fill: var(--color-primary);
    }

    background:  ${({ $isTopLevel }) => !$isTopLevel
      ? 'var(--color-bg-dark)'
      : 'none'
    };
  }

  & svg path {
    fill: ${({ $isActive }) => ($isActive
      ? 'var(--color-primary)'
      : 'var(--color-seconday')
    };
  }
  pointer-events: ${({ $isTopLevel }) => ($isTopLevel ? 'none' : 'auto')};
`;

export const MenuIconWrap = styled.div`
  margin-right: 0.56rem;
  margin-left: var(--space-1);
`