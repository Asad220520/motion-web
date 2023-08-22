import React, { useContext, useRef, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import "./index.scss";
import { GrClose, GrLanguage } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../img/logo.png";
import { LanguageContext } from "../../context";

const Header = () => {
  const handleContactClick = (event) => {
    event.preventDefault();
    const footer = document.getElementById("contact");
    footer.scrollIntoView({ behavior: "smooth" });
    footer.style.padding = "50px 0";
  };

  const nav = useNavigate();
  const [modal, setModal] = useState(false);
  const [colo, setColo] = useState(1);
  const { id } = useParams();
  const navRef = useRef();

  const { language, setLanguage } = useContext(LanguageContext);
  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const showBurger = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  console.log("lan", language);

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
                <NavLink
                  // onClick={() => setModal(!modal)}
                  to={"/frontt"}
                  className="menu__link"
                >
                  {language === ""
                    ? " О курсах"
                    : language === "ky"
                    ? "курс жонундо"
                    : "About courses"}
                </NavLink>
                <ul
                  className="ulgr"
                  style={{
                    boxShadow: "8px 8px 10px #000000ad",
                    background: "white",
                    padding: "10px 35px 15px 35px ",
                    top: "28px",
                    left: "-32px",
                    borderRadius: "15px",
                    position: "absolute",
                    zIndex: "3",
                    // display: modal ? "block" : "none",
                  }}
                >
                  <li
                    onClick={() => {
                      setColo(1);
                      nav("/disain");
                      setModal(false);
                      showBurger();
                    }}
                    className="li"
                    style={{
                      color: colo === 1 ? "blue" : "black",
                      borderBottom: "1px solid black",
                      transition: ".4s",
                      cursor: "pointer",
                      fontSize: "18px",
                      textTransform: "capitalize",
                    }}
                  >
                    disain
                  </li>
                  <li
                    onClick={() => {
                      nav("/frontt");
                      setColo(2);
                      setModal(false);
                      showBurger();
                    }}
                    className="li"
                    style={{
                      color: colo === 2 ? "blue" : "black",
                      borderBottom: "1px solid black",
                      transition: ".4s",
                      cursor: "pointer",
                      fontSize: "18px",
                      textTransform: "capitalize",
                    }}
                  >
                    fronEnd
                  </li>
                  <li
                    onClick={() => {
                      nav("/bekend");
                      setColo(3);
                      setModal(false);
                      showBurger();
                    }}
                    className="li"
                    style={{
                      color: colo === 3 ? "blue" : "black",
                      borderBottom: "1px solid black",
                      transition: ".4s",
                      cursor: "pointer",
                      fontSize: "18px",
                      textTransform: "capitalize",
                    }}
                  >
                    bakend
                  </li>
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
