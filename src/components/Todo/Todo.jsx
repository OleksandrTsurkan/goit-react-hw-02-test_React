const Todo = ({ todo, handleDelete }) => {
  return (
    <li className="list-group-item">
      <h4>{todo.title}</h4>
      {todo.description}
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={() => handleDelete(todo.id)}
      ></button>
    </li>
  );
};

export default Todo;
