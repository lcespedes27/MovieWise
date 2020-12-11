import React from 'react';
import './info.css'
import Convertor from '../../genreConvertor'
import Star from '../../Nav/Components/SearchBar/SearchItems/star.png'


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
    console.log('dfdfdfdfdfdf',props.movieInfo)
    return(
        
        <div className="general" >
            <div className="rating">
                <span>Rating: </span>  {props.movieInfo.vote_average}/10
                <img className='star' alt ='star' src={Star}/>
            </div>

            <div className="generalInfo">
                <img className='infoPoster' alt='poster' src={"https://image.tmdb.org/t/p/original" + props.movieInfo.poster_path}/>
                <div className='infoText'>
                    <p className="infoTitle" >  {props.movieInfo.original_title}</p>
                    
                    <p><span>Genres: </span>  <span className="infoSubText">{genres}</span></p>
                    
                    <div className="infoOverviewDiv"><span>Overview: </span>  <div className ="infoOverviewMovie">{props.movieInfo.overview}</div></div>
                    
                    <p><span>Release Date: </span>  <span className="infoSubText">{props.movieInfo.release_date}</span></p>
                    
                    <p><span>Budget: </span>  <span className="infoSubText">${props.movieInfo.budget}</span></p>
                    <p><span>Revenue: </span>  <span className="infoSubText">${props.movieInfo.revenue}</span></p>
                    
                    <p> <span>RunTime: </span>  <span className="infoSubText">{props.movieInfo.runtime} Min</span></p>
                </div>
            </div>
        </div>
    );
}
export default Info;