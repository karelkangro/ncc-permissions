import { Link } from 'react-router-dom';
import { menuItems } from './Menu.data';
import styled from 'styled-components';

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-2);
  gap: var(--space-2);
  background-color: var(--color-secondary-100);
`

export const SideMenu = () => {
  return (
    <Menu>
      {menuItems.map((item) => (
        <div key={item.name}>
          <MenuItem
            to={item?.route ?? ''}
          >
            {item.icon} {item.name}
          </MenuItem>
          {item.subMenuItems?.map(
            el => (
              <MenuItem
                key={el.route}
                to={el.route ?? ''}
              >
                {el.icon} {el.name}
              </MenuItem>
            )
          )}
        </div>
      ))}
    </Menu>
  );
};

