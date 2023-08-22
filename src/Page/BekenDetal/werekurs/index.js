import React from "react";
// import "./index.scss";
import neg from "../../../img/neg.png";

const WereKurs = ({ language }) => {
  return (
    <div className="container">
      <div className="were">
        <h1>
          {language === ""
            ? "Кому подойдёт этот курс"
            : language === "ky"
            ? "Бул курс кимдер үчүн"
            : "Who Is This Course For"}
        </h1>
        <div className="were--group">
          <div className="were--group__block ">
            <div className="were--group__block--img">
              <img src={neg} alt="img" />
            </div>
            <h3>
              {language === ""
                ? "Новичкам"
                : language === "ky"
                ? "үйрөнчүктөр үчүн"
                : "Beginners"}
            </h3>
            <p>
              {language === ""
                ? " Python считается отличным языком для начинающих, так как он имеет простый и понятный синтаксис. Курс поможет новичкам освоить основы программирования, научиться решать задачи, писать свои первые программы и разрабатыват простые проекты."
                : language === "ky"
                ? "Python үйрөнчүктөр үчүн мыкты тил болуп эсептелет, анткени ал жөнөкөй жана жөнөкөй синтаксиске ээ. Курс үйрөнчүктөргө программалоонун негиздерин үйрөнүүгө, маселелерди чечүү жолдорун үйрөнүүгө, биринчи программаларын жазууга жана жөнөкөй долбоорлорду иштеп чыгууга жардам берет."
                : "Python is considered a great language for beginners as it has a simple and straightforward syntax. The course will help beginners learn the basics of programming, learn how to solve problems, write their first programs and develop simple projects."}
            </p>
          </div>
          <div className="were--group__block">
            <div className="were--group__block--img">
              <img src={neg} alt="img" />
            </div>
            <h3>
              {language === ""
                ? "Студенты и учащиеся"
                : language === "ky"
                ? "Студенттер жана окуучулар"
                : "Students and pupils"}
            </h3>
            <p>
              {language === ""
                ? "Python широко используется в образовательных учреждениях и может быть важным компонентом в учебных программах по информатике, науке о данных, искусственному интеллекту и другим дисциплинам."
                : language === "ky"
                ? "Python билим берүү мекемелеринде кеңири колдонулат жана информатика илими боюнча окуу пландарынын маанилүү компоненти боло алат маалыматтар, жасалма интеллект жана башка дисциплиналар."
                : "Python is widely used in educational institutionsand can be an important component in curricula in computer science, the science of data, artificial intelligence and other disciplines."}
            </p>
          </div>
          <div className="were--group__block">
            <div className="were--group__block--img ">
              <img src={neg} alt="img" />
            </div>
            <h3>
              {language === ""
                ? "Программисты других языков"
                : language === "ky"
                ? "Башка тилдердин программисттери"
                : "Programmers of other languages"}
            </h3>
            <p>
              {language === ""
                ? " Если у вас уже есть опыт программированияна других языках, Python может стать хорошим дополнением к вашим навыкам. Он может быть использован для автоматизации задач, веб-разработки, анализа данных и многих других областей."
                : language === "ky"
                ? "Эгер сизде программалоо тажрыйбасы бар болсобашка тилдерде Python сиздин жөндөмүңүзгө жакшы кошумча боло алат.Ал тапшырманы автоматташтыруу, веб-иштеп чыгуу, маалыматтарды талдоо жана башка көптөгөн тармактарда колдонулушу мүмкүн."
                : "If you already have programming experiencein other languages, Python can be a good addition to your skillset. It can be used for task automation, web development, data analysis, and many other areas."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WereKurs;
