import React from 'react'
import './Index.css'
import photo from '../Images/J.pdf'
function Index() {
  
    return (
        <div className='resume' id='resume'>
            <h2>MY RESUME</h2>
        <div class="row">
          <div class="col-lg-6">
            <h3 class="resume-title">Sumary</h3>
            <div class="resume-item pb-0">
              <h4>Maneesh Chandran</h4>
              <p>Passionate Software Developer with 2+ Years of professional experience building web applications</p>
              
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
              <p> Cognizant is a Fortune 500 company in the US. As a Programmer Analyst my responsibilities include:</p>
              <ul>
                <li>Built a Safety stock and Lot size optimization application using .net framework, which automates the calculation process of safety stock and lot size and provides optimal value.</li>
                <li>Introduced graphical representation of data in application which improved user experience. </li>
                <li>Using SSIS and SQL job agent, automated the value updation done by users which reduced user efforts to a large extent.</li>
                <li>Involved in Design, Development and Testing of Web Applications using ASP.NET, XML, Ajax, SQL Server, C# and .NET Framework.</li>                
                <li>Responsible for all project life cycle phases, from specifications and coding through deployment, testing,debugging, documentation, and maintenance.</li>
                <li>Designing back-end database structures for web applications or websites using SQL as well as testing their compatibility with different web browsers and newersoftware or OS versions.</li>                
                <li>Provided many innovative ideas and have participated in Hackathons.</li>
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
