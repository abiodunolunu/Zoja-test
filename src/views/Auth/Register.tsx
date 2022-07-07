import { useAuth } from "@/context/AuthContext";
import authApi from "@/services/authApi";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import AppRoutesEnum from "../../types/enums/RouteEnums";

export default function Register() {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const { setUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name;
    const value = e.target.value;
    setSignupData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    const { data } = await authApi.register({
      name: signupData.name,
      email: signupData.email,
      password: signupData.password,
      password_confirmation: signupData.password_confirmation,
    });

    if (!data.success) {
      setError(data.message);
    } else {
      alert("You have successfully registered!, You can login now");
      navigate(AppRoutesEnum.LOGIN);
    }
  };
  return (
    <div>
      {error && <p className="text-xs text-red-700 text-center">{error}</p>}
      <form onSubmit={handleSubmit}>
        <TextInput
          labelText="Name"
          id="name"
          name="name"
          className="mb-2"
          value={signupData.name}
          onChange={handleChange}
          required
        />
        <TextInput
          id="email"
          labelText="Email"
          type="email"
          className="mb-2"
          name="email"
          value={signupData.email}
          onChange={handleChange}
          required
        />
        <TextInput
          id="password"
          labelText="Password"
          type="password"
          className="mb-2"
          name="password"
          value={signupData.password}
          onChange={handleChange}
          required
        />

        <TextInput
          id="confirmpassword"
          labelText="Confirm password"
          type="password"
          name="password_confirmation"
          value={signupData.password_confirmation}
          onChange={handleChange}
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
          Already have an account ?{" "}
          <Link to={AppRoutesEnum.LOGIN} className="text-blue-800">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
