export const ACTION_GROUPS = [
  {
    name: 'General',
    actions: [
      { id: 1, title: 'Add client', description: 'The ability to add and edit clients.' },
      { id: 2, title: 'Delete client', description: 'The ability to delete clients.' },
      { id: 3, title: 'Add involvement', description: 'The ability to add, edit and delete involvements.' },
    ],
  },
  {
    name: 'Team member access',
    actions: [
      { id: 4, title: 'Set permissions and access role', description: 'The ability to update permissions and change access roles.' },
    ],
  },
  {
    name: 'Billing',
    actions: [
      { id: 5, title: 'Edit billing details', description: 'View and edit company billing details.' },
    ],
  },
  {
    name: 'Screening',
    actions: [
      { id: 6, title: 'Ongoing monitoring', description: 'The ability to turn ongoing monitoring on or off.' },
      { id: 7, title: 'Add hit', description: 'The ability to add and edit hits.' },
      { id: 8, title: 'Remove hit', description: 'The ability to delete hits.' },
    ],
  },
  {
    name: 'Questionnaires and Risk Assessments',
    actions: [
      { id: 9, title: 'Add field', description: 'Add and edit fields in the questionnaire and risk assessment builder.' },
      { id: 10, title: 'Customer risk assessment', description: 'The ability to access the risk assessment settings.' },
      { id: 11, title: 'Jurisdictional risk assessment', description: 'The ability to view and edit the jurisdictional risk assessment.' },
    ],
  },
];

export const DEFAULT_ROLES = [
  {
    id: 1,
    name: 'Admin',
    actions: [
      { actionId: 1, enabled: true },
      { actionId: 2, enabled: false },
      { actionId: 3, enabled: true },
      { actionId: 4, enabled: true },
      { actionId: 5, enabled: true },
      { actionId: 6, enabled: true },
      { actionId: 7, enabled: true },
      { actionId: 8, enabled: true },
      { actionId: 9, enabled: true },
      { actionId: 10, enabled: true },
      { actionId: 11, enabled: true },
    ],
  },
  {
    id: 2,
    name: 'Member',
    actions: [
      { actionId: 1, enabled: true },
      { actionId: 2, enabled: true },
      { actionId: 3, enabled: true },
      { actionId: 4, enabled: false },
      { actionId: 5, enabled: false },
      { actionId: 6, enabled: true },
      { actionId: 7, enabled: true },
      { actionId: 8, enabled: false },
      { actionId: 9, enabled: false },
      { actionId: 10, enabled: false },
      { actionId: 11, enabled: false },
    ],
  },
  {
    id: 3,
    name: 'Manager',
    actions: [
      { actionId: 1, enabled: true },
      { actionId: 2, enabled: false },
      { actionId: 3, enabled: true },
      { actionId: 4, enabled: true },
      { actionId: 5, enabled: true },
      { actionId: 6, enabled: true },
      { actionId: 7, enabled: true },
      { actionId: 8, enabled: true },
      { actionId: 9, enabled: true },
      { actionId: 10, enabled: true },
      { actionId: 11, enabled: true },
    ],
  },
  {
    id: 4,
    name: 'Limited manager',
    actions: [
      { actionId: 1, enabled: true },
      { actionId: 2, enabled: true },
      { actionId: 3, enabled: true },
      { actionId: 4, enabled: false },
      { actionId: 5, enabled: false },
      { actionId: 6, enabled: true },
      { actionId: 7, enabled: true },
      { actionId: 8, enabled: false },
      { actionId: 9, enabled: false },
      { actionId: 10, enabled: false },
      { actionId: 11, enabled: false },
    ],
  },
];