export interface IAction {
  id: number;
  title: string;
  description: string;
}

export interface IActionGroup {
  name: string;
  actions: IAction['id'][];
}
export interface IRole {
  id: number;
  name: string;
  actions: IAction['id'][];
}

export interface IData {
  actionGroups: IActionGroup[];
  roles: IRole[];
}