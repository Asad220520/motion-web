import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import { GrLanguage } from "react-icons/gr";
import logo from "../../img/logo.png";
const Header = () => {
  const handleContactClick = (event) => {
    event.preventDefault();
    const footer = document.getElementById("contact");
    footer.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <nav className="nav">
            <Link to={'/'}>
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
              <li className="menu__item">
                <NavLink to={"/ourCurces"} className="menu__link">
                  О курсах
                </NavLink>
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
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
