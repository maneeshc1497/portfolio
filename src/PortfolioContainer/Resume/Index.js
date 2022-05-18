import React from 'react'
import './Index.css'
import photo from '../Images/Maneesh_C.pdf'
function Index() {
  
    return (
        <div className='resume' id='resume'>
            <h2>MY RESUME</h2>
        <div class="row">
          <div class="col-lg-6">
            <h3 class="resume-title">Summary</h3>
            <div class="resume-item pb-0">
              <h4>Maneesh Chandran</h4>
              <p>Creative web developer with 2+ Years of professional experience in developing and optimizing interactive and user friendly websites.</p>
              
            </div>

            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>Senior Secondary (CBSE)</h4>
              <h5>2013-2015</h5>
              <p style={{textAlign:'center'}}>Ansar English School, Perumpilavu, Kerala</p>              
            </div>
            <div class="resume-item">
              <h4>B.Tech</h4>
              <h5>2015 - 2019</h5>
              <p style={{textAlign:'center'}}>Amrita School of Engineering, Kollam, Kerala</p>              
            </div>
          </div>
          <div class="col-lg-6">
            <h3 class="resume-title">Professional Experience</h3>
            <div class="resume-item">
              <h4>Programmer Analyst</h4>
              <h5>2019 - Present</h5>
              <p style={{textAlign:'center'}}>Cognizant Technology Solutions, Coimbatore, Tamil Nadu </p>
              <p> I started at Cognizant in 2019 as a new graduate hire, in the years following I worked in major deliveries and CR management projects in Manufacturing industry.</p>
              <ul>
                <li>Built a Safety stock and Lot size optimization application using .Net framework, which automates the calculation process to find the optimal value.</li>
                <li>Introduced the graphical representation of data in application which improved user experience. </li>
                <li>Performed requirements analysis, design, development and test management for quarterly releases.</li>
                <li>Automated many functionalities involved in website using SSIS and SQL job agent.</li>                
                <li>Managed a team of 2 web developers; trained and educated other web developers.</li>
                <li>Participated in weekly meetings with executives, supported brainstorming and idea generation.</li>                                
              </ul>
              <p></p>
            </div>            
          </div>          
        </div>
        
       <a href={photo} download={photo}> <button type='submit' className='btn-Resume'>Get Resume</button></a>
          
        
        </div>
    )
}

export default Index
