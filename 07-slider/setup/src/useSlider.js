import { useState } from "react"

const useSlider = (size) => {
	const [activeSlideIndex, setActiveSlideIndex] = useState(0)

	const prevSlide = () => {
    setActiveSlideIndex(activeSlideIndex => (activeSlideIndex + size - 1) % size)
  }

  const nextSlide = () => {
    setActiveSlideIndex(activeSlideIndex => (activeSlideIndex + 1) % size)
  }

	return {
		activeSlideIndex,
		prevSlide,
		nextSlide
	}
}

export default useSlider
