import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Carousel from './HomePage/Containers/Carousel/Carousel'
import BulkSearchContainer from './HomePage/Containers/BulkSearchContainer/BulkSearchContainer'
import Nav from './Nav/Containers/Nav/Nav'
import Movie from './MoviePage/Movie/Movie'

class App extends Component {
  
  state = {
    data:[],
    poster: null,
    homePage: true,
    moviePage:false,
    movieID:null,
    movieDetail:null,
    movieCastCrew:null
}


  getData=(data)=>{
    
    if(typeof(data) === "number"){

        this.setState({movieID:data},()=>{

          
          axios.get("https://api.themoviedb.org/3/movie/"+this.state.movieID+"?api_key=c839ad42a3cfdcc2a0e0e0ba427bde96&language=en-US&append_to_response=videos")
              .then( response => {
                  // handle success
                  this.setState({movieDetail:response.data},()=>{console.log("information---->",this.state.movieDetail)})
                  
              }
              );

          axios.get("https://api.themoviedb.org/3/movie/"+this.state.movieID+"/credits?api_key=c839ad42a3cfdcc2a0e0e0ba427bde96")
            .then( response => {
                // handle success
                this.setState({movieCastCrew:response.data},()=>{console.log("information---->",this.state.movieCastCrew)})
                  
              }
            ); 
      })


        this.setState({homePage:false, moviePage:true},()=>{console.log(this.state.moviePage)})
        
      


    }
  }



  
  render(){
   
    return (
      <div className="App">
       
        <Nav className="nav" clicked={this.getData}/>
        
        <Carousel show={this.state.homePage} />


        <BulkSearchContainer show={this.state.homePage} type={"1"} endpoint={'https://api.themoviedb.org/3/discover/movie?api_key=c839ad42a3cfdcc2a0e0e0ba427bde96&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres='}
                              clicked= {this.getData }/>

        <BulkSearchContainer show={this.state.homePage} type={"2"} endpoint={"https://api.themoviedb.org/3/trending/"}
                              clicked= {this.getData }/>
        
        <Movie  show ={this.state.moviePage} movieDetail={this.state.movieDetail} movieCastCrew={this.state.movieCastCrew}/>
        <div className="footer"> 
          <div className="members">
            <span>Team Members</span>  
            
              <p>Luis Joan Cespedes</p>
              <p>Samantha Louise Saldua</p>
            
          </div>
          <div className="Technologies"> 
            <span>Technologies</span> 
            <p>ReactJS</p>
            <p>ECMAScript 6</p>
            <p>HTML</p>
            <p>CSS</p>

          </div>
          <div className="credits">
            <span>Credits</span>  
            <a href="https://www.themoviedb.org/"><p>The Movie Database API</p></a>
            
            <p>Thanks to the information provided by this API we could do our project </p>
            <a href="https://developers.themoviedb.org/3/getting-started/introduction"><p>API Tutorial</p></a>
           </div>
        </div>
      </div>
    );
  }
}

export default App;
