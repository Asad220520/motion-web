import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { BASE_URL } from "../../../API";
import { LanguageContext } from "../../../context";
const InstaVido = () => {
  const { language, dark } = useContext(LanguageContext);
  const [videos, setVideos] = useState([]);
  console.log(videos);

  useEffect(() => {
    axios(`${BASE_URL}/${language}/api/v1/blog/reviews/`).then((res) =>
      setVideos(res.data.results)
    );
  }, []);
  return (
    <div className="insta">
      <div className="insta__block">
        <h3
          style={{
            color: dark ? "#fff" : "",
          }}
        >
          {language === ""
            ? "Самая оперативная и качественная обратная связь"
            : language === "ky"
            ? "Эң эффективдүү жана сапаттуу пикир"
            : "Most prompt and high-quality feedback"}
        </h3>
        <p
          style={{
            color: dark ? "#fff" : "",
          }}
        >
          {language === ""
            ? "Наши менторы дают подробный разбор ваших работ, отмечают ошибки и помогают их исправить."
            : language === "ky"
            ? "Биздин насаатчылар ишиңизге деталдуу талдоо берип, каталарды көрсөтүп, аларды оңдоого жардам берет."
            : "Our mentors provide detailed analysis of your work, highlight mistakes, and help fix them."}
        </p>
      </div>
      <div className="insta__video">
        {videos.map((el, i) => (
          <div>
            <video className="video" controls>
              <source className="vidi" src={el.file} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstaVido;
