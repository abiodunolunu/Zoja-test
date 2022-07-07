import { User } from "@/types/Models";

export default {
  getToken: () => {
    return localStorage.getItem("token");
  },
  setToken: (token: string) => {
    localStorage.setItem("token", token);
  },
  removeToken: () => {
    localStorage.removeItem("token");
  },
  setUser: (user: User) => {
    const serializedUser = JSON.stringify(user);
    localStorage.setItem("user", serializedUser);
  },
  getUser: () => {
    const serializedUser = localStorage.getItem("user");
    if (serializedUser) {
      return JSON.parse(serializedUser);
    }
    return null;
  },
};
