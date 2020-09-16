import React from 'react';
import style from './Reviews.module.css';
import ava1 from '../../../images/ava/ava1.jpg';
import ava2 from '../../../images/ava/ava2.jpg';
import ava3 from '../../../images/ava/ava3.jpg';

let dataReviews = {
    title: "Відгуки наших клієнтів",
    buttonText: `Всі відгуки (250)`,
    userReviews: [
        {
            name: "Катерина Остапова",
            avaUser: ava1,
            comment: `Про Компанію "ТУР" я дізналася від моїх друзів.
            Мені потрібно було перевезти холодильник з квартири на квартиру ,
            звернувшись в дану компанію я була вражена їхньою оперативною работою.
            Хлопці просто молодці :)!`
        },
        {
            name: "Андрій Волоськів",
            avaUser: ava2,
            comment: `Скористався послугами даної фірми, для вивозу будівельного мусору.
            Хлопці приїхали вчасно, свою роботу виконали дуже добре. Всім рекомендую! `
        },
        {
            name: "Ольга Сковорода",
            avaUser: ava3,
            comment: `Роботою вантажників дуже задоволений, перевезли всі речі в належному стані.
            Хороша фірма з хорошим персоналом!`
        },
    ]
}

let usersComments = dataReviews.userReviews.map((item, index) => {
    return <div className={style.wrapItemUser}>
        <div className={style.itemText}>{item.comment}</div>
        <div className={style.user}>
            <a href="#" className={style.ava}><img src={item.avaUser} alt="" /></a>
            <a href="#" className={style.nameUser}><span>{item.name}</span></a>
        </div>
    </div>
})

const Reviews = () => {
    return (
        <div className={style.section}>
            <div className={style.wrap}>
                <h1 className={style.title}>{dataReviews.title}</h1>
                <div className={style.wrapItems}>
                    {usersComments}
                </div>
                <button className={style.btn}>{dataReviews.buttonText}</button>
            </div>
        </div>
    )
}

export default Reviews;