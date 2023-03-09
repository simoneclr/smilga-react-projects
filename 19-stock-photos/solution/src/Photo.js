import React from 'react'

const baseUrl = "https://picsum.photos/id/"
const sizeUrl = "/810/540"

const Photo = ({id, author, url: originalUrl}) => {

  const url = baseUrl + id + sizeUrl

  return (
    <article className="photo">
      <img src={url} alt="dog" />

      <div className="photo-info">
        <div>
          <h4>{author}</h4>
          <a href={originalUrl}>
            View on unsplash
          </a>
        </div>

        
      </div>
    </article>
  )
}

export default Photo
