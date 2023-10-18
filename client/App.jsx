import React, { useState, useEffect } from 'react';
import './styles/App.scss';
import Nav from './containers/Nav';
import FilterBox from './containers/FilterBox';
import Feed from './containers/Feed';
import Popup from './components/Popup';

const App = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [feed, updateFeed] = useState([]);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const response = await fetch('/posts');
        const data = await response.json();
        updateFeed(data.reverse());
      } catch (err) {
        console.log('error');
      }
    };
    fetchAll();
  }, []);

  return (
    <div id='app'>
      <div id='app-container'>
        <Nav togglePopup={togglePopup} />
        <div id='main-container'>
          <Feed feed={feed} updateFeed={updateFeed} />
        </div>
        {isPopupVisible && (
          <Popup
            togglePopup={togglePopup}
            feed={feed}
            updateFeed={updateFeed}
          />
        )}
      </div>
    </div>
  );
};

export default App;
