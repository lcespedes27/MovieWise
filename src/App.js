import React, { Component } from 'react';
import './App.css';
//import axios from 'axios'
import BulkSearchContainer from './HomePage/Containers/BulkSearchContainer/BulkSearchContainer'


class App extends Component {
  
  state = {
    
    poster: null
}
  /*
  componentDidMount(){

    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=c839ad42a3cfdcc2a0e0e0ba427bde96&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27')
         .then( response => {
              // handle success
              const url ="https://image.tmdb.org/t/p/w500"+ response.data.results[0].poster_path

              this.setState({poster: url})
              console.log(response);
              console.log(url);
          }
  )
  
  }*/
  
  render(){

    //<img src={this.state.poster} alt="ddddddddddddddd"/>
    //<BulkSearchContainer/>

    
    return (
      <div className="App">

        <BulkSearchContainer/>

       

      </div>
    );
  }
}

export default App;
