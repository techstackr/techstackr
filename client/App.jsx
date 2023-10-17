import React from 'react';
import './styles/App.scss';
import Nav from './containers/Nav';
import FilterBox from './containers/FilterBox';
import Feed from './containers/Feed';

const App = () => {
  return (
    <div id='app'>
      <div id='app-container'>
        <Nav />
        <div id='main-container'>
          <Feed />
        </div>
      </div>
    </div>
  );
};

export default App;
