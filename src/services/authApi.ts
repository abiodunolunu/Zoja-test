import axios from "@/axios";
import { ILoginData, ISignUpData } from "@/types/ApiPayloads";
import { ILoginResponse, ISignUpResponse } from "@/types/ApiResponse";
import storage from "@/utils/storage";

export default {
  login: ({ email, password }: ILoginData) => {
    return axios.post<ILoginResponse>("/user-login", { email, password });
  },
  register: ({ name, email, password, password_confirmation }: ISignUpData) => {
    return axios.post<ISignUpResponse>("/register", {
      name,
      email,
      password,
      password_confirmation,
    });
  },
  logout: () => {
    return axios.post("logout", {
      token: storage.getToken(),
    });
  },
};
