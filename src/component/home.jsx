import React from 'react'
import Menu from './menu'
import Socase from './socase'
import Services from './services'
import About from './about'
import Contact from './contact'
import '../css/home.css'



function home() {
  return (
    <div id="main">

        <div id="hero">
            <h1>the burger court</h1>
            {/* <h4>Are you ready to treat yourself to this awesome madness of deliciousness</h4> */}
            <h4>You can always cheat with some burgers.</h4>
            <button>book table</button>

        </div>
        <Socase/>
        <Menu/>
        <Services/>
        <About/>
        <Contact/>



    </div>
  )
}

export default home