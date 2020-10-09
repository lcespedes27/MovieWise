import React, {Component} from 'react';
import axios from 'axios'
import './BulkSearchContainer.css'
import Thumbnail from '../../Components/Thumbnail/Thumbnail'

class BulkSearchContainer extends Component{

    state={
    genre:null,
    data:[]
    }

    searchHandler=(event)=>{
        
        this.setState({genre: event.currentTarget.value},() => { 
            this.componentDidMount()
    })
};

componentDidMount(){
    
    
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=c839ad42a3cfdcc2a0e0e0ba427bde96&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres='+this.state.genre)
         .then( response => {
              // handle success
              this.setState({data:response.data.results})
              //const url ="https://image.tmdb.org/t/p/w500"+ response.data.results[0].poster_path

              console.log(response.data.results);
              console.log(this.state.data);
              //console.log(url);
          }
  )
  
  }



    render(){
        
        const dropList = (
            <div>
            <label for="genres">Genres:</label>
            <select id="list" name="genres" onChange={this.searchHandler}>
                <option value="28" >Action</option>
                <option value="16" >Animation</option>
                <option value="35 ">Comedy </option>
                <option value="80" >Crime</option>
                <option value="99" >Documentary</option>
                <option value="18" >Drama</option>
                <option value="10751">Family</option>
                <option value="14" >Fantasy</option>
                <option value="27" >Horror </option>
                <option value="10749" >Romance</option>
                <option value="878" >Science Fiction</option>
                <option value="53" >Thriller</option>
                <option value="37" >Western</option>
            </select>
            </div>
        )

        const thumbnail = this.state.data.map(thumbnail =>{
            return <Thumbnail  title={thumbnail.tile} posterUrl={"https://image.tmdb.org/t/p/w500"+thumbnail.poster_path}  width={"250"} />

        });

        return(
            <div className='bulkSearchContainer'>
      
           {dropList}
           {thumbnail}
            </div>
            );
    }
}

export default BulkSearchContainer;