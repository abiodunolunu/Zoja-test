export interface ISignUpData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IUpdateOrganizationData {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  country: string;
}
