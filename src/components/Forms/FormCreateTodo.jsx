import React, { Component } from 'react';

const INITIAL_STATE = {
  title: '',
  description: '',
  isValid: true,
};

export class FormCreateTodo extends Component {
  state = INITIAL_STATE;

  //   handleChangeTitle = ({ target: { value, name } }) => {
  //       this.setState({ title: value });
  //       console.log('first', name);
  //   };

  //   handleChangeDescription = ({ target: { value } }) => {
  //     this.setState({ description: value });
  //   };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.title || !this.state.description)
      return this.setState({ isValid: false });
    this.props.createTodo(this.state);
    this.setState(INITIAL_STATE);
  };

  render() {
    // console.log(this.state);
    return (
      <form className="mb-3" onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputTodo" className="form-label">
            Todo title
          </label>
          <input
            name="title"
            type="text"
            onChange={this.handleChange}
            className={`form-control ${!this.state.isValid && 'is-invalid'}`}
            id="exampleInputTodo"
            value={this.state.title}
          />
          <div className="invalid-feedback">Please choose a username.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputTodoDescription" className="form-label">
            Todo description
          </label>
          <input
            name="description"
            type="text"
            onChange={this.handleChange}
            className="form-control"
            id="exampleInputTodoDescription"
            value={this.state.description}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create todo
        </button>
      </form>
    );
  }
}

export default FormCreateTodo;
