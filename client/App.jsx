import React, { useState, useEffect } from 'react';
import './styles/App.scss';
import Nav from './containers/Nav';
import FilterBox from './containers/FilterBox';
import Feed from './containers/Feed';
import Popup from './components/Popup';
// const posts = [
//   {
//     post_id: 1,
//     user_id: 1,
//     post_content: 'test post here',
//     user_rating: 4,
//     technology_id: 2,
//   },
//   {
//     post_id: 2,
//     user_id: 2,
//     post_content: `here's another post`,
//     user_rating: 5,
//     technology_id: 4,
//   },
// ];
const App = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };
  const [feed, updateFeed] = useState([]);
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const response = await fetch('/posts')
        const data = await response.json();
        updateFeed(data.reverse())
      } catch(err) {
        console.log('error')
      }
    }
    fetchAll();
  }, [])

  return (
    <div id='app'>
      <div id='app-container'>
        <Nav togglePopup={togglePopup} />
        <div id='main-container'>
          <Feed feed = {feed} updateFeed = {updateFeed} />
        </div>
          {isPopupVisible && <Popup togglePopup = {togglePopup} feed = {feed} updateFeed = {updateFeed} />}
      </div>
    </div>
  );
};

export default App;
