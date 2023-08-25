import React from "react";
import "./index.scss";
// import "./media.scss";

const BegushiStrak = ({ dark }) => {
  return (
    <div
      style={{
        background: dark ? "#000" : "",
      }}
      className="begushi"
      id="begushi"
    >
      <div
        style={{
          background: dark ? "red" : "",
        }}
        className="begu"
      >
        <p className="begu--text">КУРСЫ</p>
      </div>
      <div
        style={{
          background: dark ? "red" : "",
        }}
        className="begu2"
      >
        <p className="begu2--text">BACKEND UX UI FRONTEND</p>
      </div>
    </div>
  );
};

export default BegushiStrak;

// import React, { useState } from "react";
// import "./index.scss";
// import "./media.scss"
// import beg1 from "../../../../img/beg.png";
// import beg2 from "../../../../img/бегу 2.png";

// const BegushiStrak = () => {
//   return (
//     <div id="begushi">
//         <marquee className="begu">
//         <img className="begu--img" src={beg1} alt="img" />
//         </marquee>
//          <marquee className="begu2" behavior="" direction="">
//           <img className="begu2--img" src={beg2} alt="img"  />
//         </marquee>
//     </div>
//   );
// };

// export default BegushiStrak;
