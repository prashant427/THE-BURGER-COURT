import React from 'react'
import '../css/services.css'

function services() {
  return (
    <div id="services">
        <h1>our services</h1>

        <div id="card-wrap">


          <div className="card">

            <div id="top">
              <img src="/img/fast food03.svg" alt="" />
            </div>
            <h1>quality food</h1>
            <p>Everthing you order made by best chefs and qulity checked before to reached your table</p>

          </div>


          <div className="card">

            <div id="top">
              <img src="/img/sev02-Delivery-bro.svg" alt="" />
            </div>
            <h1>farst delevery</h1>
            <p>Everthing you order will be quickly delevered to your door</p>

          </div>


          <div className="card">

            <div id="top">
              <img src="/img/serv01-Chef.svg" alt="" />
            </div>
            <h1>original recipes</h1>
            <p>poco is an international chain of family restourants</p>

          </div>
        </div>
    </div>
  )
}

export default services