import { ReactNode, useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const PublicRoute = ({ children }: Props) => {
  const { logged } = useContext(AuthContext);

  return !logged ? children : <Navigate to={"/marvel"} />;
};

export default PublicRoute;
