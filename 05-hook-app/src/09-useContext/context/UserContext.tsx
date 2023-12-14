import { createContext } from "react";

export type User = {
    id: number,
    name: string,
    email: string
}

export type UserState = {
    user: User,
    setUser: React.Dispatch<React.SetStateAction<User>>
}


export const UserContext = createContext<UserState>({} as UserState);