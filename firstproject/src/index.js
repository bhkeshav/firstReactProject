import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter,  } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';


class App extends Component{
  render(){
    return(
      <BrowserRouter>        
          <Header />
          <Footer />
      </BrowserRouter>
    )
  }
}
ReactDOM.render(<App/>, document.getElementById("root"));