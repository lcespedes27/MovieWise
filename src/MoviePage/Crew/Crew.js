import React from 'react';



const Cast = (props)=>{
    
   

    return(

        <div>
            <hr/>
            <div>
                <img alt="Actor" src={props.crewImage}/>
            </div>

            <div>
                <p>{props.crewName}</p>
                <span>Job: </span>
                <p>{props.crewJob}</p>
                <span>Department: </span>
                <p>{props.crewDepartment}</p>
            </div>
        </div>
    );
}
export default Cast;