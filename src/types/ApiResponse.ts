import { User } from "./Models";

export interface IApiResponse<T> {
  success?: boolean;
  data: T;
  errors: any[] | { [key: string]: string[] | string };
  message: string;
}

export type ISignUpResponse = IApiResponse<User>;

export type ILoginResponse = IApiResponse<{ token: string; user: User }>;

export type IUpdateOrganizationResponse = IApiResponse<string>;
