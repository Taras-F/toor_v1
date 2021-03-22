import React from 'react';
import IconsService from './IconsService/IconsService';
import AboutUs from './AboutUs/AboutUs';
import MenuService from './MenuService/MenuService';
import HeaderBottom from "../Header/HeaderBottom/HeaderBottom";
import Reviews from "./Reviews/Reviews";

const Main = () => {
    return (
        <div>
            <HeaderBottom />
            <MenuService />
            <IconsService />
            <AboutUs />
            <Reviews />

        </div>
    )
}

export default Main;