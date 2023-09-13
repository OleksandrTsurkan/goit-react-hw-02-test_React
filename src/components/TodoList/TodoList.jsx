import Todo from 'components/Todo/Todo';
import todo from './data.json';
import React, { Component } from 'react';
import FormCreateTodo from 'components/Forms/FormCreateTodo';
import { nanoid } from 'nanoid';
import FormFilterTodo from 'components/FormFilterTodo/FormFilter';

class TodoList extends Component {
  state = {
    todo,
    filteredTodo: null,
  };

  componentDidMount() {
    const localData = localStorage.getItem('todo');
    if (localData) {
      this.setState({ todo: JSON.parse(localData) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.todo.length !== this.state.todo.length) {
      localStorage.setItem('todo', JSON.stringify(this.state.todo));
    }
  }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.todo.length < this.state.todo.length)
  //     return alert("Wow man")
  // }

  handleDelete = id => {
    this.setState(prev => ({
      todo: prev.todo.filter(el => el.id !== id),
    }));
  };
  createTodo = dataByForm => {
    const isAlreadyExist = this.state.todo.find(
      el => el.title === dataByForm.title
    );
    if (isAlreadyExist) return alert('Already Exist');
    const newTodo = {
      ...dataByForm,
      completed: false,
      id: nanoid(),
    };
    this.setState(prev => ({
      todo: [newTodo, ...prev.todo],
    }));
  };

  filterTodo = filterQuery => {
    this.setState(prev => ({
      filteredTodo: prev.todo.filter(el =>
        el.title.toLowerCase().includes(filterQuery.toLowerCase())
      ),
    }));
  };

  handleCheck = id => {
    this.setState(prev => ({
      todo: prev.todo.map(el =>
        el.id === id ? { ...el, completed: !el.completed } : el
      ),
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
    }));
  };

  render() {
    return (
      <div className="container">
        <FormCreateTodo createTodo={this.createTodo} />
        <FormFilterTodo filterTodo={this.filterTodo} />
        <ul className="list-group">
          {(this.state.filteredTodo ?? this.state.todo).map(el => (
            <Todo
              todo={el}
              key={el.id}
              handleDelete={this.handleDelete}
              handleCheck={this.handleCheck}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
