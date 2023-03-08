import React from 'react'

const Photo = ({url}) => {
  return (
    <article className="photo">
      <img src={url} alt="dog" />
    </article>
  )
}

export default Photo
