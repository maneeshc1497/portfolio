import React from 'react'
import NavBar from '../NavBar/Index'
import Social from '../SocialMedia/Index'
import me from '../Images/me2.png'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './Index.css'

function Index() {
    return (
        <div className='home' id='home'>
            <NavBar/>
            <div className='home-content'>
                <div className='home-header'>
                    <div className='home-flex'>
                        <h4>I'm Maneesh Chandran</h4>
                        <div className='home-header-designation'>
                            <a>Software Developer</a>                            
                        </div>                         
                         <Social/> 
                        <a href='#about' className='down-arrow'><svg stroke="rgba(100,252,113, 0.5)" fill="rgba(100,252,113, 0.5)" stroke-width="0" viewBox="0 0 1024 1024" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg></a>                      
                       
                    </div>                                           
                </div> 
               
                   
            </div>             
        </div>
    )
}

export default Index
