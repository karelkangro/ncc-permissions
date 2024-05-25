export interface Action {
  id: number;
  title: string;
  description: string;
}

export interface ActionGroup {
  name: string;
  actions: Action[];
}

export interface RoleAction {
  actionId: number;
  enabled: boolean;
}

export interface Role {
  id: number;
  name: string;
  actions: RoleAction[];
}