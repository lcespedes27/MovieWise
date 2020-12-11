import React from 'react';
import "./Cast.css"



const Cast = (props)=>{
    
   

    return(

        <div className="cast">
            <div>
                <img className="actor" alt="Actor" src={props.castImage}/>
            </div>

            <div className='castInfo'>
                <p>{props.castName}</p>
                <span>As: </span>
                <p>{props.castCharacter}</p>
            </div>
        </div>
    );
}
export default Cast;