export const TodoItem = ({ mapTodo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        onClick={() => onToggleTodo(mapTodo.id)}
        className={`align-self-center ${
          mapTodo.done ? "text-decoration-line-through" : " "
        }`}
      >
        {mapTodo.description}
      </span>
      <button
        className="btn btn-danger"
        onClick={() => onDeleteTodo(mapTodo.id)}
      >
        Borrar
      </button>
    </li>
  );
};
