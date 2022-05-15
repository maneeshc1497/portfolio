import React from 'react'
import './Index.css'
function Index(props) {
    return (
        <a href={props.projectUrl} target='_blank'>        
        <div className='project'>
            <div className='project__top'>
                <span>{props.projectName}</span>
            </div>
            <div className='project__bottom'>
                <img src={props.projectImg} alt=''/>
                 <div class="middle">
                    <div class="text">{props.text}</div>
                </div>
            </div>
        </div>    
        </a>
    )
}

export default Index
