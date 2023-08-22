import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import GoodCard from "./GoodCard";
import "./index.scss";
import { BASE_URL } from "../../../../API";
import { LanguageContext } from "../../../../context";

const GoodState = () => {
  const [movies, setMovies] = useState([]);
  const { language } = useContext(LanguageContext);

  const getMovies = () => {
    axios
      .get(`${BASE_URL}/${language}/api/v1/blog/best-articles/`)
      .then((res) => setMovies(res.data.results))
      .catch((error) => {
        console.error("Error fetching additional movies:", error);
      });
  };

  useEffect(() => {
    getMovies();
  }, [language]);
  return (
    <div id="goodState">
      <div className="container">
        <h1 data-aos="fade-right">
          {language === ""
            ? "Лучшие статьи"
            : language === "ky"
            ? "Жакшы макалалар"
            : "Best Articles"}
        </h1>
        <div className="goodState">
          {movies.map((el) => (
            <GoodCard el={el} key={el.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoodState;