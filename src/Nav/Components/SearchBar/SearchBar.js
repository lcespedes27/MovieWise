
import React, {Component} from 'react';
import './SearchBar.css';
import BackDrop from './Backdrop/Backdrop'
import axios from 'axios'
import SearchItems from './SearchItems/SearchItems'



class SearchBar extends Component{

    state={
        data:[], 
        movieId: null    
    }
    
    sendMovieID=()=>{

           
        this.props.clicked(this.state.movieId)

};

   searching=()=>{
    const value = document.getElementById('searchBar').value
    this.props.clicked()

    axios.get("https://api.themoviedb.org/3/search/movie?api_key=c839ad42a3cfdcc2a0e0e0ba427bde96&query="+value)
    .then( response => {
         // handle success
         this.setState({data:response.data.results.slice(0,6)})

     })
   }

   
    
   

    render(){
        
        const searchItems = this.state.data.map(items =>{
            return <SearchItems show={this.props.show} key={items.id} title={items.title} alt={items.title} posterUrl={"https://image.tmdb.org/t/p/w200"+items.poster_path}  
                             releaseDate={items.release_date} clicked={()=>{ this.setState({movieId:items.id},()=>{this.sendMovieID()})}}/>

        });


        return(
            <div className="searchBarContainer">            
                <input className="searchBar" id='searchBar' type="text" placeholder="Search..." name="search" />
                <button onClick={this.searching}>Search</button>
                <BackDrop show={this.props.show} closeBackDrop={this.props.closeBackDrop}/>
                <div className='searchList'>
                    {searchItems}
                </div>
            </div>
        );
    
    }
}

export default SearchBar ;