import React, { useState, useEffect } from 'react';
import './../styles/FilterBox.scss';
import Filter from '../components/Filter.jsx';

const FilterBox = () => {
  // STATE HOOKS
  const [fetchedFilters, updateFetchedFilters] = useState([]);

  // useEffect
  // fetch filters by most posts and update feedItems state

  const filterItems = fetchedFilters.map(item => <Filter item={item} />);

  return <div id='filter-container'>Filter Container{filterItems}</div>;
};

export default FilterBox;
