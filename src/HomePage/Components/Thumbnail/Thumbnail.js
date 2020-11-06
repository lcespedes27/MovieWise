import React from 'react';
import './Thumbnail.css';


const Thumbnail = (props)=>{
    
   

    return(

        <img className='Thumbnail' src={props.posterUrl} alt={props.title} title={props.title} width={props.width} onClick={props.clicked}/>

    );

};

export default Thumbnail;