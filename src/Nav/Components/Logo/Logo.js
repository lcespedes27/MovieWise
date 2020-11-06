import React from 'react';
import './Logo.css';
import logo from './logo.png'

const Logo = (props)=>{
    
   

    return(
        <div className ="Logo">
        <img className='Logo' src={logo} alt="Movie Wise" onClick={props.clicked}/>
        </div>
    );

};

export default Logo;