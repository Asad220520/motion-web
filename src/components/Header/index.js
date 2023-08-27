import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import "./index.scss";
import logo from "../../img/logo.png";
import { LanguageContext } from "../../context";
import axios from "axios";
import { BASE_URL } from "../../API";
import { WiDaySunny } from "react-icons/wi";

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
  const navRef = useRef();

  const { language, setLanguage } = useContext(LanguageContext);
  const { dark, setDark } = useContext(LanguageContext);
  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const showBurger = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div
      style={{
        background: dark ? "#1c1c1c" : "",
      }}
      id="header"
    >
      <div className="container">
        <div style={{ background: "--hover-color:" }} className="header">
          <nav className="nav">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
            <ul
              ref={navRef}
              style={{
                background: dark ? "#1c1c1c" : "#fff",
              }}
              className="menu"
            >
              <li className="menu__item" onClick={showBurger}>
                <NavLink
                  style={{
                    color: dark ? "#fff" : "#000",
                  }}
                  to={"/"}
                >
                  {language === ""
                    ? "Главное"
                    : language === "ky"
                    ? "Негизги"
                    : "Main"}
                </NavLink>
              </li>
              <li className="menu__item" onClick={showBurger}>
                <NavLink
                  style={{
                    color: dark ? "#fff" : "#000",
                  }}
                  to={"/aboutUs"}
                >
                  {language === ""
                    ? "О нас"
                    : language === "ky"
                    ? "Биз жөнүндө"
                    : "About Us"}
                </NavLink>
              </li>
              <li className="okurs" style={{ position: "relative" }}>
                <NavLink
                  style={{
                    color: dark ? "#fff" : "#000",
                  }}
                  to={"/curse/1"}
                >
                  {language === ""
                    ? " О курсах"
                    : language === "ky"
                    ? "Курс жөнүндө"
                    : "About courses"}
                </NavLink>
                <ul
                  className="ulgr"
                  style={{
                    boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.4",
                    background: "white",
                    padding: "10px 10px",
                    top: "22px",
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
                      >
                        {el.name}
                      </li>
                    </>
                  ))}
                </ul>
              </li>
              <li className="menu__item" onClick={showBurger}>
                <NavLink
                  activeClassName="active"
                  style={{
                    color: dark ? "#fff" : "#000",
                  }}
                  to={"/club"}
                >
                  {language === ""
                    ? "Клуб"
                    : language === "ky"
                    ? "Клуб"
                    : "Club"}
                </NavLink>
              </li>
              <li className="menu__item" onClick={showBurger}>
                <a
                  style={{
                    color: dark ? "#fff" : "#000",
                  }}
                  href="#contact"
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
                <NavLink
                  style={{
                    color: dark ? "#fff" : "#000",
                  }}
                  to={"/blog"}
                >
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
              <div className="dark" onClick={() => setDark(!dark)}>
                <WiDaySunny
                  style={{
                    color: dark ? "#fff" : "",
                  }}
                />
              </div>
              {/* <GrLanguage
                style={{
                  color: dark ? "#fff" : "",
                }}
                className="icon"
              /> */}

              <span
                style={{
                  color: dark ? "#fff" : "",
                }}
                className={language === "ky" ? "selected" : ""}
                onClick={() => handleLanguageChange("ky")}
              >
                КР&nbsp;/
              </span>
              <span
                style={{
                  color: dark ? "#fff" : "",
                }}
                className={language === "" ? "selected" : ""}
                onClick={() => handleLanguageChange("")}
              >
                РУС&nbsp;/
              </span>
              <span
                style={{
                  color: dark ? "#fff" : "",
                }}
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
