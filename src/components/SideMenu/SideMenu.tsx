import { Link, useLocation } from 'react-router-dom';
import { menuItems } from './Menu.data';
import styled from 'styled-components';
import { ChevronLeftIcon } from 'assets/icons';

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-3) var(--space-2);
  gap: var(--space-15);
  background-color: #131B24;
`

const MenuItem = styled(Link) <{ $active?: boolean, $topLevel?: boolean }>`
  display: flex;
  align-items: center;
  height: ${(props) => props.$topLevel ? 'var(--space-5)' : 'var(--space-5)'};
  font-size: ${(props) => props.$topLevel ? 'var(--font-size-3xs)' : 'var(--font-size-xxs)'};
  color: var(--color-text-dark);
  text-decoration: none;
  background: ${(props) => props.$active ? '#10171F' : 'none'};
  border-radius: var(--radius-2xs);
  letter-spacing: 1;
`;

const MenuTitle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: var(--space-1); /* Add gap here for consistency */

  & > div {
    background-color: var(--color-tooltip-bg);
    border-radius: var(--radius-4xs);
    width: var(--space-3);
    height: var(--space-3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > h2 {
    font-size: var(--font-size-xxs);
    font-weight: var(--font-weight-normal);
    color: var(--color-text);
  }
`

const IconWrap = styled.div`
  margin-right: 0.56rem;
  margin-left: var(--space-1);
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2); /* Set gap for spacing between items */
`

export const SideMenu = () => {
  const location = useLocation();

  return (
    <Menu>
      <MenuTitle>
        <div><ChevronLeftIcon /></div>
        <h2>Settings</h2>
      </MenuTitle>
      <StyledDiv>
        {menuItems.map((item) => (
          <div key={item.name}>
            <MenuItem $topLevel to={item?.route ?? ''}>
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
      </StyledDiv>
    </Menu>
  );
};