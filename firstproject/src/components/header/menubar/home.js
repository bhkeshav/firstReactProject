import React, { Component } from 'react';
import axios from 'axios';
import Slider from "../../slider";


class Home extends Component{
    state={
        news:[],
        photos:[]
    }
    UNSAFE_componentWillMount(){
        axios.get(`http://localhost:3001/Blogger`)
        .then((response) =>{
            this.setState({
                news: response.data
            })
            })       
    } 
    
    render(){
        return(
            <>
            <Slider data={this.state.news}  />
            
            </>
        )
    }
}
export default Home;