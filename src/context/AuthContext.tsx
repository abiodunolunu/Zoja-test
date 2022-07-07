import authApi from "@/services/authApi";
import { User } from "@/types/Models";
import storage from "@/utils/storage";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

interface IAuthContext {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthContextProvider");
  }

  return context;
};

const AuthContextProvider = (props: PropsWithChildren<{}>) => {
  const [user, setUser] = useState<User | null>(storage.getUser());

  const logout = async () => {
    await authApi.logout();
    setUser(null);
    storage.removeToken();
  };

  useEffect(() => {
    if (user) {
      storage.setUser(user);
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ setUser, user, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuth };
