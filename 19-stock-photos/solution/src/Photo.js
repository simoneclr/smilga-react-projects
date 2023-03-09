import React from 'react'

const baseUrl = "https://picsum.photos/id/"
const sizeUrl = "/810/540"

const Photo = ({id}) => {

  const url = baseUrl + id + sizeUrl

  return (
    <article className="photo">
      <img src={url} alt="dog" />
    </article>
  )
}

export default Photo
