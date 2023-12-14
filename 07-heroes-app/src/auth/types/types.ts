import { IUser } from "../context/authReducer";

interface IState {
    logged: boolean
    name: string
}



 type Action = { type: "[Auth] Login", payload: IUser} | { type: "[Auth] Logout" , payload: IUser};

export type { IState, Action };
