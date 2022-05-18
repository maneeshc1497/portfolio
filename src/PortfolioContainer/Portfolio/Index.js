import React from 'react'
import'./Index.css'
import Project from '../Project/Index'

function Index() {
    return (
        <div className='portfolio' id='portfolio'>
            <h2>PORTFOLIO</h2>
            <div className='portfolio__projects'>
                <div className='protfolio__project'>
                <Project projectName='Netflix Clone' projectImg='https://i.pinimg.com/originals/eb/e0/19/ebe0198ccddb315e47a4e6972a8dc975.jpg' projectUrl='https://maneeshc1497.github.io/netflix/' text='Netflix Clone was created with React and CSS. It uses The MovieDB Api to search for movies and when clicked plays the trailer of movie.'/>                
                </div>
                <div className='protfolio__project'>
                <Project projectName='React Social' projectImg='https://w0.peakpx.com/wallpaper/324/684/HD-wallpaper-instagram-pink-logo-pink-neon-lights-creative-pink-abstract-background-instagram-logo-social-network-instagram.jpg' projectUrl='https://maneeshc1497.github.io/reactsocial/' text='React Social was created using react, css and Firebase.it allows users to post their image and comment on other users post.'/>                
                </div>
                <div className='protfolio__project'>
                <Project projectName='Amazon Clone' projectImg='https://wallpapers.com/images/high/purple-neon-light-amazon-logo-utsby1mvmy4lgvzu.jpg' projectUrl='https://clone-a9c96.web.app' text='Amazon clone will allow users to register, login, add products to the shopping cart, remove product from the shopping cart.'/>                
                </div>
                <div className='protfolio__project'>
                <Project projectName='To-Do App' projectImg='https://thumbs.dreamstime.com/b/checklist-tasks-neon-vector-icon-blue-business-background-160360077.jpg' projectUrl='https://maneeshc1497.github.io/todo/' text='Todo was created using react and css, it is a simple website where users can create there tasks for each year and view it.'/>                
                </div>
                <div className='protfolio__project'>
                <Project projectName='DTube' projectImg='https://w0.peakpx.com/wallpaper/57/343/HD-wallpaper-youtube-red-logo-red-brickwall-youtube-logo-brands-youtube-neon-logo-youtube-thumbnail.jpg' projectUrl='https://maneeshc1497.github.io/dtube/' text='DTube was created using react and solidity, Decentralized video sharing and social media platform on Ethereum local Network'/>                
                </div>
                <div className='protfolio__project'>
                <Project projectName='DSocial' projectImg='https://besthqwallpapers.com/Uploads/17-2-2020/122000/thumb2-ethereum-green-logo-4k-green-brickwall-ethereum-logo-cryptocurrency.jpg' projectUrl='https://maneeshc1497.github.io/dsocial/' text='DSocial was created using react and solidity, Decentralized Social media App on Ethereum local Network'/>                
                </div>
            </div>
           
        </div>
    )
}

export default Index
