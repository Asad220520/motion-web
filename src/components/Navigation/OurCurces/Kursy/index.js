import React, { useState } from "react";
import "./index.scss";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Kursy = ({ el }) => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    axios(`http://13.48.46.219/api/v1/courses/courses/`).then((res) =>
      setDetail(res.data.results)
    );
  }, []);
  // console.log('detail',detail);
  const nav = useNavigate();
  return (
    <div id="kursy">
      <div className="izyk">
        <div className="izyk--front">
          <div className="izyk--front__block">
            <img
              className="izyk--front__block--img"
              src={el.images.map((el) => el.image)}
              alt="img"
            />
          </div>
          <div className="izyk--front__group">
            <h2>{el.name}</h2>
            <p>{el.description}</p>
            <div className="izyk--front__group--btns">
              {el.courses_stacks.map((el) => (
                <button>{el.stack}</button>
              ))}
            </div>
            <div className="izyk--front__group--btn">
              <button onClick={() => nav(`/front/${el.id}`)} className="btn1">
                Подробнее
              </button>
              <button className="btn2">Оставить заявку</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kursy;
