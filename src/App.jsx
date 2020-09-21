import React, { Fragment } from 'react';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect,
} from "react-router-dom";
import OfficeRelocation from './components/Boxes/OfficeRelocation';
import HeaderTop from './components/Header/HeaderTop/HeaderTop';
import HeaderBottom from './components/Header/HeaderBottom/HeaderBottom';
import HeaderMiddle from './components/Header/HeaderMiddle/HeaderMiddle';
import MenuService from './components/Main/MenuService/MenuService';
import AboutUs from './components/Main/AboutUs/AboutUs';
import Reviews from './components/Main/Reviews/Reviews';
import IconsService from './components/Main/IconsService/IconsService';
import ApartmentMove from './components/Boxes/ApartmentMove';
import BuildingMaterials from './components/Boxes/BuildingMaterials';
import RiggingWorks from './components/Boxes/RiggingWorks';
import Prices from './components/Header/HeaderMiddle/Menu/Prices';
import Calculator from './components/Header/HeaderMiddle/Menu/Calculator';
import Contacts from './components/Header/HeaderMiddle/Menu/Contacts';
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <Router>
      <Fragment>
        <HeaderTop />
        <HeaderMiddle />
        <Switch>
          <Route exact path='/' render={() => <Redirect to={"/main"}/>}/>
          <Route exact path='/main' component={Main}/>
          <Route path='/apartmentMove' component={ApartmentMove} />
          <Route path="/officeRelocation" component={OfficeRelocation} />
          <Route path="/buildingMaterials" component={BuildingMaterials} />
          <Route path="/riggingWorks" component={RiggingWorks} />
          <Route path='/calculator' component={Calculator} />
          <Route path='/prices' component={Prices} />
          <Route path='/contacts' component={Contacts} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
