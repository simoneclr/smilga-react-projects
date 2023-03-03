import { useState, useEffect } from 'react';

import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

import data from './data';

function App() {

  const [activeReview, setActiveReview] = useState(0)

  // Cumputes the appropriate class name for each review in the slider
  // Based on its index and the activeReview index
  const getSliderClassName = (i) => {
    if (i === activeReview) {
      return "activeSlide"
    } else if ((i + 1) % data.length === activeReview) {
      return "lastSlide"
    } else {
      return "nextSlide"
    }
  }

  const prevSlide = () => {
    setActiveReview(activeReview => 
      activeReview > 0 ? activeReview - 1 : data.length - 1
    )
  }

  const nextSlide = () => {
    setActiveReview(activeReview => (activeReview + 1) % data.length)
  }

  // Autoplay
  useEffect(() => {
    const tid = setTimeout(() => {
      nextSlide()
    }, 5000)

    return () => {
      clearTimeout(tid)
    }
  }, [activeReview])

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>
          Reviews
        </h2>
      </div>

      <div className="section-center">

        {data.map((review, i) =>
          <article key={review.id} className={getSliderClassName(i)}>
            <img src={review.image} alt={review.name} className="person-img" />
            <h4>{review.name}</h4>
            <p className="title">{review.title}</p>
            <p className="text">
              {review.quote}
            </p>
            <FaQuoteRight className='icon' />
          </article>
        )}

        <button 
          onClick={prevSlide}
          className="prev"
        >
          <FiChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="next"
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App;
