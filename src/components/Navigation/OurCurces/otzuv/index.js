import React from 'react'
import './index.scss'
import {HiArrowLongLeft,HiArrowLongRight} from 'react-icons/hi2'
import ot from "../../../../img/ot.png"
import Slider from "react-slick";

const Otzyv = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        Arrows: true,
        nextArrow: <HiArrowLongRight/> ,
        prevArrow: <HiArrowLongLeft/>
      };
  return (
      <div id="otzyv">
         <div className="container">
        <div className="otzyv">
        <div className="otzyv--text">
            <h3>Отзывы студентов</h3>
            <div className="otzyv--text__icon">
            <HiArrowLongLeft className='icon'/>
          <HiArrowLongRight className='icon'/>
            </div>
        </div>
       <div className="otzyv--slid">
       <Slider {...settings} className='otzyv--slid__group'>
            <div className="otzyv--slid__block">
                <img src={ot} alt="img" />
            </div> 
            <div className="otzyv--slid__block">
                <img src={ot} alt="img" />
            </div>
            <div className="otzyv--slid__block">
                <img src={ot} alt="img" />
            </div> 
        </Slider>
       </div>
      </div>

       </div>
      </div>
  )
}

export default Otzyv
