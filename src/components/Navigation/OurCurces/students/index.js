import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../../../context";
import axios from "axios";
import { BASE_URL } from "../../../../API";

const Students = ({ dark }) => {
  const { language } = useContext(LanguageContext);
  const [project, setProject] = useState([]);
  const getProject = async () => {
    const res = await axios(`${BASE_URL}/${language}/api/v1/blog/projects/`);
    const { data } = res;
    setProject(data.results);
  };
  useEffect(() => {
    getProject();
  }, [language]);
  console.log("proja", project);

  return (
    <div
      id="student"
    >
      <div className="container">
        <div className="student">
          <div className="student--group">
            <div className="student--group__block">
              <h1>
                {language === ""
                  ? "Проекты студентов"
                  : language === "ky"
                  ? "Студенттердин проекттери"
                  : "Student Projects"}{" "}
                <br />
                <span>MOTION WEB IT ACADEMY</span>
              </h1>
            </div>
            <div className="student--group__block-s">
              {project.map((el) => (
                <Link to={el.url} target="_blanck">
                  <img src={el.image} alt="img" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
