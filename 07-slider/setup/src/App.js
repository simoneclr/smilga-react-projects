import { useEffect } from 'react';

import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import data from './data';

import ReviewCard from './ReviewCard';

import useSlider from './useSlider';

function App() {

  const {
    activeSlideIndex: activeReview,
    prevSlide,
    nextSlide
  } = useSlider(data.length)

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

  // Autoplay
  useEffect(() => {
    const tid = setTimeout(() => {
      nextSlide()
    }, 5000)

    return () => {
      clearTimeout(tid)
    }
  }, [activeReview, nextSlide])

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
          <ReviewCard
            key={review.id}
            sliderClassName={getSliderClassName(i)}
            {...review} 
          />
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
