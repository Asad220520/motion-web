import React, { useEffect, useState } from "react";
import NewCart from "./NewCart";
import "./index.scss";
import axios from "axios";
const NewInteres = () => {
  const [newDate, setNewDate] = useState([]);
  const news = async () => {
    const res = await axios(`http://3.83.165.209/api/v1/blog/news/`);
    const { data } = res;
    setNewDate(data.results);
  };
  useEffect(() => {
    news();
  }, []);
  console.log("new", newDate);

  return (
    <div id="newInteres">
      <div className="container">
        <div className="block">
          <h1 className="h1">Больше интересных новостей</h1>
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
