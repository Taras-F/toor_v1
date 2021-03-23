import React, { useState } from 'react';
import style from './Logo.module.css';
import logoImg from './logo.gif';
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';
import ScrollIntoView from 'react-scroll-into-view';

const Logo = (props) => {
  const [logoFix,setLogoFix] = useState(false);
  const history = useHistory();

  useEffect(() => {
    window.addEventListener('scroll',handleScroll);
  });

  const handleScroll = () => {
    if(window.pageYOffset > 300) {
      setLogoFix(true);
    }else if(window.pageYOffset < 300) {
      setLogoFix(false);
    }
  }
   return(
   /* div for logo fixed with  menu */
      <div className={logoFix ? style.logo_fixed : ''}>
        <div  className = {logoFix ? style.logo_fixImg : style.logo}>
            <ScrollIntoView onclick={() => history.push('/')} selector="#menuTop" >
              <img src = {logoImg} alt = "logo"/>
            </ScrollIntoView>
            <span>Мувінг ТУР</span>
        </div>
      </div>
    
    
    
    )
}

export default Logo;
