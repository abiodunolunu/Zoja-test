import { useAuth } from "@/context/AuthContext";
import AppRoutesEnum from "@/types/enums/RouteEnums";
import storage from "@/utils/storage";
import { Navigate } from "react-router-dom";

export default function RequiresAuth({ children }: { children: JSX.Element }) {
  const { user } = useAuth();
  const token = storage.getToken();

  const isAuthenticated = Boolean(user && token);

  if (!isAuthenticated) {
    return <Navigate to={AppRoutesEnum.LOGIN} replace />;
  }

  return children;
}
