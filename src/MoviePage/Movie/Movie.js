import React, {Component} from 'react';
//import axios from 'axios'
import './Movie.css'
import Trailer from '../Trailer/Trailer'
import Info from '../Info/info'
import Cast from '../Cast/Cast'
import Crew from '../Crew/Crew'




let showCast;
let showCrew;
class Movie extends Component{

    
    state={
        showCast:false,
        showCrew:false
    }

    showCast=()=>{
        if(this.state.showCast===false){
            showCast={
                
                opacity: 1,
                height: 'auto'
                
            }
            this.setState({showCast:true})
        }else{
            showCast={
                
                opacity: 0,
                height: '0px'
                
                
            }
            this.setState({showCast:false})
        }
    }

    showCrew=()=>{
    
        if(this.state.showCrew===false){
            showCrew={
                
                opacity: 1,
                height: 'auto'
            }
            this.setState({showCrew:true})
        }else{
            showCrew={
                
                opacity: 0,
                height: '0'
            }
            this.setState({showCrew:false})
        }
    }


    render(){


        let trailer = true;
        
        if((this.props.show) && (this.props.movieDetail!==null ) && (this.props.movieCastCrew !==null )){
            let cast, crew;
           
            cast = this.props.movieCastCrew.cast.slice(0,6)
            crew = this.props.movieCastCrew.crew.slice(0,4)

            console.log("REVISAAAA----->",this.props.movieDetail)

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

                    

                    <div className="castListButton" onClick={this.showCast}> Cast <div className='icon'></div> </div>
                    <div className='castList' style={showCast}>
                        {castList}
                    </div>
                    
                    <div className="crewListButton" onClick={this.showCrew}> Crew <div className='icon'></div></div>
                    <div  className='crewList' style={showCrew}>
                        {crewList}
                    </div>

                    
                </div>
            );
        }else{
            return("");
        }
    }
}

export default Movie;