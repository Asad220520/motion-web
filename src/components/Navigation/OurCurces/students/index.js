import React from "react";
import "./index.scss";
import rec from "../../../../img/book.png";
import pla from "../../../../img/platf.png";
import ress from "../../../../img/ress.png";
import shop from "../../../../img/bshop.png";
import { Link } from "react-router-dom";

const Students = () => {
  return (
    
        <div className="student">
      <div className="student--group">
        <div className="student--group__block">
          <h1>Проекты студентов <span>MOTIN WEB IT ACADEMY</span></h1>
        </div>
        <div className="student--group__block">
          <Link to="https://bookshop-nu.vercel.app/"> <img src={shop} alt="img" />   </Link>
        </div>
        <div className="student--group__block">
        <Link to="">   <img src={pla} alt="img" /></Link>
        </div>
        <div className="student--group__block">
          <Link to="https://self-levelup.vercel.app/"><img src={rec} alt="img" /></Link>
        
        </div>
        <div className="student--group__block">
          <Link to="https://restaurant1-three.vercel.app/">
              <img src={ress} alt="img" />
          </Link>
        </div>
        <div className="student--group__block">
         <button className="btn">Показать ещё<p>...</p></button>
        </div>
      </div>
    </div>
     

    
  );
};

export default Students;
