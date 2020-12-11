import React from 'react';
import './SearchItems.css';



const SearchItems = (props)=>{
    
   if(props.show){
        
        return(
            <div className="items" onClick={props.clicked}>
                <img className='itemsPoster' src={props.posterUrl} alt={props.title}  />
                
                
              
                <div className='info'>
                    <p className='title'>{props.title}</p> 
                    <p className='date'>Language: {props.language}</p>
                    <p className='date'>{props.releaseDate}</p>
                    <div className='Rdiv'>
                      <p className='Ratings'> Rating: <span>{props.average}/10</span></p> 
                      <div className='star'/>
                    </div>
                
                </div>

                </div>
           
        );
    }else{
        return null;
    }

};

export default SearchItems;