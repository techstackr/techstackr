import React, { useState, useEffect } from 'react';
import './styles/App.scss';
import Nav from './containers/Nav';
import FilterBox from './containers/FilterBox';
import Feed from './containers/Feed';
import Popup from './components/Popup';

const App = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div id='app'>
      <div id='app-container'>
        <Nav togglePopup={togglePopup} />
        <div id='main-container'>
          <FilterBox />
          <Feed />
        </div>
          {isPopupVisible && <Popup />}
      </div>
    </div>
  );
};

export default App;
