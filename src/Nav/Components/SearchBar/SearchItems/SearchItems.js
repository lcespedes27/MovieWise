import React from 'react';
import './SearchItems.css';


const SearchItems = (props)=>{
    
   if(props.show){
        
        return(
            <div className="items" onClick={props.clicked}>
                <img className='itemsPoster' src={props.posterUrl} alt={props.title}  />
                <div>
                    <p>{props.title}</p> 
                    <p>{props.releaseDate}</p>
                </div>
            </div>
        );
    }else{
        return null;
    }

};

export default SearchItems;