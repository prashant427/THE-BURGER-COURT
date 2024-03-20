import React from 'react'
import '../css/menu.css'
function menu() {
  return (
    <div id="menu-contaner">

        <div id="menu">
            <h1>Menu</h1>
            <div id="menu-sec">
              
              <h2 className='productName'>burger</h2>
              <div className="itemlist">

                <div className="item">
                  <div className="itemname">
                    <div className="name">
                    sweet salt burger
                    </div>
                    <div className="discpt">corn chip , tamato, spicey</div>
                      
                  </div>
                  <div className="itemprice"> 50 rup </div>
                </div>

                <div className="item">
                  <div className="itemname">
                    <div className="name">
                    double patty burger
                    </div>
                    <div className="discpt">crispy, tamato, spicey, </div>
                      
                  </div>
                  <div className="itemprice"> 60 rup </div>
                </div>

                <div className="item">
                  <div className="itemname">
                    <div className="name">
                    spical creamy burger
                    </div>
                    <div className="discpt">cream , paneer, capcicam, spicey</div>
                      
                  </div>
                  <div className="itemprice"> 80 rup </div>
                </div>

              </div>
            </div>

            <div id="menu-sec">
              
              <h2 className='productName'>shakes</h2>
              <div className="itemlist">

                <div className="item">
                  <div className="itemname">
                    <div className="name">
                    mango shake
                    </div>
                    <div className="discpt">fresh mangos , cream</div>
                      
                  </div>
                  <div className="itemprice"> 20 rup </div>
                </div>

                <div className="item">
                  <div className="itemname">
                    <div className="name">
                    bannana shake
                    </div>
                    <div className="discpt">fresh bannana , cream</div>
                      
                  </div>
                  <div className="itemprice"> 20 rup </div>
                </div>

                <div className="item">
                  <div className="itemname">
                    <div className="name">
                    spical chocolate shake
                    </div>
                    <div className="discpt">chocolate syrup , chocolate bar toping , ruabja</div>
                      
                  </div>
                  <div className="itemprice"> 30 rup </div>
                </div>

              </div>
            </div>



            <div id="menu-sec">
              
              <h2 className='productName'>Ice cream</h2>
              <div className="itemlist">
                <div className="item">
                  <div className="itemname">
                    <div className="name">
                    chocolate ice cream
                    </div>
                    <div className="discpt">freash cream , hershey</div>
                      
                  </div>
                  <div className="itemprice"> 20 rup </div>
                </div>

                <div className="item">
                  <div className="itemname">
                    <div className="name">
                    vanilla ice cream
                    </div>
                    <div className="discpt">freash cream , hershey</div>
                      
                  </div>
                  <div className="itemprice"> 20 rup </div>
                </div>

                <div className="item">
                  <div className="itemname">
                    <div className="name">
                    kaser pista ice cream
                    </div>
                    <div className="discpt">freash cream , hershey</div>
                      
                  </div>
                  <div className="itemprice"> 20 rup </div>
                </div>

              </div>
            </div>


            </div>
        

    </div>
  )
}

export default menu