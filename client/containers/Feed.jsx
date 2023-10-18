import React, { useState, useEffect } from 'react';
import './../styles/Feed.scss';
import FeedItem from '../components/FeedItem.jsx';
import FilterBox from './FilterBox';

const Feed = props => {
  const { feed, filtersOn, updateFeed, updateFiltersOn } = props;
  console.log('filtersOn:', filtersOn);

  // filter posts
  const handleFilter = event => {
    const filter = Number(event.target.id);
    const filteredFeed = feed.filter(feedItem => {
      if (feedItem.technology_id === filter) {
        return feedItem;
      }
    });
    updateFiltersOn(!filtersOn ? true : false);
    updateFeed(filteredFeed);
  };

  const feedItems = feed.map((item, index) => {
    console.log(item.post_timestamp);
    const date = new Date(item.post_timestamp);
    const date2 = new Date(item.post_timestamp).toLocaleString();
    console.log('date2:', date2);
    date.setHours(date.getHours() - 4);
    const readableDate = date.toLocaleString();
    return (
      <FeedItem
        key={`FeedItem-${index}`}
        item={item}
        readableDate={readableDate}
      />
    );
  });

  return (
    <div id='feed-container'>
      <FilterBox filtersOn={filtersOn} handleFilter={handleFilter} />
      {feedItems}
    </div>
  );
};

export default Feed;
