import React from 'react'
import './css/footer.css'
function footer() {
  return (
    <div id="footer-contaner">
      <div id="info-box">
        <div id="info-card">

          <h1>address </h1>
          <p>30 no. rode rohini delhi <br></br>
              new delhi 110083 <br></br>
              India

           </p>

        </div>
        <div id="info-card">

        <h1>book a table</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam repudiandae nobis fuga voluptates, quasi vel!</p>

        </div>
        <div id="info-card">
          <h1>opening hours</h1>
          <p>monday-friday : 8am-4pm</p>
          <p>saturday-sunday: 9am-8pm</p>
        </div>
        <div id="info-card">
          <h1>newesletter</h1>
          <p>subsucribe to the weekly newsletter for all the letter update</p>

          <div id="newesletter-box">
            <input type="email" placeholder='your email' />
            <button>subsucribe</button>
          </div>

        </div>
      </div>
      <div id="copywrite-box">
          <h1>THE BURGER COURT</h1>
          <p>copywrite@2024 THE BURGER COURT ALL Rights reserved</p>


      </div>

    </div>
  )
}

export default footer