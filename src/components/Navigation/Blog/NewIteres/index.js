import React, { useContext, useEffect, useState } from "react";
import NewCart from "./NewCart";
import "./index.scss";
import axios from "axios";
import { BASE_URL } from "../../../../API";
import { LanguageContext } from "../../../../context";
const NewInteres = () => {
  const [newDate, setNewDate] = useState([]);
  const { language } = useContext(LanguageContext);

  const news = async () => {
    const res = await axios(`${BASE_URL}/${language}/api/v1/blog/news/`);
    const { data } = res;
    setNewDate(data.results);
  };
  useEffect(() => {
    news();
  }, [language]);
  return (
    <div id="newInteres">
      <div className="container">
        <div className="block">
          <h1 className="h1" data-aos="fade-right">
            Больше интересных новостей
          </h1>
          <div className="newInteres">
            {newDate.map((el) => (
              <NewCart ne={el} key={el.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewInteres;
