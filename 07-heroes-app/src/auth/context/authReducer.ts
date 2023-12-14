import { Action } from "../types/types";

export type IUser = {
  id: string;
  name: string;
};

type StateProps = {
  logged: boolean;
  user: IUser;
};

export const initialState: StateProps = {
  logged: false,
  user: {
    id: "",
    name: "",
  },
};

export const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "[Auth] Login":
      return {
        ...state,
        logged: true,
        user: action.payload,
      };

    case "[Auth] Logout":
      return {
        logged: false,
        user: {id: "", name: ""}
      };

    default:
      return state;
  }
};
