import { useEffect, useReducer } from "react";
import { TodoState, State, todoReducer, Action } from "../todoReducer";

const init = () => {
  const storeData = localStorage.getItem("todos");
  if (storeData != null) {
    return JSON.parse(storeData);
  } else {
    return State;
  }
};

const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, State, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const todosCount = todos.length;

  const pendingTodosCount = todos.filter((todo) => !todo.done).length;

  const handleNewTodo = (todo: TodoState) => {
    const action: Action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch({ type: action.type, payload: action.payload });
  };

  const handleDeleteTodo = (id: number) => {
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };

  const onToogleTodo = (id: number) => {
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };

  return {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    onToogleTodo,
  };
};

export default useTodos;
