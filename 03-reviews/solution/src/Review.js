import { useState } from 'react';

import people from './data';

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index, setIndex] = useState(0)

  const {name, job, image, text} = people[index]

  const handlePrevClick = () => {
    setIndex(index > 0 ? index - 1 : people.length - 1)
  }

  const handleNextClick = () => {
    setIndex((index + 1) % people.length)
  }

  const handleRandomClick = () => {
    const r = Math.floor(Math.random() * people.length)
    setIndex(r !== index ? r : ((r + 1) % people.length))
  }

  return (
    <article className='review'>
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />

        <span className="quote-icon">
          <FaQuoteRight/>
        </span>
      </div>

      <h4 className="author">
        {name}
      </h4>

      <p className="job">
        {job}
      </p>

      <p className="info">
        {text}
      </p>

      <div className="button-container">
        <button onClick={handlePrevClick} className="prev-btn">
          <FaChevronLeft/>
        </button>

        <button onClick={handleNextClick} className="next-btn">
          <FaChevronRight/>
        </button>
      </div>

      <button onClick={handleRandomClick} className="random-btn">
        Surprise me
      </button>
    </article>
  );
};

export default Review;
