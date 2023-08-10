import React, { useRef, useState } from "react";
import "./index.scss";
import "./media.scss"
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import ot from "../../../../img/ot.png";
import Slider from "react-slick";

const Otzyv = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextButtonClick = () => {
    sliderRef.current.slickNext();
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevButtonClick = () => {
    sliderRef.current.slickPrev();
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const settings = {
    ref: sliderRef,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 905,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="otzyv">
      <div className="container">
        <div className="otzyv">
          <div className="otzyv--text">
            <h3>Отзывы студентов</h3>
            <div className="otzyv--text__icon">
              <HiArrowLongLeft
                className={`icon ${currentIndex === 0 ? "disabled" : ""}`}
                onClick={handlePrevButtonClick}
              />
              <HiArrowLongRight
                className={`icon ${currentIndex === 2 ? "disabled" : ""}`}
                onClick={handleNextButtonClick}
              />
            </div>
          </div>
          <div className="otzyv--slid">
            <Slider {...settings} className="otzyv--slid__group">
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
  );
};

export default Otzyv;
