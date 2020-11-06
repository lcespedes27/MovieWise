import React from 'react';
import './info.css'
import Convertor from '../../genreConvertor'


const Info = (props)=>{
    
   // <span>Genres: </span>  <p>{Convertor(props.movieInfo.genres[0].id)+', '+Convertor(props.movieInfo.genres[1].id)}</p>

   let genres="";
   
   for(let i =0 ; i< props.movieInfo.genres.length;i++){
        if(i === props.movieInfo.genres.length-1){
            genres += Convertor(props.movieInfo.genres[i].id)
        }else{        
            genres += Convertor(props.movieInfo.genres[i].id)+", "      
        }
    }

    return(

        <div className='info'>
            <p><span>Ranking: </span>  {props.movieInfo.vote_average}</p>

            <p><span>Title: </span>  {props.movieInfo.original_title}</p>
            
            <span>Genres: </span>  <p>{genres}</p>
            
            <span>Overview: </span>  <p>{props.movieInfo.overview}</p>
            
            <p><span>Release Date: </span>  {props.movieInfo.release_date}</p>
            
            <p><span>Budget: </span>  ${props.movieInfo.budget}</p>
            <p><span>Revenue: </span>  ${props.movieInfo.revenue}</p>
            
            <p> <span>RunTime: </span>  {props.movieInfo.runtime}</p>
        </div>
    );
}
export default Info;