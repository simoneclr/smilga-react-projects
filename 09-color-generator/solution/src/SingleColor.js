import { useState, useEffect } from 'react'

import rgbToHex, { getLightOrDarkTextOverColor } from './utils'

const SingleColor = ({rgb, weight}) => {

  const [showAlert, setShowAlert] = useState(false)

  const isLightText = getLightOrDarkTextOverColor(...rgb)
  const hexValue = rgbToHex(...rgb)

  useEffect(() => {
    const tid = setTimeout(() => {
      setShowAlert(false)
    }, 3000)

    return () => {
      clearTimeout(tid)
    }
  }, [])

  const handleClick = (e) => {
    setShowAlert(true)
    navigator.clipboard.writeText(hexValue)
  }

  return (
    <article
      onClick={handleClick}
      className={`color ${isLightText ? "color-light" : ""}`} 
      style={{backgroundColor: hexValue}}
    >
      <p className="percent-value">
        {weight}%
      </p>

      <p className="color-value">
        {hexValue}
      </p>

      {showAlert && <p className='alert'>Copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
