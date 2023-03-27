import React from 'react'
import {routes} from '../routes'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to = {routes.home}>Home</Link>
        <Link to = {routes.contacto}>Contacto</Link>
        <Link to= {routes.beer}>Beer</Link>

    </nav>
  )
}

export default Navbar