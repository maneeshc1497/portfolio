import React from 'react'
import Social from '../SocialMedia/Index'
import './Index.css'
function Index() {
    return (
        <div className='footer'>
            <div class="copyright">
        © Copyright <strong><span>Maneesh C</span></strong>. All Rights Reserved
      </div>
      <div class="credits">        
        Designed by <a href="#">Maneesh Chandran</a> Using React        
      </div>
      <Social />
        </div>
    )
}

export default Index 
