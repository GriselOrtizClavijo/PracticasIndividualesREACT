import React from 'react'

const Card = ({hotel}) => {
  return (
    <div className ='card'>
    <h2>{hotel.id}</h2> 
    <h2>{hotel.name}</h2>
    <img src={hotel.img} alt='Imagen no disponible'/>
    <h4>{hotel.daily_price}</h4>
    <h4>{hotel.stars} Estrellas </h4>
    <h4>{hotel.city}</h4>
    <h4>{hotel.phone}</h4>


{/* 
    <h2>{data.name}</h2>
    <img src={data.img} alt='Imagen no disponible'/>
    <h4>{data.daily_price}</h4>
    <h4>{data.stars}</h4>
    <h4>{data.city}</h4>
    <h5>{data.description}</h5>
    <h4>{data.wifi}</h4>
    <h4>{data.air-conditioned}</h4>
    <h4>{data.phone}</h4>
    <h4>{data.email}</h4> */}

    </div>
  )
}

export default Card