import React from 'react'
import'./Index.css'
import Project from '../Project/Index'

function Index() {
    return (
        <div className='portfolio' id='portfolio'>
            <h2>PORTFOLIO</h2>
            <div className='portfolio__projects'>
                <div className='protfolio__project'>
                <Project projectName='Netflix Clone' projectImg='https://i.pinimg.com/originals/eb/e0/19/ebe0198ccddb315e47a4e6972a8dc975.jpg' projectUrl='https://maneeshc1497.github.io/netflix/' text='Netflix Clone created using React- Instead of playing movies it will fetch the trailer from youtube of movie and shows you.'/>                
                </div>
                <div className='protfolio__project'>
                <Project projectName='React Social' projectImg='https://w0.peakpx.com/wallpaper/324/684/HD-wallpaper-instagram-pink-logo-pink-neon-lights-creative-pink-abstract-background-instagram-logo-social-network-instagram.jpg' projectUrl='https://maneeshc1497.github.io/reactsocial/' text='React Social is similar to instagram, you can post an image and other users can comment below each post'/>                
                </div>
                <div className='protfolio__project'>
                <Project projectName='Amazon Clone' projectImg='https://wallpapers.com/images/high/purple-neon-light-amazon-logo-utsby1mvmy4lgvzu.jpg' projectUrl='https://clone-a9c96.web.app' text='Amazon Clone is created using React similar to Amazon user can login and add items to cart and shop'/>                
                </div>
                <div className='protfolio__project'>
                <Project projectName='To-Do App' projectImg='https://thumbs.dreamstime.com/b/checklist-tasks-neon-vector-icon-blue-business-background-160360077.jpg' projectUrl='https://maneeshc1497.github.io/todo/' text='Todo is simple website where users can create there tasks for each year and view it.'/>                
                </div>
                <div className='protfolio__project'>
                <Project projectName='DTube' projectImg='https://w0.peakpx.com/wallpaper/57/343/HD-wallpaper-youtube-red-logo-red-brickwall-youtube-logo-brands-youtube-neon-logo-youtube-thumbnail.jpg' projectUrl='https://maneeshc1497.github.io/dtube/' text='DTube is created using react and solidity, this is decentralized app for Youtube.'/>                
                </div>
                <div className='protfolio__project'>
                <Project projectName='DSocial' projectImg='https://besthqwallpapers.com/Uploads/17-2-2020/122000/thumb2-ethereum-green-logo-4k-green-brickwall-ethereum-logo-cryptocurrency.jpg' projectUrl='https://maneeshc1497.github.io/dsocial/' text='DSocial is created using react and solidity, this is decentralized app for Instagram.'/>                
                </div>
            </div>
           
        </div>
    )
}

export default Index
