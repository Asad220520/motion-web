import React, { useState } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { HiXMark} from "react-icons/hi2"
import { BiFontSize } from "react-icons/bi";

const Obusheni = () => {
  const [online,setOnline] = useState(false)
  const [online1,setOnline1] = useState(false)
  const dispatch = useDispatch()
  const {ten} = useSelector(s => s)
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
            dispatch({type:'TEN',payload:true})
            setOnline1(false)
            setOnline(true)}} className="obucheni--modal__ofline">
            <h2>Офлайн</h2>
          </div>
          <div onClick={() => {
            dispatch({type:'TEN',payload:true})
            setOnline(false)
            setOnline1(true)}} className="obucheni--modal__online">
            <h2>Онлайн</h2>
          </div>
          <div style={{
            display: online ? 'block' : 'none'
          }} className="ofli">
            <HiXMark onClick={() => {
              setOnline1(false)
            setOnline(false)
              dispatch({type:'TEN', payload: false})
            }} style={{position:'absolute',
              right:'30px',
              top:'30px',
              fontSize:'35px',
              color:'white'
          }}/>

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
            <HiXMark onClick={() => {
              setOnline1(false)
            setOnline(false)
              dispatch({type:'TEN', payload: false})
            }} style={{position:'absolute',
              right:'30px',
              top:'30px',
              fontSize:'35px',
              color:'white'
          }}/>
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
