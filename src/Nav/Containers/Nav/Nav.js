import React, {Component} from 'react';
//import axios from 'axios'
import Logo from '../../Components/Logo/Logo'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Button from '../../Components/button/button' 
import './Nav.css'


class Nav extends Component{
    state={
        backDrop:false
    }

    refresh=()=>{
        window.location.reload();
    }

    backDropActive=(data)=>{
        this.props.clicked(data)
        
        if(this.state.backDrop=== false){
            this.setState({backDrop:true});
            
            
        }else{
            this.setState({backDrop:false});
        }
        
    }

    render(){
        return(

            <div className='NavContainer'>
                <div className="Nav">
                    <Logo clicked={this.refresh}/>
                    <SearchBar className='searchBar' show={this.state.backDrop} clicked={this.backDropActive} closeBackDrop={this.backDropActive}/>
                </div>

                <div className="buttons">
                    <Button label="Sign In"/>
                    <Button label="Others..."/>

                </div>
            </div>

        );
    }
}

export default Nav;