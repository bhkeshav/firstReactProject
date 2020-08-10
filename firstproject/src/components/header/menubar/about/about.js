import React from 'react';
const About =()=>{

    let color = {
         body:{
             background: 'gold' ,
             color: "green",
             fontStyle: "italic",
             letterSpacing: '0.2ch'
         },
         align:{
             textAlign:"center"
         },
         photo:{
             height: '400px',
             width :"400px",
             float: "left"
         }
    }
        
    return(
        <>
        <marquee style={color.body}> KESHAV BHATTARAI</marquee>
    <div style={color.body}>
       <h1 style={color.align}>Introduction to Author</h1>
       <img alt ="author_photo" src="/photos/author_photo.jpg" style={color.photo} />
       <h2>This is the <i>First website</i> that i have made using React. In this website, I have used very simple method
       that i have learnt yet to design particular website. This website is not for production purpose. This lockdown 
       became boon for me as i have got chance to learn more about programming language.</h2>
       <h2>
           As i am fond of learning javascript. I believe that javascript is complete language. One language many use. This 
           programming language can be used in both front-end development as well as back-end development. There are many 
           frameworks related to javascript. For front-end development, there are many frameworks such as react-js, electron,
           react-native and veu. For backend, node js is simple and easy to use. Thanks to node js development, now we can 
           run javascript code in our server inspite of browser.
       </h2>
       <h1>
           It took me about 1 and half month to learn basic concept of javascript and then i started to learn react. React is 
           so easy to learn if you have basic knowledge of html, css and javascript. It will help you to use skills of javascript
           which you have learn in initial stage. 
       </h1>
    </div>
    </>
)
}
export default About;

