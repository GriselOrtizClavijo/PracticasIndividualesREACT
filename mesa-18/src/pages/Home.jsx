import React from 'react'
import Card from '../components/Card'
import { Link, Outlet } from 'react-router-dom'

const Home = ({hotels}) => {
    
  return (
    <div>
     
        <h1>Lista de Hoteles</h1>
        <h2> Pulsa sobre cada Card del Hotel para ver detalles</h2>
        { hotels ?.length 
        ? hotels.map((hotel) => ( 
            <Link key={hotel.id}  to={`/details/${hotel.id}`}  >
                <Card hotel={hotel} data-testid="card"/>
            </Link> ))
          : null 
       
        }
       {/* <Outlet/> */}
    </div>
  )
}

export default Home