import React, { useState } from "react";
import "./index.scss";
import beg1 from "../../../../img/бегу.png";
import beg2 from "../../../../img/бегу 2.png";

const BegushiStrak = () => {
  return (
    <div id="begushi">
      <div className="">
        <marquee className="begu">
        <img src={beg1} alt="img" /> 
        </marquee> 
         <marquee className="begu2" behavior="" direction="">
          <img src={beg2} alt="img" className="img2" />
        </marquee>
      </div>
    </div>
  );
};

export default BegushiStrak;
