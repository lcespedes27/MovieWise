import React from 'react';



const Cast = (props)=>{
    
   

    return(

        <div>
            <div>
                <img alt="Actor" src={props.castImage}/>
            </div>

            <div>
                <p>{props.castName}</p>
                <span>As: </span>
                <p>{props.castCharacter}</p>
            </div>
        </div>
    );
}
export default Cast;