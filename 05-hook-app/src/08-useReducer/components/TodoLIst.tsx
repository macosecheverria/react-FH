import { TodoState } from "../todoReducer";
import {TodoItem} from "./";

type Props = {
  todos: TodoState[],
  onDeleteTodo: (id: number) => void
  onToogleTodo: (id: number) => void
}

const TodoList = ({todos, onDeleteTodo, onToogleTodo}: Props) => {
  

    return ( 
        <ul className="list-group">
        {todos.map(todo => (
         <TodoItem key={todo.id} {...todo} onDeleteTodo={onDeleteTodo} description={todo.description} onToogleTodo={onToogleTodo} />
        ))}
      </ul>
     );
}
 
export default TodoList;