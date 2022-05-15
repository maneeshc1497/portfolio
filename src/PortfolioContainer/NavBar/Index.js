import React ,{useState,useEffect} from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {Nav, Navbar} from "react-bootstrap"
import './Index.css'

function Naviga() {
    const [show, setShow]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",() =>{
            if(window.scrollY >10 ){
                setShow(true);
            }else{
                setShow(false);
            }
        });
        return () =>{
            window.removeEventListener("scroll");
        } ;       
    },[]);
    return(
        <div className={`nav ${show && "nav_black"}`}>
           <div>
           <Navbar  sticky="top" expand="lg">
                <Navbar.Toggle  />
                <Navbar.Collapse>
                    <Nav>
                                <Nav.Link href='#home' style={{color:'whitesmoke'}} >HOME</Nav.Link>
                                <Nav.Link href='#about' style={{color:'whitesmoke'}}>ABOUT</Nav.Link>
                                <Nav.Link href='#resume' style={{color:'whitesmoke'}}>RESUME</Nav.Link>
                                <Nav.Link href='#portfolio' style={{color:'whitesmoke'}}>PORTFOLIO</Nav.Link>                                
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div> 
            
            
            
        </div>
    );
}

export default Naviga
