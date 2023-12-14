import { TodoAdd, TodoList } from "./components";
import useTodos from "./hooks/useTodo";

const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleDeleteTodo,
    onToogleTodo,
    handleNewTodo,
  } = useTodos();

  return (
    <>
      <h1>
        Todo App: {todosCount} <small>pendientes {pendingTodosCount}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToogleTodo={onToogleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};

export default TodoApp;
