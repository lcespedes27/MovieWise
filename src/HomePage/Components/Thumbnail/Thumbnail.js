import React from 'react';
import './Thumbnail.css';


const Thumbnail = (props)=>{
    

    return(

        <img className='Thumbnail' src={props.posterUrl} alt={props.title} height={props.height} width={props.width}/>

    );

};

export default Thumbnail;