import React, { useState, useEffect } from "react";
import "./../styles/Popup.scss";
import { FaStar } from "react-icons/fa";

const Popup = (props) => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [technology, setTechnology] = useState("");
  const [icons, setIcon] = useState(null);
  const [userText, setUserText] = useState('')
  const [techID, setTechID] = useState(null)

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  };
  
  const setInputValue = (event) => {
    event.preventDefault();
    console.log("hello");
    console.log(event);
    setTechnology(event.target.value);
  };
  const setTextValue = (event) => {
    event.preventDefault();
    console.log("hello");
    console.log(event);
    setUserText(event.target.value);
  };

  const submitPost = async () => {
    console.log('heyy!!!')
    const response = await fetch('/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON'
        },
        body:JSON.stringify({
          user_id: 1,
          post_content: userText,
          user_rating: rating,
          technology_id: techID
        })

    })
    const data = await response.json()
    let newFeed = [...props.feed]
    newFeed.unshift(data[data.length - 1])
    console.log('this is' + data)
    props.updateFeed(newFeed)
    props.togglePopup()
  }

  return (
    <div className="popup">
      <span>Username</span>
      <form>
        <textarea className="input" type="text" value = {userText} onChange = {setTextValue} />
      </form>
      {isFormVisible && (
        <form>
          <input
            className="input2"
            type="text"
            value={technology}
            onChange={setInputValue}
          />
          <button
            className="submit2"
            onClick={async (e) => {
              e.preventDefault();
              const response = await fetch(`/tech/icon/${technology}`);
              const data = await response.json();
              setIcon(data.icon);
              setTechID(data.technology_id)
              console.log(data.technology_id);
            }}
          >
            Submit
          </button>
        </form>
      )}
      <button className="add" onClick={toggleForm}>
        Technologies
      </button>

      {icons ? (
        <img src={icons} style={{ width: "4vw", height: "4vh" }} />
      ) : null}

      <div className="stars">
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() =>  setRating(currentRating)}
              />
              <FaStar
                className="star"
                size={20}
                color={
                  currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                }
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>

      <button className="submit" onClick = {submitPost}>Submit</button>
    </div>
  );
};

export default Popup;
