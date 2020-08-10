import React from 'react';
import Slick from 'react-slick';
import style from './slider.css';
import { Link, } from 'react-router-dom';


const Slider=(props)=>{   

    const template= props.data.map((item,i)=>{
        return(
            <div key={i}>
                <div className={style.featured_item}>
                    <div className ={style.featured_image}
                    style={{
                        background: `url(../photos/${item.images})` 
                    }                          
                    }>
                       <Link to = {item.link}>
                           <div className={style.featured_caption}>
                               {item.link}
                           </div>                              
                       </Link>  
                                                
                    </div>
                </div>
            </div>
        )
    })      
           
    
         
         const settings={
            dots: true,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1, 
            autoplay: true  
         } 
         
    return(       
        <>
        <div style={{
            background: "gold",
            fontSize: "larger",
            margin:"10px",
            padding:"10px",
            letterSpacing: "0.1ch",
            textAlign: "center"
        }}>
            Here are the list of activities during Lockdown 2020. 
        </div>   
        <Slick {...settings}>            
            {template}    
        </Slick>   
            
        </>
    )
    
}


export default Slider;