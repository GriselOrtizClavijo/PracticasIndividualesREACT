import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { routes } from '../routes'

//Esta pagina renderizará cada bebida de manera individual

const Beer = ({beers}) => {

    const params = useParams()
    const beerSelect = beers.find((beer) => params.id == beer.id )
    const navigate = useNavigate();
 

  return (
    <div>
  
        <h2>Cerveza número...{beerSelect.id}</h2>
        <div className='card'>
            <img src={beerSelect.image_url} alt="beer-detail" />
            <p>{beerSelect.tagline}</p>
            <p>{beerSelect.description}</p>
            <p>{beerSelect.brewers_tips} </p>
        </div>
        <button onClick={() => navigate(routes.home)}>Go back</button>
    </div>

  )
}

export default Beer