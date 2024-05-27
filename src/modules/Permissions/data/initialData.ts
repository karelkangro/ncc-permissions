export const ACTIONS = [
  { id: 1, title: 'Add client', description: 'The ability to add and edit clients.' },
  { id: 2, title: 'Delete client', description: 'The ability to delete clients.' },
  { id: 3, title: 'Add involvement', description: 'The ability to add, edit and delete involvements.' },
  { id: 4, title: 'Set permissions and access role', description: 'The ability to update permissions and change access roles.' },
  { id: 5, title: 'Edit billing details', description: 'View and edit company billing details.' },
  { id: 6, title: 'Ongoing monitoring', description: 'The ability to turn ongoing monitoring on or off.' },
  { id: 7, title: 'Add hit', description: 'The ability to add and edit hits.' },
  { id: 8, title: 'Remove hit', description: 'The ability to delete hits.' },
  { id: 9, title: 'Add field', description: 'Add and edit fields in the questionnaire and risk assessment builder.' },
  { id: 10, title: 'Customer risk assessment', description: 'The ability to access the risk assessment settings.' },
  { id: 11, title: 'Jurisdictional risk assessment', description: 'The ability to view and edit the jurisdictional risk assessment.' },
];

export const ACTION_GROUPS = [
  { name: 'General', actions: [1, 2, 3] },
  { name: 'Team member access', actions: [4] },
  { name: 'Billing', actions: [5] },
  { name: 'Screening', actions: [6, 7, 8] },
  { name: 'Questionnaires and Risk Assessments', actions: [9, 10, 11] },
];

export const BASE_ROLES = {
  Admin: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  Manager: [1, 3, 4, 5, 6, 7, 8, 9, 10],
  Member: [1, 2, 3, 6, 7, 8, 9],
  LimitedManager: [1, 2, 3, 6, 7, 8],
};

export const DEFAULT_ROLES = [
  { id: 1, name: 'Admin', actions: BASE_ROLES.Admin },
  { id: 2, name: 'Member', actions: BASE_ROLES.Member },
  { id: 3, name: 'Manager', actions: BASE_ROLES.Manager },
  { id: 4, name: 'Limited manager', actions: BASE_ROLES.LimitedManager },
];