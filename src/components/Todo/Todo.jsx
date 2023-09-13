import { Component } from 'react';

class Todo extends Component {
  // componentDidMount() {}

  // componentDidUpdate(prevProps) {
  //   if (prevProps.todo.completed !== this.props.todo.completed)
  //     return alert("Wow man")
  // }

  render() {
    const {
      todo: { id, description, title, completed },
      handleCheck,
      handleDelete,
    } = this.props;
    return (
      <li className="list-group-item">
        <h5>title:{title}</h5>
        {description}
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckChecked"
            checked={completed}
            onChange={() => handleCheck(id)}
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            completed
          </label>
        </div>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={() => handleDelete(id)}
        ></button>
      </li>
    );
  }
}

// const Todo = ({ todo, handleDelete }) => {
//   return (
//     <li className="list-group-item">
//       <h4>{todo.title}</h4>
//       {todo.description}
//       <button
//         type="button"
//         className="btn-close"
//         aria-label="Close"
//         onClick={() => handleDelete(todo.id)}
//       ></button>
//     </li>
//   );
// };

export default Todo;
