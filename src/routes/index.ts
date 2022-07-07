import { IRouteStructure } from "@/types/Route";
import Home from "@/views/Home";
import UpdateOrganization from "@/views/UpdateOrganization";
import AuthIndex from "../views/Auth/AuthIndex";

const routes: IRouteStructure[] = [
  {
    name: "Home",
    path: "/",
    element: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "Auth",
    path: "/auth/*",
    element: AuthIndex,
    meta: {
      requiresGuest: true,
    },
  },
  {
    name: "UpdateOrganization",
    path: "/update-organization",
    element: UpdateOrganization,
    meta: {
      requiresAuth: true,
    },
  },
];

export default routes;
