export type TodoState = {
  id: number;
  description: string;
  done: boolean;
};

export type Action =
  | { type: "[TODO] Add Todo"; payload: TodoState }
  | { type: "[TODO] Remove Todo"; payload: number }
  | { type: "[TODO] Toggle Todo"; payload: number };

export const State: TodoState[] = [
  {
    id: new Date().getTime(),
    description: "Gema del Alma",
    done: false,
  },
];

export const todoReducer = (
  initialState: TodoState[] = State,
  action: Action
) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...initialState, action.payload];

    case "[TODO] Remove Todo":
      return initialState.filter((todo) => todo.id !== action.payload);

    case "[TODO] Toggle Todo":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }

        return todo;
      });
      
    default:
      return initialState;
  }
};
