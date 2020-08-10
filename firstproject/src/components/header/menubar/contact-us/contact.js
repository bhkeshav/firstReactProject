import React, { Component } from "react";
import style from './contact.css';

class Contact extends Component{
    state={
        firstname:[],
        lastname:[],
        value:""
    }
    eventHandlerFirst=(event)=>{
       this.setState({
           firstname: event.target.value,           
       })
    }
    eventHandlerLast=(event)=>{
        this.setState({
            lastname: event.target.value,            
        })
     }
     submitHandler=(event)=>{
         event.preventDefault();         
         this.setState({             
             value: this.state.firstname
         })
     }

    render(){
        console.log(this.state)
    return(
        <>
        <div style={{
            textAlign:"center",
            fontSize:"larger",
            fontStyle:"italic",
            color:"green"
        }}>Thanks For your visit <h1>{this.state.value}</h1></div>
        <div className={style.background} style={{
            background: `url(../photos/5.jpg)`,            
        }}>            
        <div className={style.body}>
            <div className={style.photo}>
            <img alt="contact_gif" src ="/photos/contact.gif"  />
            </div>
            
         <h1>LOGIN FORM</h1>
         <form className={style.form}>
             <label>Enter First-Name::</label>
             <input type ="text" defaultValue="" name="firstname" onChange={this.eventHandlerFirst} /><br/> <br/>
             <label>Enter Last-Name::</label>
             <input type ="text" defaultValue="" name="lastname" onChange={this.eventHandlerLast} /><br/> <br/>
             <button onClick={this.submitHandler}>submit</button>
         </form>
         </div>
         </div>
        </>
    )
}
}
export default Contact;