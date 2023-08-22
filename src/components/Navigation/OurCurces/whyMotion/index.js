import React, { useContext } from "react";
import "./index.scss";
import "./media.scss";
import smail from "../../../../img/smiling.png";
import roun from "../../../../img/roun.png";
import chek from "../../../../img/check.png";
import roket from "../../../../img/rocket .png";
import { LanguageContext } from "../../../../context";

const Whymotion = () => {
  const { language } = useContext(LanguageContext);
  window.scroll(0, 0)
  return (
    <div id="why">
      <div className="container">
        <div className="why">
          <h1>
            {language === ""
              ? "Почему"
              : language === "ky"
              ? "Эмне үчүн "
              : "Why"}{" "}
            <span>MOTION WEB IT ACADEMY </span>
            {language === ""
              ? "- лучший выбор для обучения"
              : language === "ky"
              ? "- окуу үчүн эң мыкты тандоо"
              : "- the best choice for learning"}
          </h1>
          <div className="why--text">
            <div className="why--text__block">
              <img src={smail} alt="img" />
              <div className="why--text__block--group">
                <h2>
                  {language === ""
                    ? "Обучение с нуля до Junior"
                    : language === "ky"
                    ? "нөлдөн Juniorга чейинки окутуу"
                    : "Learning from scratch to Junior"}
                </h2>
                <p>
                  {language === ""
                    ? "На курсе вы научитесь создавать интерфейсы веб-сервисов с помощью языков программирования и дополнительных технологий. Сможете разрабатывать планировщики задач, мессенджеры, интернет-магазины"
                    : language === "ky"
                    ? "Курста сиз программалоо тилдерин жана кошумча технологияларды колдонуу менен веб-сервис интерфейстерин кантип түзүүнү үйрөнөсүз. Сиз тапшырмаларды пландоочуларды, заматта кабарчыларды, онлайн дүкөндөрдү иштеп чыга аласыз"
                    : "In this course, you will learn to create interfaces for web services using programming languages and additional technologies. You will be able to develop task schedulers, messengers, online stores."}
                </p>
              </div>
            </div>
            <div className="why--text__block">
              <img src={roun} alt="img" />
              <div className="why--text__block--group">
                <h2>
                  {language === ""
                    ? "Open Space"
                    : language === "ky"
                    ? "Open Space"
                    : "Open Space"}
                </h2>
                <p>
                  {language === ""
                    ? "Наша компания предоставляет Open Space для наших студентов, где вы сможете комфортно заниматься учёбой, заводить знакомства с другими студентами и развивать навыки коммуникации"
                    : language === "ky"
                    ? "Биздин компания студенттерибиз үчүн Ачык мейкиндикти камсыздайт, анда сиз ыңгайлуу окууга, башка студенттер менен достошууга жана баарлашуу жөндөмүн өнүктүрүүгө болот"
                    : "Our company provides Open Space for our students, where you can comfortably study, make friends with other students and develop communication skills"}
                </p>
              </div>
            </div>
            <div className="why--text__block">
              <img src={chek} alt="img" />
              <div className="why--text__block--group">
                <h2>
                  {language === ""
                    ? "Английский"
                    : language === "ky"
                    ? "Английский"
                    : "English"}
                </h2>
                <p>
                  {language === ""
                    ? "На данный момент на рынке больше востребованы специалисты владеющие английским языком, так как это даёт возможность выводить продукт в мировую арену. Поэтому мы предоставляем нашим студентам БЕСПЛАТНЫЕ языковые курсы"
                    : language === "ky"
                    ? "Учурда рынокто англис тилин билген адистер көбүрөөк суроо-талапка ээ, анткени бул продукцияны дүйнөлүк аренага алып чыгууга мүмкүндүк берет. Ошондуктан биз студенттерибизге АКЫСЫЗ тил курстарын беребиз"
                    : "At the moment, specialists who speak English are more in demand on the market, as this makes it possible to bring the product to the world stage. That's why we provide our students with FREE language courses"}
                </p>
              </div>
            </div>
            <div className="why--text__block">
              <img src={roket} alt="img" />
              <div className="why--text__block--group">
                <h2>
                  {language === ""
                    ? "IT club"
                    : language === "ky"
                    ? "IT club"
                    : "IT club"}
                </h2>
                <p>
                  {language === ""
                    ? "IT-Клуб это мост между курсом и реальной работой. Анализируя курсы в Бишкеке мы решили открыть клуб, который поможет студентам подготовиться к реальным проектам. Участники не заканчивая курс смогут понять как работать в команде, научатся презентовать свои работы и поймут какие проблемы бывают на стадии разработки"
                    : language === "ky"
                    ? "IT Club – бул курс менен чыныгы иштин ортосундагы көпүрө. Бишкектеги курстарды талдап, студенттерге реалдуу долбоорлорго даярданууга жардам бере турган клуб ачууну чечтик. Курсту бүтүрбөстөн эле катышуучулар командада кантип иштөө керектигин түшүнө алышат, өз иштерин кантип көрсөтүүнү үйрөнүшөт жана өнүгүү стадиясында кандай көйгөйлөр бар экенин түшүнүшөт."
                    : "IT Club is a bridge between the course and real work. Analyzing courses in Bishkek, we decided to open a club that will help students prepare for real projects. Participants without completing the course will be able to understand how to work in a team, learn how to present their work and understand what problems there are at the development stage"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whymotion;
