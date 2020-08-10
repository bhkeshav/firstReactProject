import React from 'react';
import { BrowserRouter, NavLink, Link } from 'react-router-dom';
import style from './header.css';
import Router from './menubar/router';

const Logo =() =>{
    return (
        <>
        <Link to="/" className={style.logo}>
            <img alt="logo" src ="photos/agriworld.png" type="image/png" />                
        </Link>                   
        </>
    )
}

const NavBar = () =>{
    return(
        <>
        <div>{ Logo() }</div>
        
            <BrowserRouter >  
            <div className={style.body}>                             
                <NavLink to ="/home">Home</NavLink>
                <NavLink to ="/contact-us">Contact-us</NavLink>
                <NavLink to ="/about">About</NavLink>
                <NavLink to ="/message">Message</NavLink>
                <NavLink to ="/feature">Feature</NavLink> 
                </div> 
                <Router />                                         
            </BrowserRouter>            
                      
       </>
    )
}
export {
    NavBar, Logo
}