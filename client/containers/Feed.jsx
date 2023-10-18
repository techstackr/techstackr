import React, { useState, useEffect } from 'react';
import './../styles/Feed.scss';
import FeedItem from '../components/FeedItem.jsx';
import FilterBox from './FilterBox';

// test data
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

const Feed = (props) => {
  // STATE HOOKS
  // const [feed, updateFeed] = useState(posts);

  const fetchFeed = () => {
    fetch('/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .then(data => updateFeed(data))
    .catch(error => console.log(error));
  };

  // fetch posts and update feed
  // useEffect(fetchFeed, []);

  // filter posts
  const handleFilter = event => {
    const filter = event.target.id;
    const filteredFeed = feedItems.filter(feedItem => feedItem.technology_id === filter);
    updateFeed(filteredFeed);
  };
console.log('here is feeds' + props.feed)
  const feedItems = props.feed.map((item, index) => {
    console.log(item)
    const date = new Date(item.post_timestamp);
    date.setHours(date.getHours() - 4);
    const readableDate = date.toLocaleString();
    return <FeedItem key={`FeedItem-${index}`} item={item} readableDate = {readableDate} />;
  });

  return (
    <div id='feed-container'>
      <FilterBox handleFilter={handleFilter}/>
      {feedItems}
    </div>
  );
};

export default Feed;
