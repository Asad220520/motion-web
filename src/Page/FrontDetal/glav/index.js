import React from "react";
import black1 from "../../../img/black1.png";
import black2 from "../../../img/black2.png";
import black3 from "../../../img/black3.png";
import black4 from "../../../img/black4.png";
import black5 from "../../../img/black5.png";
import black6 from "../../../img/back6.png";
import black7 from "../../../img/black7.png";
import black8 from "../../../img/black8.png";
// import axios from "axios";

const Glav = () => {
  // const [detail, setDetail] = useState({});
  // useEffect(() => {
  //   axios(`http://3.83.165.209/api/v1/courses/courses/4/`).then((res) =>
  //     setDetail(res.data)
  //   );
  // }, []);
  const handleContactClick = (event) => {
    event.preventDefault();
    const footer = document.getElementById("contact");
    footer.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div id="himages">
      <div className="img">
        <img src={black1} className="img1 group" alt="" />
        <img src={black2} className="img2 group" alt="" />
        <img src={black3} className="img3 group" alt="" />
        <img src={black4} className="img4 group" alt="" />
        <img src={black5} className="img5 group" alt="" />
        <img src={black6} className="img6 group" alt="" />
        <img src={black7} className="img7 group" alt="" />
        <img src={black8} className="img8 group" alt="" />
      </div>
      <div className="himages">
        <h1>
        UI/UX <br />
          {/* {detail.name?.slice(0,5)} <br /> */}
          <span>DESIGN 
            {/* {detail.name?.slice(5)}  */}
          </span>
          
        </h1>
        <p> 
          {/* {detail.description} */}
          UX/UI-дизайн — это процесс создания интерактивных, удобных 
          интерфейсов. Отличный вариант профессии для творческих людей, которым нравится решать проблемы
           пользователей и создавать что-то новое, сочетая логику и эстетику.
        </p>
        <button onClick={handleContactClick}>Оставить заявку</button>
      </div>
    </div>
  );
};

export default Glav;
