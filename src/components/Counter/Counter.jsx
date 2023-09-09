import { Component } from 'react';

class Counter extends Component {
  state = {
    counter: 0,
  };

  handleClickIncrement = () => {
    this.setState(prev => {
      return { counter: prev.counter + 1 };
    });
  };

  handleClickDecrement = () => {
    this.setState(prev => {
      return { counter: prev.counter - 1 };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClickIncrement}>Додати</button>
        <p>{this.state.counter}</p>
        <button onClick={this.handleClickDecrement}>Відняти</button>
      </div>
    );
  }
}

export default Counter;
