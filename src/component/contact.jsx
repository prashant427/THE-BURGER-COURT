import React from 'react'
import '../css/contact.css'

function contact() {
  return (
    <div id='contact-full'>
      <div id="contact-wrap">
      <h1>book your table</h1>
      <div id="contact">
        <div id="form">
                      
              <input type="text" className='small-input' name="first-name" id="first-name" placeholder='first name ' />
              <input type="text" className='small-input' name="last-name" id="last-name" placeholder='last name ' />
              <input type="email" name="email" id="email" placeholder='email' />
              <input type="number" name="phone" id="phone" placeholder='phone no.' />
              <input type="date" className='small-input' name="date" id="date" />
              <input type="time" className='small-input' />
              <select name="people" id="people">
                <option value="1">single</option>
                <option value="2">couple</option>
                <option value="3">friends(3-6)</option>
                <option value="4">family(4-10)</option>
                <option value="5">grop(more then 10)</option>


              </select>
                <button>submit</button>

          



        </div>
        <div id="map">

        <iframe width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20delhi+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>  <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=99f24cafdbe213527374884438ad5809cb455691'></script>

        <div id="social-icone">
        <i class="ri-facebook-fill"></i>

        <i class="ri-instagram-line"></i>
        <i class="ri-linkedin-line"></i>
        <i class="ri-twitter-line"></i>
        </div>

        </div>
      </div>

      </div>
    </div>
  )
}

export default contact