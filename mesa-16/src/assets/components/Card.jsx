import React from 'react'

const Card = ({beer}) => {
  return (
    <div className='card'>
        <h3>{beer.name}</h3>
        <p>{beer.tagline}</p>
        <img src={beer.image_url} alt="beer-detail" />
    </div>
  )
}

export default Card