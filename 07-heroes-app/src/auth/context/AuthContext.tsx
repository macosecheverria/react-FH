import { createContext } from "react";


type AuthContextProps = {
    login: (name: string) => void;
    logout: () => void;
    id: string;
    name: string;
    logged: boolean;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);