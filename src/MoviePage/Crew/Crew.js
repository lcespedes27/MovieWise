import React from 'react'
import '../Cast/Cast.css'



const Crew = (props)=>{
    
   

    return(

        <div className="crew">
           
            <div>
                <img className="actor" alt="Actor" src={props.crewImage}/>
            </div>

            <div className='crewInfo'>
                <p>{props.crewName}</p>
                <span>Job: </span>
                <p>{props.crewJob}</p>
                <span>Department: </span>
                <p>{props.crewDepartment}</p>
            </div>
        </div>
    );
}
export default Crew;