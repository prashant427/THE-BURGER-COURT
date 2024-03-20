import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./navbar";
import Hero from './component/home'
import Menu from './component/menu'
// import Socase from './component/socase'
import Services from './component/services'
import About from './component/about'
import Contact from './component/contact'
import Footer from './footer'

import './App.css'
import './css/respons.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Hero/>}/>
    {/* <Route path='/' element={<Socase/>}/> */}
    <Route path='/menu'element={<Menu/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>


    

    </Routes>
    <Footer/>

    </BrowserRouter>


    
    </>
  )
}


// rafres site 
// https://mir-s3-cdn-cf.behance.net/project_modules/1400/5bb863167691297.642d5515a569b.jpg

export default App
