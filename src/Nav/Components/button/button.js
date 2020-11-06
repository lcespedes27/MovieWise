import React from 'react';
import './button.css'


const Button = (props)=>{
    
   

    return(
    <div className="Button">
        <button>{props.label}</button>
    </div>
    );

};

export default Button;