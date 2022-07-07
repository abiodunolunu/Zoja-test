import { IRouteStructure } from "@/types/Route";
import Login from "../views/Auth/Login";
import Register from "../views/Auth/Register";

const routes: IRouteStructure[] = [
  {
    name: "AuthHome",
    path: "",
    element: Login,
  },
  {
    name: "Login",
    path: "/login",
    element: Login,
  },
  {
    name: "Register",
    path: "/register",
    element: Register,
  },
];

export const defaultAuthRoute = "/auth/login";

export default routes;
