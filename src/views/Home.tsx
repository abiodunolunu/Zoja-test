import Button from "@/components/Button";
import { useAuth } from "@/context/AuthContext";
import AppRoutesEnum from "@/types/enums/RouteEnums";
import { Link } from "react-router-dom";

export default function Home() {
  const { logout } = useAuth();
  return (
    <div className="grid gap-5 justify-center">
      <Link
        className="text-sm text-blue-600"
        to={AppRoutesEnum.UPDATE_ORGANIZATION}
      >
        Go to update Organization
      </Link>
      <Button text="Logout" onClick={logout} />
    </div>
  );
}
