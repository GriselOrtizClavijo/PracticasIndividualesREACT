import { Outlet} from "react-router-dom"
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Beer from './assets/pages/Beer'
import Contacto from './assets/pages/Contacto'
import Home from './assets/pages/Home'
import {routes} from './assets/routes'
import Navbar from "./assets/components/Navbar"
import { useState } from "react"
import { useEffect } from "react"

function App() {
  const [beers, setBeers] = useState([{}])

  const getBeers = async()=>{
    const res = await fetch("https://api.punkapi.com/v2/beers")
    const data = await res.json()
    setBeers(data)
  }

  useEffect(()=>{
    getBeers()
    
  }, [])


  return (
   <div>
      <h1>Mas que solo bebidas, festejemos el encuentro.</h1> 
      <Navbar/>

      <Routes>
        <Route path={routes.home} element={<Home beers={beers}/>} />
        <Route path={routes.contacto} element={<Contacto/>}/>
        <Route path={routes.beer} element={<Beer beers={beers}/>} />
      </Routes>
   </div>
  )
}

export default App
