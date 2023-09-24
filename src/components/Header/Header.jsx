import { useState } from 'react';

const Header = ({ toggleModal }) => {
  return (
    <nav className="navbar bg-dark mb-3">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-success">Navbar</span>
        <button onClick={toggleModal} className="btn btn-outline-success">
          Open Modals
        </button>
      </div>
    </nav>
  );
};

export default Header;
