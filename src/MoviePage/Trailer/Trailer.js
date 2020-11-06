import React from 'react';
import './Trailer.css'



const Trailer = (props)=>{
    
   /*
   
    
   
   */ 

    return(
        <div className='trailerFrame'>
            {props.movieTitle}
            <iframe className='trailer' title="YouTube" src={"https://www.youtube.com/embed/"+ props.videoKey}/> 
         
        </div>
    );
}
export default Trailer;