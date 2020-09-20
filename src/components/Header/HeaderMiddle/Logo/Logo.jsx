import React from 'react';
import style from './Logo.module.css';
import logoImg from './logo.gif';
import { Link } from "react-router-dom";

const Logo = ()=>{
    return(
        <div  className = {style.logo}>
            <Link to="/" >
              <a href = "#" alt = "logo"><img src = {logoImg} alt = "logo"/></a>
            </Link>
            <span>Мувінг ТУР</span>
        </div>
    )
}

export default Logo;