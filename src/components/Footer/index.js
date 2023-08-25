import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import logo from "../../img/logo.png";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTelegram } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { LanguageContext } from "../../context";
import axios from "axios";
import { BASE_URL } from "../../API";

const Footer = () => {
  const [bob, setBob] = useState([]);
  useEffect(() => {
    axios(`${BASE_URL}/${language}/api/v1/courses/courses/
`).then((res) => setBob(res.data.results));
    window.scroll(0, 0);
  }, []);
  console.log("head", bob);
  const { language } = useContext(LanguageContext);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const handleLinkClick = () => {
    window.scroll(0, 0);
  };
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <nav className="nav">
            <iframe
              width="485"
              height="260"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2007.229943726576!2d74.58295229498374!3d42.8797850815963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9fc655f0bb9%3A0x20d210594faeb18!2sMotion%20Web%20LLC!5e0!3m2!1sen!2skg!4v1631743668475!5m2!1sen!2skg"
              allowFullScreen
              title="Google Maps"
            ></iframe>
            <div className="nav__wrap">
              <div className="nav__wrap-block">
                <img src={logo} alt="" />
                <ul className="nav__wrap-block-icons">
                  <li>
                    <BiLogoLinkedin className="icon" />
                  </li>
                  <li>
                    <Link
                      to={"https://www.instagram.com/motion_web/"}
                      target="_blank"
                    >
                      <BiLogoInstagramAlt className="icon" />
                    </Link>
                  </li>
                  <li>
                    <FaTelegram className="icon" />
                  </li>
                  <li>
                    <Link
                      to={"https://www.youtube.com/@motionwebllc683"}
                      target="_blank"
                    >
                      <AiFillYoutube className="icon" />
                    </Link>
                  </li>
                </ul>
              </div>
              <ul className="menu">
                <li className="menu__item">
                  <Link to="/" className="menu__link">
                    {language === ""
                      ? "Курсы"
                      : language === "ky"
                      ? "Курстар"
                      : "Courses"}
                  </Link>
                  {bob.map((el) => (
                    <Link to={`curse/${el.id}/`} className="curs">
                      {el.name}
                    </Link>
                  ))}
                </li>
                <li className="menu__item">
                  <Link
                    to={"/aboutUs"}
                    className="menu__link"
                    onClick={handleLinkClick}
                  >
                    {language === ""
                      ? "О нас"
                      : language === "ky"
                      ? "Биз жөнүндө"
                      : "About Us"}
                  </Link>
                  <Link
                    to={"/club"}
                    className="menu__link"
                    onClick={handleLinkClick}
                  >
                    {language === "" ? "Клуб" : "Club"}
                  </Link>
                  <Link
                    to={"/"}
                    className="menu__link"
                    onClick={handleLinkClick}
                  >
                    FAQ
                  </Link>
                </li>
                <li className="menu__item-left">
                  <Link to="tel:+996700232400" className="menu__link">
                    +996 700 232 400
                  </Link>
                  <Link
                    to="mailto:motionweb312@gmail.com"
                    target="_blank"
                    className="menu__link"
                  >
                    motionweb312@gmail.com
                  </Link>
                  <Link className="menu__link">
                    {language === ""
                      ? "г. Бишкек, ул. Турусбекова 109/3"
                      : language === "ky"
                      ? "г. Бишкек, Турусбекова 109/3"
                      : "Bishkek, Turusbekova Street 109/3"}
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
