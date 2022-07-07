export interface IRouteStructure {
  name: string;
  path: string;
  element: () => JSX.Element;
  meta?: {
    [key: string]: any;
  } & IRouteGuards;
}

interface IRouteGuards {
  requiresAuth?: boolean;
  requiresGuest?: boolean;
}
