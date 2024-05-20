import {
  ViteLogo
} from 'assets/icons';

export interface MenuItem {
  name: string;
  route: string | null;
  icon: React.ReactNode;
  subMenuItems?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    name: 'Company',
    route: '/settings',
    icon: null,
    subMenuItems: [
      {
        name: 'Permissions',
        icon: <ViteLogo />,
        route: '/settings/permissions',
      }
    ]
  },
  {
    name: 'Personal',
    route: '/settings',
    icon: null,
    subMenuItems: [
      {
        name: 'My profile',
        icon: <ViteLogo />,
        route: '/settings/profile',
      }
    ]
  }
];
