import React from 'react';
import style from "./footer.css";

const Footer =()=>{
    const time = new Date().getFullYear();
    return(
        <div className={style.body}>
           Copyright &copy; Developed by Keshav Bhat<sup>2</sup>arai {time}
        </div>
    )
}
export default Footer;