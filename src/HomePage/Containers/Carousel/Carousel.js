import React, {Component} from 'react';
import axios from 'axios'
import Thumbnail from '../../Components/Thumbnail/Thumbnail'
import './Carousel.css';
import Convertor from '../../../genreConvertor'

let counter=0;



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

    settingGenres(array){
        if(array !== undefined){
        let genres="";
        
        
        
        for (let i =0 ; i< array.length; i++ ){
            
            if(i === array.length-1){
                genres += Convertor(array[i]);
            }else{        
                genres += Convertor(array[i])+", ";      
            }
        }
        
        return genres;
    }
}

    timer =()=>{
        

        if(counter ===6) counter=0;
        
        this.setState({poster:"https://image.tmdb.org/t/p/original"+this.state.data[counter].backdrop_path,title:this.state.data[counter].title,
        overview:this.state.data[counter].overview,genreView:this.state.data[counter].genre_ids,releaseDate:this.state.data[counter].release_date})
        
        counter++;

    }
    componentDidMount(){
    
        
        axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=c839ad42a3cfdcc2a0e0e0ba427bde96&language=en-US&page=1&region=us')
             .then( response => {
                  
                let filter = response.data.results;
                let holder=[];
                let counter=0;

              

                for(let i =0; i<filter.length; i++ ){
                   

                   if( (filter[i].poster_path !== null)&&(filter[i].backdrop_path !==null)){
                        holder.push(filter[i])
                        counter =counter+1;
                   }
                   if(counter === 6){
                       i = filter.length
                   }
                }
                
                setInterval(this.timer,10000)
                // handle success
                this.setState({data:holder})
                this.setState({poster:"https://image.tmdb.org/t/p/original"+this.state.data[0].backdrop_path,title:this.state.data[0].title,
                overview:this.state.data[0].overview,genreView:this.state.data[0].genre_ids,releaseDate:this.state.data[0].release_date})

                
                    

                }
      )
    }

 
 
 


    render(){

        if(this.props.show){

            const thumbnail = this.state.data.map(thumbnail =>{

             
            return <Thumbnail  className='thumbnailItems' key={thumbnail.id} title={thumbnail.title} alt={thumbnail.title} 
                              posterUrl={"https://image.tmdb.org/t/p/original"+thumbnail.poster_path} carousel={true}  width={"80"} value={thumbnail.posterUrl}
                              clicked={()=>{
                                  this.setState({poster:"https://image.tmdb.org/t/p/original"+thumbnail.backdrop_path,title:thumbnail.title,
                                                    overview:thumbnail.overview,genreView:thumbnail.genre_ids,releaseDate:thumbnail.release_date})
                              }}/>

        });

        console.log("redering.....")
        let image ={
            
            
            backgroundImage: "url(" + this.state.poster + ")",

  
        }
       
        let summary;

        

     
           
        summary=(
            
            <div className='summary'>
                <p className='title'>{this.state.title}</p>
                               
                <p className='genres'><span className ='subTitle'>Genre(s): </span>{this.settingGenres(this.state.genreView)}</p>
                   
                
                <div className='divOverview'><span className ='subTitle'>Overview: </span><p className='infoOverview'>{this.state.overview}</p></div>
                <p className="RDate"><span className ='subTitle'>Released Date: </span>{this.state.releaseDate}</p>
            </div>
        )
        

        return(
            <div className='frame'>
                <div className='carouselTitle'>
                    Upcoming Movies
                </div>
                
                <div className="carousel"  style={image}>
                    <div className='carousel-Items'>
                        <div className="overview">
                                {summary}
                        </div>
                    <div className='thumbnail'>
                        {thumbnail}
                    </div>
                </div>
                </div>
            </div>
            );
    
        }else{
            return null;
        }
    }
}

export default Carousel;