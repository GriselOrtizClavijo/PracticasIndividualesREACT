import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from "../components/Card"
import { routes } from '../routes'

const Home = ({beers}) => {
 

  return (
    <div className='grid'>
        {beers ?.length 
           ? beers.map((beer) => (
            <Link key={beer.id} to = {`/beer/${beer.id}`} >
                <Card beer={beer}/>
            </Link>))
           : null
        }
    </div>
  )
}

export default Home