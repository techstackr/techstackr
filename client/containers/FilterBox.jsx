import React, { useState, useEffect } from 'react';
import './../styles/FilterBox.scss';
import Filter from '../components/Filter.jsx';

const FilterBox = props => {
  const { handleFilter } = props;

  // STATE HOOKS
  const [filters, updateFilters] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const response = await fetch('/tech');
        const data = await response.json();
        updateFilters(data.reverse());
      } catch (err) {
        console.log('error');
      }
    };
    fetchAll();
  }, []);

  const filterItems = filters.map(item => {
    return (
      <div className='filter' onClick={handleFilter}>
        <img className='filter-img' src={item.icon}></img>
      </div>
    );
  });

  return <div id='filter-container'>{filterItems}</div>;
};

export default FilterBox;
