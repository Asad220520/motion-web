import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import "./index.scss";
import { GrLanguage } from "react-icons/gr";
import logo from "../../img/logo.png";
import { LanguageContext } from "../../context";
import axios from "axios";
import { BASE_URL } from "../../API";
const Header = () => {
  const [bob, setBob] = useState([]);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    axios(`${BASE_URL}/${language}/api/v1/courses/courses/
`).then((res) => setBob(res.data.results));
    window.scroll(0, 0);
  }, []);
  console.log("head", bob);
  const handleContactClick = (event) => {
    event.preventDefault();
    const footer = document.getElementById("contact");
    footer.scrollIntoView({ behavior: "smooth" });
    footer.style.padding = "50px 0";
  };

  const nav = useNavigate();
  const [modal, setModal] = useState(false);
  const { id } = useParams();
  const navRef = useRef();

  const { language, setLanguage } = useContext(LanguageContext);
  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const showBurger = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div id="header">
      <div className="container">
        <div style={{ background: "--hover-color:" }} className="header">
          <nav className="nav">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
            <ul ref={navRef} className="menu">
              <li className="menu__item" onClick={showBurger}>
                <NavLink to={"/"} className="menu__link">
                  {language === ""
                    ? "Главное"
                    : language === "ky"
                    ? "Негизги"
                    : "Main"}
                </NavLink>
              </li>
              <li className="menu__item" onClick={showBurger}>
                <NavLink to={"/aboutUs"} className="menu__link">
                  {language === ""
                    ? "О нас"
                    : language === "ky"
                    ? "биз жонундо"
                    : "About Us"}
                </NavLink>
              </li>
              <li className="okurs" style={{ position: "relative" }}>
                <NavLink to={"/curse/1"} className="menu__link">
                  {language === ""
                    ? " О курсах"
                    : language === "ky"
                    ? "курс жонундо"
                    : "About courses"}
                </NavLink>
                <ul
                  className="ulgr"
                  style={{
                    boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.4",
                    background: "white",
                    padding: "10px 10px",
                    top: "28px",
                    left: "0px",
                    borderRadius: "8px",
                    position: "absolute",
                    zIndex: "3",
                  }}
                >
                  {bob.map((el) => (
                    <>
                      <li
                        onClick={() => {
                          nav(`/curse/${el.id}`);
                          setModal(false);
                          showBurger();
                          setActiveItem(el.id);
                        }}
                        className={`li ${activeItem === el.id ? "active" : ""}`}
                        style={{
                          transition: ".4s",
                          cursor: "pointer",
                          fontSize: "15px",
                          textTransform: "capitalize",
                        }}
                      >
                        {el.name}
                      </li>
                    </>
                  ))}
                </ul>
              </li>
              <li className="menu__item" onClick={showBurger}>
                <NavLink to={"/club"} className="menu__link">
                  {language === ""
                    ? "Клуб"
                    : language === "ky"
                    ? "Клуб"
                    : "Club"}
                </NavLink>
              </li>
              <li className="menu__item" onClick={showBurger}>
                <a
                  href="#contact"
                  className="menu__link"
                  onClick={handleContactClick}
                >
                  {language === ""
                    ? "Контакты"
                    : language === "ky"
                    ? "Байланыштар"
                    : "Contacts"}
                </a>
              </li>
              <li className="menu__item" onClick={showBurger}>
                <NavLink to={"/blog"} className="menu__link">
                  {language === ""
                    ? "Блог"
                    : language === "ky"
                    ? "Блог"
                    : "Blog"}
                </NavLink>
              </li>
              <ul className="nav-btn nav-close-btn" onClick={showBurger}></ul>
            </ul>
            <div className="nav__language">
              <GrLanguage className="icon" />
              <span
                className={language === "ky" ? "selected" : ""}
                onClick={() => handleLanguageChange("ky")}
              >
                КР&nbsp;/
              </span>
              <span
                className={language === "" ? "selected" : ""}
                onClick={() => handleLanguageChange("")}
              >
                РУС&nbsp;/
              </span>
              <span
                className={language === "en" ? "selected" : ""}
                onClick={() => handleLanguageChange("en")}
              >
                ENG&nbsp;/
              </span>
              <ul onClick={showBurger} className="nav-btn">
                <li></li>
                <li className="li"></li>
                <li></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
