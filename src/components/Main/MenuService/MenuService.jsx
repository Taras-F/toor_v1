import React from 'react';
import '../MenuService/boxMenu.css';
import Icon from '../../Common/IcoMoon/IcoMoon';
import loader from '../../../images/loader.png';
import ScrollIntoView from 'react-scroll-into-view';
import { useHistory } from 'react-router-dom';

const MenuService = () => {
  const history = useHistory();
  return (
    <div id='container'>
      
      <ScrollIntoView onClick={() => history.push('/apartmentMove')} selector="#headerApartmentMove">
          <div className='box'>
            <p>
              <Icon icon='building-o' size={20} color="white"  />
            </p>
            <p>Квартирний переїзд</p>

          </div>
        </ScrollIntoView>

        <ScrollIntoView onClick={() => history.push('/officeRelocation')} selector="#headerOfficeRelocation">
          <div className='box'>
            <p>
              <Icon icon='briefcase' size={20} />
            </p>
              <p>Офісний переїзд</p>
          </div>
        </ScrollIntoView>

        <ScrollIntoView onClick={() => history.push('/buildingMaterials')} selector="#headerBuldingMaterials">
          <div className='box'>
            <p>
              <Icon icon='truck' size={20} color="white" />
            </p>
            <p>Доставка будматеріалів</p>
          </div>
        </ScrollIntoView>

        <ScrollIntoView onClick={() => history.push('/riggingWorks')} selector="#headerRiggingWorks">
          <div className='box'>
            <img className='iconLoader' src={loader} alt="icon"/>
            Такелажні роботи
          </div>
        </ScrollIntoView>
      
    </div>
  )
}


export default MenuService;
