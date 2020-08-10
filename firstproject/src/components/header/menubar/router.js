import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Contact from './contact-us/contact';
import About from "./about/about";
import Message from './message/message';
import Feature from './feature/feature';
import {Blossom_rot, Cabbage_cutter , Fruit_fly , 
    Epilachna_damage , Stemborer_damage, Powdery_mildew,
    Unpollinated_gourd, Pesticide, SnailDamage } 
from "../../main/blogs";


const Router =()=>{
    return(
        <Switch> 
               <Route path = "/home" exact component={Home} />  
               <Route path ="/contact-us" exact component ={Contact} />  
               <Route path ="/about" exact component ={About} />    
               <Route path ="/message" exact component ={Message} />  
               <Route path ="/feature" exact component ={Feature} />  
               <Route path ="/Blossom_rot" exact component ={Blossom_rot} />  
               <Route path ="/Cabbage_cutter" exact component ={Cabbage_cutter} />   
               <Route path ="/Fruit_fly" exact component={Fruit_fly} />
               <Route path ="/Bean_cutter" exact component={Cabbage_cutter} />
               <Route path ="/Epilachna_damage" exact component={Epilachna_damage} /> 
               <Route path ="/Stem_borer_damage" exact component={Stemborer_damage} />  
               <Route path ="/Powdery_mildew"  exact component={Powdery_mildew} />   
               <Route path ="/Unpollinated_gourd" exact component ={Unpollinated_gourd} />   
               <Route path ="/Pesticide" exact component ={Pesticide} />     
               <Route path ="/Snail_damage" exact component ={SnailDamage} />
        </Switch> 
    )
}
export default Router;