import './App.css'
import Details from './pages/Details'
import Home from './pages/Home'
import {  Outlet, Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [hotels, setHotels] = useState([{}])
  const url = ('src/hoteis.json')


  const getHotels = async()=>{
      const res = await fetch(url)
      const data = await res.json()
      setHotels(data)
     
    }
  
    useEffect(()=>{
      getHotels()
    }, [])
    console.log(hotels);
    
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path= {routes.home} element={<Home hotels={hotels}/>}/>
        <Route path= {routes.details} element={<Details hotels={hotels}/>}/> 
      </Routes>

      
    </>

  )
}

export default App
