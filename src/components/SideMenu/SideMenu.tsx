import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { menuItems } from './Menu.data';
import { MenuTitle, MenuGroup } from './components';

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-3) var(--space-2);
  gap: var(--space-15);
  background-color: var(--color-bg-dark);
`

const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`
export const SideMenu = () => {
  const location = useLocation();

  return (
    <Menu>
      <MenuTitle />
      <MenuItems>
        {menuItems.map((item) => (
          <MenuGroup key={item.name} item={item} location={location} />
        ))}
      </MenuItems>
    </Menu>
  );
};