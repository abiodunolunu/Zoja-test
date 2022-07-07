import { useAuth } from "@/context/AuthContext";
import authApi from "@/services/authApi";
import organizationApi from "@/services/organizationApi";
import { ILoginResponse } from "@/types/ApiResponse";
import storage from "@/utils/storage";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import AppRoutesEnum from "../../types/enums/RouteEnums";

export default function Login() {
  let navigate = useNavigate();

  const { setUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ILoginResponse["errors"] | null>(null);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name;
    const value = e.target.value;
    setLoginData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);
    const { data } = await authApi.login({
      email: loginData.email,
      password: loginData.password,
    });

    if (data.success) {
      setUser(data.data.user);
      storage.setToken(data.data.token);
      organizationApi.getOrganization();
      navigate("/", { replace: true });
    } else {
      if (Array.isArray(data.errors)) return;
      const errorValues = [...Object.values(data.errors)];
      setError(errorValues);
    }
  };
  return (
    <div>
      {error && (
        <p className="text-xs text-red-700 text-center">
          {JSON.stringify(error)}
        </p>
      )}

      <form onSubmit={handleSubmit} autoComplete="off">
        <TextInput
          value={loginData.email}
          onChange={handleChange}
          id="email"
          labelText="Email"
          type="email"
          className="mb-3"
          name="email"
          autoComplete="off"
          required
        />
        <TextInput
          value={loginData.password}
          onChange={handleChange}
          id="password"
          labelText="Password"
          type="password"
          name="password"
          className="mb-3"
          required
        />

        <Button
          text={isLoading ? "Loading..." : "Submit"}
          disabled={isLoading}
          className="mt-5 w-full"
          type="submit"
        />
      </form>

      <div className="mt-5 text-center">
        <p className="text-sm">
          Don't have an account ?
          <Link to={AppRoutesEnum.REGISTER} className="text-blue-800">
            {" "}
            Register{" "}
          </Link>
        </p>
      </div>
    </div>
  );
}
