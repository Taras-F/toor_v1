import React from 'react';
import style from './AboutUs.module.css';
import picture1 from '../../../images/gallery1.jpg';
import picture2 from '../../../images/gallery2.jpg';
import picture3 from '../../../images/gallery3.jpg';
import picture4 from '../../../images/gallery4.jpg';
import picture5 from '../../../images/gallery5.jpg';
import picture6 from '../../../images/gallery6.jpg';
import Slider from "react-slick";

let dataAboutUs = {
    title: "Ласкаво просимо!",
    text: "Компанія «Тур» - це команда справжніх професіоналів вантажно-розвантажувальних робіт.\
    Наша компанія може організувати будь-який переїзд «від А до Я», доставить для вас будматеріали,\
    техніку, меблі чи інший вантаж прямо до зазначеного вами місця. Вам достатньо залишити заявку на сайті\
    або зателефонувати за вказаними номерами. Ви завжди отримаєте кваліфіковану допомогу від фахівців нашої компанії.",
    gallery: [picture1, picture2, picture3, picture4, picture5, picture6]
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                right: "0px",
                width: "30px"
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                left: "0px",
                zIndex: "1",
                width: "30px",
            }}
            onClick={onClick}
        />
    );
}

const AboutUs = (props) => {
    return (
        <div className={style.section}>
            <div className={style.wrap}>
                <div className={style.wrapGallery}>
                    <SliderGallery gallery={dataAboutUs.gallery} />
                </div>
                <div className={style.wrapInfo}>
                    <div className={style.title}>
                        {dataAboutUs.title}
                    </div>
                    <div className={style.text}>
                        {dataAboutUs.text}
                    </div>
                </div>
            </div>
        </div>
    )
}

class SliderGallery extends React.Component {
    render() {
        var settings = {
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
        };
        return (
            <Slider {...settings}>
              {this.props.gallery.map((value, index) => {
                    return (
                        <div key = {index}>
                            <img className={style.imgGallery} src={value} alt="gallery" />
                        </div>
                    )
                })}
              
            </Slider>
        );
    }
}


export default AboutUs;