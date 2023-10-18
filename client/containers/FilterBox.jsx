import React, { useState, useEffect } from 'react';
import './../styles/FilterBox.scss';
import Filter from '../components/Filter.jsx';

const FilterBox = props => {
  const handleFilter = props;

  // STATE HOOKS
  const [filters, updateFilters] = useState([]);

  const fetchFilters = () => {
    fetch('/tech')
    .then(response => response.json())
    .then(data => console.log(data))
    .then(data => updateFilters(data))
    .catch(error => console.log(error));
  };

  // fetch all filters
  useEffect(fetchFilters, []);

  const filterItems = filters.map(item => {
    <div className='filter' onClick={handleFilter}>
      {/*
    Add logo image
    Add name of tech
     */}
    </div>
  }
    
  );

  return <div id='filter-container'>Filter Container{filterItems}</div>;
};

export default FilterBox;
