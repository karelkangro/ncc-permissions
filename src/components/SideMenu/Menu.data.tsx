import {
  BulletListIcon,
  DocumentListIcon,
  FlagIcon,
  IndicatorIcon,
  LockIcon,
  UserIcon,
  UsersIcon
} from 'assets/icons';

export interface IMenuItem {
  name: string;
  route: string | null;
  icon: React.ReactNode;
  subMenuItems?: IMenuItem[];
}

export const menuItems: IMenuItem[] = [
  {
    name: 'COMPANY',
    route: '/settings',
    icon: null,
    subMenuItems: [
      {
        name: 'Members',
        icon: <UsersIcon />,
        route: '/settings/members',
      },
      {
        name: 'Billing',
        icon: <DocumentListIcon />,
        route: '/settings/billing',
      },
      {
        name: 'Questionnaires',
        icon: <BulletListIcon />,
        route: '/settings/questionnaires',
      },
      {
        name: 'Docs',
        icon: <DocumentListIcon />,
        route: '/settings/docs',
      },
      {
        name: 'Jurstictional risk',
        icon: <FlagIcon />,
        route: '/settings/risk',
      },
      {
        name: 'Risk assessment',
        icon: <IndicatorIcon />,
        route: '/settings/risk-assessment',
      },
      {
        name: 'Permissions',
        icon: <LockIcon />,
        route: '/settings/permissions',
      }
    ]
  },
  {
    name: 'PERSONAL',
    route: '/settings',
    icon: null,
    subMenuItems: [
      {
        name: 'My profile',
        icon: <UserIcon />,
        route: '/settings/profile',
      }
    ]
  }
];
