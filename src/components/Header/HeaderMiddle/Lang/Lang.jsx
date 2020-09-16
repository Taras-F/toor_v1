import React from 'react';
import style from './Lang.module.css';
import Iconflag from '../../../../images/ukFlag.png';
import Icon from '../../../Common/IcoMoon/IcoMoon';

const Lang = () => {
    return (
        <div className={style.dropdown}>
            <button className={style.dropbtn}>
                <img  className={style.flagHW} src={Iconflag} alt="flag"/>
                <span>UA</span>
                <Icon icon="angle-down" size={20} color="white" />
            </button>
            <div className={style.dropdownContent}>
                <a href="#">Українська</a>
                <a href="#">Русский</a>
                <a href="#">English</a>
            </div>
        </div>

    )
}

export default Lang;