import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./index.scss";
import { GrLanguage } from "react-icons/gr";
import logo from "../../img/logo.png";
const Header = () => {
  const handleContactClick = (event) => {
    event.preventDefault();
    const footer = document.getElementById("contact");
    footer.scrollIntoView({ behavior: "smooth" });
  };
  const [modal, setModal] = useState(false);
  const nav = useNavigate();
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <nav className="nav">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
            <ul className="menu">
              <li className="menu__item">
                <NavLink to={"/"} className="menu__link">
                  Главное
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink to={"/aboutUs"} className="menu__link">
                  О нас
                </NavLink>
              </li>
              <li style={{ position: "relative" }} className="menu__item">
                <NavLink
                  onClick={() => setModal(!modal)}
                  to={""}
                  className="menu__link"
                >
                  О курсах
                </NavLink>
                <ul
                  style={{
                    boxShadow: "8px 8px 10px #000000ad",
                    background: "white",
                    padding: "10px 35px 15px 35px ",
                    top: "30px",
                    left: "-15px",
                    borderRadius: "15px",
                    position: "absolute",
                    zIndex: "3",
                    display: modal ? "block" : "none",
                  }}
                >
                  <li
                    className="li"
                    style={{
                      borderBottom: "1px solid black",
                      transition: ".4s",
                      cursor: "pointer",
                      fontSize: "18px",
                      color: "black",
                      textTransform: "capitalize",
                    }}
                  >
                    fronEnd
                  </li>
                  <li
                    className="li"
                    style={{
                      borderBottom: "1px solid black",
                      transition: ".4s",
                      cursor: "pointer",
                      fontSize: "18px",
                      color: "black",
                      textTransform: "capitalize",
                    }}
                  >
                    disain
                  </li>
                  <li
                    className="li"
                    style={{
                      borderBottom: "1px solid black",
                      transition: ".4s",
                      cursor: "pointer",
                      fontSize: "18px",
                      color: "black",
                      textTransform: "capitalize",
                    }}
                  >
                    bakend
                  </li>
                </ul>
              </li>
              <li className="menu__item">
                <NavLink to={"/club"} className="menu__link">
                  Клуб
                </NavLink>
              </li>
              <li className="menu__item">
                <a
                  href="#contact"
                  className="menu__link"
                  onClick={handleContactClick}
                >
                  Контакты
                </a>
              </li>
              <li className="menu__item">
                <NavLink to={"/blog"} className="menu__link">
                  Блог
                </NavLink>
              </li>
            </ul>
            <div className="nav__language">
              <GrLanguage className="icon" />
              <span>КР /</span>
              <span>РУС /</span>
              <span>ENG /</span>
              <ul className="burger">
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
