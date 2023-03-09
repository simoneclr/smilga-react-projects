import React from 'react'

import { useGlobalContext } from './context'
import Story from './Story'

const Stories = () => {

  const {
    hits,
    isLoading,
    removeStoryById
  } = useGlobalContext()

  return (
    isLoading ? 
    <div className="loading"></div>
    :
    <section className="stories">
      {hits.map(item =>
        <Story
          key={item.objectID}
          {...item}
          handleRemoveClick={() => removeStoryById(item.objectID)}
        />
      )}
    </section>
  )
}

export default Stories
