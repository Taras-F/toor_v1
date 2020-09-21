import React from 'react';
import './forBoxes.css';
import MenuService from "../Main/MenuService/MenuService";


const BuildingMaterials = () => {
  return(
      <>
    <div className='container'>
      <div className='styleForContainer'>
        <p>
          Коли Ви плануєте будь-які будівельні чи ремонтні роботи виникає питання:
          «Як привезти і винести матеріал на поверх…?» У вирішені цього питання Ви можете сміло звернутися до нас.
          Ми забезпечимо доставку  будівельних матеріалів будь-якого тоннажу.
          Наш підхід до завантаження та транспортування будівельних матеріалів націлений на збереження їх початкових якостей і цілісності.
          Послуги нашої компанії включають не тільки перевезення будівельних матеріалів, але й їх розвантаження і підйом на поверх.
          Досвідчені вантажники виконають підйом будівельних матеріалів у мішках, відрах, банках, а також підйом поштучного вантажу.
          Разом з цією послугою часто замовляють вивіз будівельного сміття.
        </p>
          <h4>Як ми працюємо:</h4>

          <h5>Дзвінок в нашу компанію або залиште заявку на сайті;</h5>
          <h5>Дбайливе поводження з продукцією;</h5>
          <h5>Вивантаження будматеріалів і перенесення їх у приміщення;</h5>
          <h5>Ввічливе поводження з клієнтами.</h5>
        <p>
          З цінами та умовами перевезення будматеріалів ви можете ознайомитися в спеціальному розділі "Ціни",
          а також зателефонувавши за вказаними номерами.
        </p>
      </div>
    </div>
        <MenuService />
      </>
  )
}

export default BuildingMaterials;
