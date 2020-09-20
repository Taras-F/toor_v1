import React, { useState } from 'react';
import style from './Menu.module.css';
import Burger from 'react-css-burger';
import { Link } from "react-router-dom";

let menus = [
    {
      name: 'Головна',
      link: "/",
      id: 1
    },
    {
      name: 'Калькулятор',
      link: 'calculator',
      id: 2
    },
    {
      name: 'ціни',
      link: 'prices',
      id: 3
    },
    {
      name: 'контакти',
      link: 'contacts',
      id: 4
    }
]


const Menu = (props) => {
    const styleHideMenu = style.nav + ' ' + style.hide;
    const [active, setActive] = useState(false);
    return (
        <div className={style.menu}>
            <nav className={active ? style.nav : styleHideMenu}>
                <ul>
                    {menus.map((value, id) => {
                        return <li key={value.id} onClick={() => setActive(!active)}>
                            <Link to={value.link}> {value.name} </Link>
                        </li>
                    })}
                </ul>
            </nav>
            <div className={style.burger}>
                <Burg active={active} setActive={setActive} />
            </div>
            {/* <Lang /> */}
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