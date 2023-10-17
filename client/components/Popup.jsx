import React, { useState, useEffect } from 'react';
import './../styles/Popup.scss';
import { FaStar } from 'react-icons/fa';

const Popup = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <div className='popup'>
      <span>username</span>
      <form>
        <input className='input' type='text' />
      </form>
      {isFormVisible && (
        <form>
          <input className='input2' type='text' />
          <button className='submit2'>submit</button>
        </form>
      )}
      <button className='add' onClick={toggleForm}>
        Technologies
      </button>

    <div className='stars'>
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label>
            <input 
            type='radio' 
            name='rating'
            value={currentRating} 
            onClick={() => setRating(currentRating)}
            />
            <FaStar 
            className='star' 
            size={20} 
            color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
            onMouseEnter={() => setHover(currentRating)}
            onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>

      <button className='submit'>submit</button>
    </div>
  );
};

export default Popup;
