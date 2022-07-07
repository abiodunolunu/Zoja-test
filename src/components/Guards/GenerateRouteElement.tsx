import { IRouteStructure } from "@/types/Route";
import RequiresAuth from "../Guards/RequiresAuth";
import RequiresGuest from "../Guards/RequiresGuest";

export default function GenerateRouteElement(
  element: JSX.Element,
  routeMeta: IRouteStructure["meta"]
) {
  if (!routeMeta) {
    return element;
  }

  const { requiresAuth, requiresGuest } = routeMeta;

  if (requiresAuth) {
    return <RequiresAuth>{element}</RequiresAuth>;
  }

  if (requiresGuest) {
    return <RequiresGuest>{element}</RequiresGuest>;
  }

  return <div>Nothing to show</div>;
}
