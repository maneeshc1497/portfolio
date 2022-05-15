import React from 'react'
import'./Index.css'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
function Index() {
    return (
        <div className='about' id='about'>
            <h2>ABOUT ME</h2>
        <div className='card'>            
            <div className='row'>
                <div className='image col-lg-4 d-flex align-items-stretch justify-content-center justify-content-lg-start'></div>
                <div class="col-lg-8 d-flex flex-column align-items-stretch">
            <div class="content">
              <div class="details">
                <div >
                  <ul>
                    <li><i class="fa fa-chevron-right"></i> <strong>Name:</strong> <span>Maneesh Chandran</span></li>                    
                    <li><i class="fa fa-chevron-right"></i> <strong>Phone:</strong> <span>+91 9747323387</span></li>
                    <li><i class="fa fa-chevron-right"></i> <strong>City:</strong> <span>Thrissur, Kerala</span></li>
                  </ul>
                </div>
                <div >
                  <ul>
                    <li><i class="fa fa-chevron-right"></i> <strong>Age:</strong> <span>25</span></li>
                    <li><i class="fa fa-chevron-right"></i> <strong>Email:</strong> <span>maneeshc1497@gmail.com</span></li>  
                    <li><i class="fa fa-chevron-right"></i> <strong>Degree:</strong> <span>BTech</span></li>
                                      
                  </ul>
                </div>
              </div>
               

            <div class="skill-content">
            <div className='skill-one'>
            <div class="progress">
                <span class="skill">HTML <i class="val">100%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}></div>
                </div>
              </div>

              <div class="progress">
                <span class="skill">CSS <i class="val">90%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: '90%'}}></div>
                </div>
              </div>

              <div class="progress">
                <span class="skill">JavaScript<i class="val">90%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '90%'}}></div>
                </div>
              </div>
              <div class="progress">
                <span class="skill">Asp.net MVC<i class="val">80%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}></div>
                </div>
              </div>
            </div>
            <div className='skill-two'>
            <div class="progress">
                <span class="skill">SQL<i class="val">80%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}></div>
                </div>
              </div>
              <div class="progress">
                <span class="skill">React<i class="val">70%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}}></div>
                </div>
              </div>
              <div class="progress">
                <span class="skill">Solidity<i class="val">55%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '55%'}}></div>
                </div>
              </div>
              <div class="progress">
                <span class="skill">Android Studio<i class="val">50%</i></span>
                <div class="progress-bar-wrap">
                  <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '50%'}}></div>
                </div>
              </div>
            </div> 
              
            </div>  

            </div>
            </div>
        </div>
        
        </div>
        </div>
        
    )
}

export default Index
