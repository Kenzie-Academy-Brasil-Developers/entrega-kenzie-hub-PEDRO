import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";
import logo from "../../assets/Logo.svg";
import { StyledMainLoad } from "./style";

export const ProtectedRoutes = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return (
      <StyledMainLoad>
        <img src={logo} alt="Logo" />
      </StyledMainLoad>
    );
  }
  return <>{user ? <Outlet /> : <Navigate to={"/"} />}</>;
};
