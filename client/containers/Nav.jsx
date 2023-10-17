import React from 'react';
import './../styles/Nav.scss';

const Nav = () => {
  return (
    <div id='nav-container'>
      <h2>Techstackr</h2>
      <div id='create'>
        <button>+</button>
        <div>Create</div>
      </div>
    </div>
  );
};

export default Nav;
