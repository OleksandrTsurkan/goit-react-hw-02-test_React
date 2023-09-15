// import Counter from './Counter/Counter';
import Header from './Header/Header';
// import Modal from './Modal/Modal';
import { Component } from 'react';
// import TodoList from './TodoList/TodoList';
import Products from './Products/Products';

export class App extends Component {
  state = {
    isShowModal: false,
  };

  toggleModal = () => {
    this.setState(prev => ({ isShowModal: !prev.isShowModal }));
  };

  

  render() { 
    return (
      <>
        <Header toggleModal={this.toggleModal} />
        {/* <Counter />
        {this.state.isShowModal && (
          <Modal toggleModal={this.toggleModal}>Text for Modal</Modal>
        )} */}
        {/* <TodoList /> */}
        <Products/>
      </>
    );
  }
}

export default App;
