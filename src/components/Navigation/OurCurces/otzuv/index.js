import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import "./media.scss";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import axios from "axios";
import { BASE_URL } from "../../../../API";
import { LanguageContext } from "../../../../context";

const Otzyv = ({ dark }) => {
  const [videos, setVideos] = useState([]);
  const { language } = useContext(LanguageContext);
  console.log(videos);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    axios(`${BASE_URL}/${language}/api/v1/blog/reviews/`).then((res) =>
      setVideos(res.data.results)
    );
  }, [language]);

  return (
    <div
      style={{
        background: dark
          ? "linear-gradient(315deg, #131313 16.69%, rgba(28, 28, 28, 0.87) 100%)"
          : "",
        borderBottom: dark ? "1px solid #fff" : "",
      }}
      id="otzyv"
    >
      <div className="container">
        <h1
          style={{
            color: dark ? "#fff" : "",
          }}
        >
          Отзывы студентов
        </h1>
        <div
          style={{
            background: dark ? "#000" : "",
          }}
          className="otzyv"
        >
          {/* <div className="otzyv--text__icon">
            <div className="icon">
              <HiArrowLongLeft />
            </div>
          </div> */}
          <div className="otzyv--slid">
            <div className="otzyv--slid__group">
              {videos.map((el, i) => (
                <div
                  style={{
                    border: dark ? "1px solid #fff" : "",
                  }}
                  key={i}
                  className="otzyv--slid__block"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <video className="otzyv--slid__block-vid" controls>
                    <source className="vidi" src={el.file} type="video/mp4" />
                  </video>
                  {hoveredIndex === i && (
                    <svg
                      className="plearr"
                      xmlns="http://www.w3.org/2000/svg"
                      width="55"
                      height="59"
                      viewBox="0 0 65 79"
                      fill="none"
                    >
                      <path
                        d="M65 39.5L0.5 78.9042L0.5 0.0958443L65 39.5Z"
                        fill="white"
                      />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* <div className="otzyv--text__icon">
            <div className="icon">
              <HiArrowLongRight />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Otzyv;
