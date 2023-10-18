import React, { useState, useEffect } from 'react';
import './styles/App.scss';
import Nav from './containers/Nav';
import FilterBox from './containers/FilterBox';
import Feed from './containers/Feed';
import Popup from './components/Popup';

const App = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [feed, updateFeed] = useState([]);
  const [filtersOn, updateFiltersOn] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const resetFilters = () => {
    // TODO: if user clicks outside filter area, reset feed to all posts
    if (filtersOn) updateFiltersOn(false);
  };

  //TODO: add handler - if user clicks another filter, add additional posts from that filter

  //TODO: toggle filter on and off

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const response = await fetch('/posts');
        const data = await response.json();
        console.log(data);
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
          <Feed
            feed={feed}
            filtersOn={filtersOn}
            updateFeed={updateFeed}
            updateFiltersOn={updateFiltersOn}
          />
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
