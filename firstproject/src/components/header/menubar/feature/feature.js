import React from 'react';
import ReactPlayer from 'react-player';

const Feature =()=>{
    console.log(ReactPlayer)
    return(
        <div>
            <ReactPlayer 
                url = "https://www.youtube.com/watch?v=wp9hCP1FWII"
            />
            
        </div>
    )
}
export default Feature;