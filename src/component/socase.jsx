import React from 'react'
import second from '../../public/img/socase1.jpeg'
import '../css/socase.css'

function socase() {
  return (
    <div id="socase">

      <h1>best burger ideas & traditions from the whole world</h1>
      <p>embark on a globle culinary as we uncovere the rich topaesty of flavoer and tradition thai make each burger unique </p>
      <button>order now</button>
      <div id="img-cap-rap">
        <div className="img-cap">
            <img src="/img/socase1.jpeg" alt="" />
        </div>

        <div className="img-cap">
            <img src="/img/socase2.jpeg" alt="" />
        </div>

        <div className="img-cap">
            <img src="/img/socase3.jpeg" alt="" />
        </div>
        
      </div>


      

    </div>
  )
}

export default socase