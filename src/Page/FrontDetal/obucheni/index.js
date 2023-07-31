import React, { useState } from "react";
import "./index.scss";

const Obusheni = () => {
  const [online,setOnline] = useState(false)
  const [online1,setOnline1] = useState(false)
  return (
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
          <div onClick={() => {
            setOnline1(false)
            setOnline(!online)}} className="obucheni--modal__ofline">
            <h2>Офлайн</h2>
          </div>
          <div onClick={() => {
            setOnline(false)
            setOnline1(!online1)}} className="obucheni--modal__online">
            <h2>Онлайн</h2>
          </div>
          <div style={{
            display: online ? 'block' : 'none'
          }} className="ofli">
            <h2>Офлайн</h2>
            <ol>
              <li>В одной группе обучается всего 10-12-14 студентов стандартной формы.</li>
              <li>Занятия будут проходить на кыргызском языке.</li>
              <li>В Академии есть возможность практиковать внеклассное обучение в период с 09 до 22  (OPEN SPACE).</li>
            </ol>
          </div>
          <div style={{
            display: online1 ? 'block' : 'none'
          }} className="onli">
          <h2>Онлайн</h2>
            <ol>
              <li>В одной группе обучается всего 10-12-14 студентов стандартной формы.</li>
              <li>Занятия будут проходить на кыргызском языке.</li>
              <li>В Академии есть возможность практиковать внеклассное обучение в период с 09 до 22  (OPEN SPACE).</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Obusheni;
