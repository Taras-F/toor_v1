import React, { useState } from 'react';
import style from './Menu.module.css';
import Burger from 'react-css-burger';
import { useEffect } from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import { useHistory } from 'react-router-dom';

let menus = [
    {
      name: 'Головна',
      link: "/",
      id: 1,
      selector: '#headerTopHer'
    },
    {
      name: 'Калькулятор',
      link: 'calculator',
      id: 2,
      selector: '#headerCalculator'
    },
    {
      name: 'ціни',
      link: 'prices',
      id: 3,
      selector: '#headerPrices'
    },
    {
      name: 'контакти',
      link: 'contacts',
      id: 4
    }
]


const Menu = (props) => {
  const history = useHistory();

  const styleHideMenu = style.nav + ' ' + style.hide;
  const [active, setActive] = useState(false);

  useEffect (() => {
    window.addEventListener('scroll', handleScroll);
  })
   
  
  const handleScroll = () => {
    if(window.pageYOffset > 300) {
      setActive(true);
    }else if(window.pageYOffset < 300) {
      setActive(false);
    }
  };

    return (
      //div for fixed menu
      <div className={active ? style.header_fixed : ''} >
        <div className={style.menu}>
            <nav className={active ? style.nav : styleHideMenu}>
                <ul>
                  {menus.map((value, id) => {
                    return <li key={value.id} onClick={() => setActive(!active)}>
                      <ScrollIntoView className={style.xuy} onClick={() => history.push(value.link)} selector={value.selector}>
                        {value.name}
                      </ScrollIntoView> 
                    </li>
                    })}
                </ul>
            </nav>
            <div className={style.burger}>
                <Burg active={active} setActive={setActive} />
            </div>
        </div>
      </div>
    )
}


const Burg = (props) => {
    return (
        <Burger
            onClick={() => props.setActive(!props.active)}
            active={props.active}
            burger="slider"
            color="white"
            hoverOpacity={0.8}
            scale={1.2}
            marginTop='0px'
            marginLeft='0px'
        />
    );
}


export default Menu;