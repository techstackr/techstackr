import React, { useState, useEffect } from 'react';
import './../styles/FilterBox.scss';
import Filter from '../components/Filter.jsx';

const FilterBox = () => {
  // STATE HOOKS
  const [fetchedFilters, updateFetchedFilters] = useState([]);

  // useEffect
  // fetch filters by most posts and update feedItems state
  useEffect(() => {
    fetch('/api/tech/allTech')
      .then(response => response.json())
      .then(data => updatedFetchedFilters(data))
      .catch(error => console.log(error));
  }, []);

  const filterItems = fetchedFilters.map(item => <Filter item={item} />);

  return <div id='filter-container'>Filter Container{filterItems}</div>;
};

export default FilterBox;
