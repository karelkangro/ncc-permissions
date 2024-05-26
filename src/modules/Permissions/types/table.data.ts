export interface IAction {
  id: number;
  title: string;
  description: string;
}

export interface IActionGroup {
  name: string;
  actions: IAction[];
}

export interface IRoleAction {
  actionId: number;
  enabled: boolean;
}

export interface IRole {
  id: number;
  name: string;
  actions: IRoleAction[];
}