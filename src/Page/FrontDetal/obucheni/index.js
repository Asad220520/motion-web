import React, { useState } from "react";
import "./index.scss";
import "./media.scss"
import { HiXMark } from "react-icons/hi2";
// import { BiFontSize } from "react-icons/bi";

const Obusheni = () => {
  const [online, setOnline] = useState(false);
  const [ofline, setOfline] = useState(false);
  return (
    <>
    <div onClick={() => {
      setOfline(false)
      setOnline(false)
    }}
     style={{
      display:  ofline || online ? 'block' : 'none',
      width:'100%',height:'1000vh'
      ,background:'#000000cd'
      ,position:'absolute',top:'0',zIndex:'4'
  }}>
    </div>
     <div className="container">
      <div className="obucheni">
        <div className="obucheni--group">
          <div className="obucheni--group__block">
            <div className="obucheni--group__block--grou">
              <p>3 месяца</p>
              <span>Обучения</span>
            </div>
            <div className="obucheni--group__block--grou">
              <p>3 раза</p>
              <span>В неделю по 2 часа </span>
            </div>
            <div className="obucheni--group__block--grou">
              <p>3 раза</p>
              <span>Английский по 1 часуров</span>
            </div>
          </div>
        </div>
        <div className="obucheni--modal">

          <button
            onClick={() =>{
              setOfline(!ofline)
            setOnline(false)
            }}
            className="obucheni--modal__ofline"
          >
            <h2>Офлайн</h2>
          </button>
          <button
            onClick={ ()=>{
              setOnline(!online)
              setOfline(false)
            }}
            className="obucheni--modal__online"
          >
            <h2>Онлайн</h2>
          </button>
          <div
          style={{

            display: ofline ? 'block' : 'none'}}
            className="ofli"
          >
            <HiXMark
              onClick={() => {
                setOfline(false);
              }}
              style={{
                position: "absolute",
                right: "30px",
                top: "30px",
                fontSize: "35px",
                color: "white",
                cursor:'pointer'
              }}
            />
            <h2>Офлайн</h2>
            <ol>
              <li>
                В одной группе обучается всего 10-12-14 студентов стандартной
                формы.
              </li>
              <li>Занятия будут проходить на кыргызском языке.</li>
              <li>
                В Академии есть возможность практиковать внеклассное обучение в
                период с 09 до 22 (OPEN SPACE).
              </li>
            </ol>

          </div>

          <div
            style={{
              display: online ? "block" : "none",
            }}
            className="onli"
          >
            <HiXMark
              onClick={() => {
                setOnline(false);
              }}
              style={{
                position: "absolute",
                right: "30px",
                top: "30px",
                fontSize: "35px",
                color: "white",
                cursor:'pointer'
              }}
            />
            <h2>Онлайн</h2>
            <ol>
              <li>
                В одной группе обучается всего 10-12-14 студентов стандартной
                формы.
              </li>
              <li>Занятия будут проходить на кыргызском языке.</li>
              <li>
                В Академии есть возможность практиковать внеклассное обучение в
                период с 09 до 22 (OPEN SPACE).
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    </>
   
  );
};

export default Obusheni;
