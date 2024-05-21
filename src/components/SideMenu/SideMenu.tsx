import { Link, useLocation } from 'react-router-dom';
import { menuItems } from './Menu.data';
import styled from 'styled-components';

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-2);
  gap: var(--space-2);
  background-color: #131B24;
`

const MenuItem = styled(Link) <{ $active?: boolean, $topLevel?: boolean }>`
  display: flex;
  align-items: center;
  color: #677B92;
  font-size: 12px;
  text-decoration: none;
  height: 2.5rem;
  border-radius: var(--radius-2xs);
  background: ${(props) => props.$active ? '#10171F' : 'none'};
  margin-bottom: ${(props) => props.$topLevel ? 'var(--space-2)' : 0};
`;

const IconWrap = styled.div`
  margin-right: 0.56rem;
  margin-left: var(--space-1);
`


export const SideMenu = () => {
  const location = useLocation();

  return (
    <Menu>
      {menuItems.map((item) => (
        <div key={item.name}>
          <MenuItem $topLevel
            to={item?.route ?? ''}
          >
            {item.name}
          </MenuItem>
          {item.subMenuItems?.map(
            el => (
              <MenuItem
                key={el.route}
                to={el.route ?? ''}
                $active={el.route === location.pathname}
              >
                <IconWrap>{el.icon}</IconWrap> {el.name}
              </MenuItem>
            )
          )}
        </div>
      ))}
    </Menu>
  );
};

