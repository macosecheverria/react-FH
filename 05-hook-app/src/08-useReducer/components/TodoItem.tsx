type Props = {
  id: number;
  description: string;
  done: boolean;
  onDeleteTodo: (id: number) => void;
  onToogleTodo: (id: number) => void;
};

const TodoItem = ({
  description,
  id,
  done,
  onDeleteTodo,
  onToogleTodo,
}: Props) => {
  return (
    <li className="list-group-item d-flex justify-content-between mt-2">
      <span
        className={`align-self-center ${
          done ? "text-decoration-line-through" : ""
        }`}
        onClick={() => onToogleTodo(id)}
      >
        {description}
      </span>
      <button
        className="btn btn-outline-danger mt-2"
        onClick={() => onDeleteTodo(id)}
      >
        Borrar
      </button>
    </li>
  );
};

export default TodoItem;
