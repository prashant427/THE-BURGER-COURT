import React from 'react'
import './css/navbar.css'
import { Outlet, Link } from "react-router-dom";
function navbar() {
  return (
    <>
        <div id="navbox">
        <div id="logo">
            burger court
        </div>
        <div id="navbar">
            <Link to="/"><h4>home</h4></Link>
            <Link to="/menu"><h4>menu</h4></Link>
            <Link to="/services"><h4>services</h4></Link>
            <Link to="/about"><h4>about</h4></Link>
            <Link to="/contact"><h4>contact</h4></Link>
        </div>
        <div id="login-icon">
            <div id="registration">
            <i className="ri-user-line"></i>
            </div>
            <div id="login">
            <i className="ri-login-circle-line"></i>
            </div>
            <div id="cart">
            <i className="ri-shopping-cart-2-line"></i>
            </div>
        </div>

        <div id="hamburger">
        <i class="ri-menu-3-line"></i>
        </div>

        </div>
    </>
  )
}

export default navbar