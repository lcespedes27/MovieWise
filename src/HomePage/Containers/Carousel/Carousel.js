import React, {Component} from 'react';
import axios from 'axios'
import Thumbnail from '../../Components/Thumbnail/Thumbnail'
import './Carousel.css';
import genreConvertor from '../../../genreConvertor'

class Carousel extends Component{

    state={
        data:[],
        genre:27,
        poster: null,
        title:null,
        overview:null,
        genreView:[],
        releaseDate: null

    }

    
    componentDidMount(){
    
        
        axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=c839ad42a3cfdcc2a0e0e0ba427bde96&language=en-US&page=1&region=us')
             .then( response => {
                  // handle success
                  this.setState({data:response.data.results.slice(0,5)})  
                  this.setState({poster:"https://image.tmdb.org/t/p/w400"+this.state.data[0].poster_path})
                  this.setState({title:this.state.data[0].title})
                  this.setState({overview:this.state.data[0].overview})
                  this.setState({genreView:this.state.data[0].genre_ids})
                  this.setState({releaseDate:this.state.data[0].release_date})
                }
      )
    }

 

 


    render(){

        if(this.props.show){
        const thumbnail = this.state.data.map(thumbnail =>{
    
            return <Thumbnail key={thumbnail.id} title={thumbnail.title} alt={thumbnail.title} 
                              posterUrl={"https://image.tmdb.org/t/p/w500"+thumbnail.poster_path}  width={"180"} value={thumbnail.posterUrl}
                              clicked={()=>{
                                  this.setState({poster:"https://image.tmdb.org/t/p/w400"+thumbnail.poster_path})
                                  this.setState({title:thumbnail.title})
                                  this.setState({overview:thumbnail.overview})
                                  this.setState({genreView:thumbnail.genre_ids})
                                  this.setState({releaseDate:thumbnail.release_date})
                              }}/>

        });

    

        let poster; 
        let summary;

        poster=(
            <div>
                <img src={this.state.poster} alt={"sdsdsd"}/>
            </div>
        )
           
        summary=(
            <div>
                <p>{this.state.title}</p>
                <div>                
                    <p>{genreConvertor(this.state.genreView[0]) }</p>
                    <p>{genreConvertor(this.state.genreView[1])}</p>
                    <p>{genreConvertor(this.state.genreView[2])}</p>
                </div>
                <p>{this.state.overview}</p>
                <p>{this.state.releaseDate}</p>
            </div>
        )
        

        return(
            <div className="carousel" >
                <div className="overview">
                    
                    <div className="poster">
                        {poster}
                    </div>

                    <div className="summary">
                        {summary}
                    </div>


                   
                </div>

              
                    {thumbnail}
              

            </div>
            );
    
        }else{
            return null;
        }
    }
}

export default Carousel;