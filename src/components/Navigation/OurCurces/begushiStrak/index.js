import React, { useState } from "react";
import "./index.scss";
import "./media.scss"
import beg1 from "../../../../img/beg.png";
import beg2 from "../../../../img/бегу 2.png";

const BegushiStrak = () => {
  return (
    <div id="begushi">
        <marquee className="begu">
        <img className="begu--img" src={beg1} alt="img" /> 
        </marquee> 
         <marquee className="begu2" behavior="" direction="">
          <img className="begu2--img" src={beg2} alt="img"  />
        </marquee>
    </div>
  );
};

export default BegushiStrak;
