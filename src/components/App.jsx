// import Counter from './Counter/Counter';
import Header from './Header/Header';
// import Modal from './Modal/Modal';
import { Component, createContext } from 'react';
// import TodoList from './TodoList/TodoList';
import Products from './Products/Products';
import TodoList from './TodoList/TodoList';

export const GlobalContext = createContext()

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
        <GlobalContext.Provider value={'qwerty'}>
          <Header toggleModal={this.toggleModal} />
          {/* <Counter />
        {this.state.isShowModal && (
          <Modal toggleModal={this.toggleModal}>Text for Modal</Modal>
        )} */}
          <TodoList />
          <Products />
        </GlobalContext.Provider>
      </>
    );
  }
}

export default App;
