import { useAuth } from "@/context/AuthContext";
import storage from "@/utils/storage";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthRoutes from "../../routes/AuthRoutes";

export default function AuthIndex() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = storage.getToken();
  const { user } = useAuth();
  useEffect(() => {
    setIsLoggedIn(Boolean(token && user));
  }, []);

  return false ? (
    <Navigate to="/" />
  ) : (
    <Routes>
      {AuthRoutes.map((route) => {
        return (
          <Route
            path={route.path}
            element={<route.element />}
            key={route.path}
          />
        );
      })}
    </Routes>
  );
}
