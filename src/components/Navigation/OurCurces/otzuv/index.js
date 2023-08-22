import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import "./media.scss";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import axios from "axios";
import { BASE_URL } from "../../../../API";
import { LanguageContext } from "../../../../context";

const Otzyv = () => {
  const [videos, setVideos] = useState([]);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    axios(`${BASE_URL}/${language}/api/v1/blog/reviews/`).then((res) =>
      setVideos(res.data.results)
    );
  }, [language]);

  const [currentPage, setCurrentPage] = useState(0);
  const videosPerPage = 3;
  const totalVideos = videos.length;
  const totalPages = Math.ceil(totalVideos / videosPerPage);

  const handleNextSlide = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevSlide = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? totalPages - 1 : prevPage - 1
    );
  };

  const startIndex = currentPage * videosPerPage;
  const visibleVideos = videos.slice(startIndex, startIndex + videosPerPage);
  return (
    <div id="otzyv">
      <div className="container">
        <div className="otzyv">
          <div className="otzyv--text">
            <h3>
              {language === ""
                ? "Отзывы студентов"
                : language === "ky"
                ? "студенттердин пикири"
                : "Student Reviews"}
            </h3>
            <div className="otzyv--text__icon">
              <div className="icon" onClick={handlePrevSlide}>
                <HiArrowLongLeft />
              </div>
            </div>
          </div>
          <div className="otzyv--slid">
            <div className="otzyv--slid__group">
              {visibleVideos.map((el, i) => (
                <div key={i} className="otzyv--slid__block">
                  <video className="otzyv--slid__block-vid" controls>
                    <source className="vidi" src={el.file} type="video/mp4" />
                  </video>
                </div>
              ))}
            </div>
          </div>
          <div className="otzyv--text__icon">
            <div className="icon" onClick={handleNextSlide}>
              <HiArrowLongRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otzyv;
