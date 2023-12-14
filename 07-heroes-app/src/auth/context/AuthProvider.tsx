import { ReactNode, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer, initialState } from "./authReducer";
import { Action } from "../types/types";

interface Props {
  children: ReactNode;
}

const init = () => {
  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : "";

  return {
    logged: !!user,
    user,
  };
};

const AuthProvider = ({ children }: Props) => {
  const [authState, dispatch] = useReducer(authReducer, initialState, init);
  const { user, logged } = authState;

  const login = (name: string): void => {
    const user = { id: "ABC", name };

    const action: Action = {
      type: "[Auth] Login",
      payload: user,
    };

    localStorage.setItem("user", JSON.stringify(user));
    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem("user");
    const user = { id: "", name: "" };
    const action: Action = {
      type: "[Auth] Logout",
      payload: user
    }
    dispatch(action)
  }

  const authContextObject = {
    login,
    logout,
    id: user.id,
    name: user.name,
    logged: logged
  };

  return (
    <AuthContext.Provider value={authContextObject}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
