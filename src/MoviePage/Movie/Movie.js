import React, {Component} from 'react';
//import axios from 'axios'
import './Movie.css'
import Trailer from '../Trailer/Trailer'
import Info from '../Info/info'
import Cast from '../Cast/Cast'
import Crew from '../Crew/Crew'



class Movie extends Component{



    render(){
        let trailer = true;
        
        if((this.props.show) && (this.props.movieDetail!==null ) && (this.props.movieCastCrew !==null )){
            let cast, crew;
           
            cast = this.props.movieCastCrew.cast.slice(0,6)
            crew = this.props.movieCastCrew.crew.slice(0,4)


            const castList = cast.map(cast =>{
                return <Cast key={cast.id} castImage={"https://image.tmdb.org/t/p/w500"+cast.profile_path}  castName={cast.name}  
                castCharacter={cast.character} />
                });

            const crewList = crew.map(crew =>{
                return <Crew key={crew.id+1} crewImage={"https://image.tmdb.org/t/p/w500"+crew.profile_path}  crewName={crew.name}  
                crewJob={crew.job} crewDepartment={crew.department} />
                });

        

                if (this.props.movieDetail.videos.results.length === 0) trailer =false;
                console.log('aqui ----->', this.props.movieDetail)
            return(
                
                <div className='movie'>
                    <Trailer movieTitle={this.props.movieDetail.original_title} videoKey={trailer ? this.props.movieDetail.videos.results[0].key : null} />
                    <Info movieInfo={this.props.movieDetail}/>
                    {castList}
                    {crewList}
                </div>
            );
        }else{
            return("");
        }
    }
}

export default Movie;