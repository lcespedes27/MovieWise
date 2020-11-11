import React, {Component} from 'react';
import axios from 'axios'
import './BulkSearchContainer.css'
import Thumbnail from '../../Components/Thumbnail/Thumbnail'

class BulkSearchContainer extends Component{
    
    state={
    genre:28,
    genrePage:1,
    data:[],
    trends:"movie",
    movieId:null,
    page:1
    
    }
 
    searchHandler=(event)=>{
        
        if (this.props.type==="1"){

            this.setState({genre: event.currentTarget.value,page:1},() => { 
                this.componentDidMount()
            })
        }else{

            this.setState({trends: event.currentTarget.value,page:1},() => { 
                this.componentDidMount()
            })
        }
    };

    sendMovieID=()=>{

           
            this.props.clicked(this.state.movieId)

    
        

    };

componentDidMount(){
    
    
    if(this.props.type ==="1"){
    axios.get(this.props.endpoint+this.state.genre+"&page="+this.state.page)
         .then( response => {
              // handle success
              this.setState({data:response.data.results})
              
          }
  )}else if(this.props.type ==="2"){

    axios.get(this.props.endpoint+this.state.trends+'/week?api_key=c839ad42a3cfdcc2a0e0e0ba427bde96&page='+this.state.page)
    .then( response => {
         // handle success
         this.setState({data:response.data.results})
         


     })

    }
}
    next=()=>{
    
        if(this.state.trends==='movie') 
            this.setState({page:this.state.page+1},()=>{this.componentDidMount()});
    }

    back=()=>{
        
        if(this.state.trends==='movie'){
            if((this.state.page > 1))
                this.setState({page:this.state.page-1},()=>{this.componentDidMount()});
            }
    }
    
    render(){
       

        if(this.props.show){
        let dropList;
          if(this.props.type==="1"){
             dropList = (
                <div className='dropListContainer'>
                <p>Genres:</p>
                <select id="listGenre" name="genres" onChange={this.searchHandler}>
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
        )}else if(this.props.type==="2"){

             dropList = (
            
                <div className='dropListContainer'>
                <p>Trending:</p>
                <select id="listTrends" name="trends" onChange={this.searchHandler}>
                    <option value="movie" >Movies</option>
                    <option value="tv" >TV Shows</option>
                </select>
                </div>
            )


        }

       
        const thumbnail = this.state.data.map(thumbnail =>{
            return <Thumbnail key={thumbnail.id} carousel={false} title={thumbnail.title} alt={thumbnail.title} posterUrl={"https://image.tmdb.org/t/p/w500"+thumbnail.poster_path}  
             width={"250"} clicked={()=>{ this.setState({movieId:thumbnail.id},()=>{this.sendMovieID()})}}/>

        });

        return(
            <div className='bulkSearchContainer'>
                <div className='dropList'>
                {dropList}
                </div>
                
                <div className='bulkSearch'>
                    <div className=' btn backBtn' onClick={this.back}/>                   
                    <div className='thumbnailList'>
                        {thumbnail}
                    </div>
                    <div className='btn nextBtn' onClick={this.next}/>
                </div>
           
            </div>
        );
    }else{
        return null;
    }
}
}

export default BulkSearchContainer;