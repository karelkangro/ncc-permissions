import { MenuItem, MenuIconWrap } from './MenuItem';
import { IMenuItem } from '../Menu.data';
import { Location } from 'react-router-dom';

type Props = {
  item: IMenuItem;
  location: Location;
}
export const MenuGroup = ({ item, location }: Props) => {
  return (
    <div key={item.name}>
      <MenuItem $isTopLevel to={item?.route ?? ''}>
        {item.name}
      </MenuItem>
      {item.subMenuItems?.map(el => (
        <MenuItem
          key={el.route}
          to={el.route ?? ''}
          $isActive={el.route === location.pathname}
        >
          <MenuIconWrap>{el.icon}</MenuIconWrap> {el.name}
        </MenuItem>
      ))}
    </div>
  );
};