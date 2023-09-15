import Todo from 'components/Todo/Todo';
// import todo from './data.json';
import React, { Component } from 'react';
import FormCreateTodo from 'components/Forms/FormCreateTodo';
// import { nanoid } from 'nanoid';
import FormFilterTodo from 'components/FormFilterTodo/FormFilter';
import { getAllTodo } from 'API/Todo';

class TodoList extends Component {
  state = {
    todo: null,
    filteredTodo: null,
    error: '',
    // url: '123',
    isLoading: false,
    isShowTodos: false,
  };

  // componentDidMount() {
  //   this.setState({ isLoading: true });
  //   getAllTodo(this.state.url)
  //     .then(data => this.setState({ todo: data.todos }))
  //     .catch(({ message }) => this.setState({ error: message }))
  //     .finally(() => this.setState({ isLoading: false }));
  // }

  componentDidUpdate(_, prevState) {
    if (prevState.isShowTodos !== this.state.isShowTodos) {
      this.fetchTodos()
  //     this.setState({ isLoading: true });
  //   getAllTodo(this.state.url)
  //     .then(data => this.setState({ todo: data.todos }))
  //     .catch(({ message }) => this.setState({ error: message }))
  //     .finally(() => this.setState({ isLoading: false }));
  }
  }

  fetchTodos = async () => {
    this.setState({ isLoading: true });
    try {
      const data = await getAllTodo();
      this.setState({ todo: data.todos });
    } catch (message) {
      this.setState({ error: message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleClick = () => {
    this.setState({ isShowTodos: true });
  };
  // componentDidUpdate(prevProps, prevState) {

  //   if (prevState.url !== this.state.ulr) {
  //     this.setState({ error: '' });
  //     getAllTodo(this.state.url)
  //       .then(data => this.setState({ todo: data.todos }))
  //       .catch(({ message }) => this.setState({ error: message }));
  //   }
  // }

  // componentDidMount() {
  //   const localData = localStorage.getItem('todo');
  //   if (localData && JSON.parse(localData).length > 0) {
  //     this.setState({ todo: JSON.parse(localData) });
  //   }
  // }

  // componentDidUpdate(_, prevState) {
  //   if (prevState.todo.length !== this.state.todo.length) {
  //     localStorage.setItem('todo', JSON.stringify(this.state.todo));
  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.todo.length < this.state.todo.length)
  //     return alert("Wow man")
  // }

  // updateLocalData = () => {
  //   localStorage.setItem('todo', JSON.stringify(this.state.todo));
  // };

  // handleDelete = id => {
  //   this.setState(prev => ({
  //     todo: prev.todo.filter(el => el.id !== id),
  //   }));
  // };
  // createTodo = dataByForm => {
  //   const isAlreadyExist = this.state.todo.find(
  //     el => el.title === dataByForm.title
  //   );
  //   if (isAlreadyExist) return alert('Already Exist');
  //   const newTodo = {
  //     ...dataByForm,
  //     completed: false,
  //     id: nanoid(),
  //   };
  //   this.setState(prev => ({
  //     todo: [newTodo, ...prev.todo],
  //   }));
  // };

  // filterTodo = filterQuery => {
  //   this.setState(prev => ({
  //     filteredTodo: prev.todo.filter(el =>
  //       el.title.toLowerCase().includes(filterQuery.toLowerCase())
  //     ),
  //   }));
  // };

  // handleCheck = id => {
  //   this.setState(prev => ({
  //     todo: prev.todo.map(el =>
  //       el.id === id ? { ...el, completed: !el.completed } : el
  //     ),
  // todo: prev.todo.map((el) => {
  // 	if (el.id === id) {
  // 		return {
  // 			...el,
  // 			completed: !el.completed,
  // 		}
  // 	} else {
  // 		return el
  // 	}
  // }),
  //   }));
  // };

  render() {
    const { todo, filteredTodo, error, isLoading } = this.state;
    const { createTodo, filterTodo, handleCheck, handleDelete, handleClick } =
      this;
    return (
      <div className="container">
        <button onClick={handleClick}>Show todo</button>
        {/* <button
          className="btn"
          onCLick={() => this.setState({ url: 'todos' })}
        ></button> */}
        <FormCreateTodo createTodo={createTodo} />
        <FormFilterTodo filterTodo={filterTodo} />
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {todo && (
          <ul className="list-group">
            {(filteredTodo ?? todo).map(el => (
              <Todo
                todo={el}
                key={el.id}
                handleDelete={handleDelete}
                handleCheck={handleCheck}
                // updateLocalData={updateLocalData}
              />
            ))}
          </ul>
        )}
      </div>
    );
  }
}
export default TodoList;
