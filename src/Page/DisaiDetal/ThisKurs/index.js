import React from "react";
import "./index.scss";
import "./media.scss";
const ThisKurs = ({ el }) => {
  return (
    <div id="this">
      <div className="container">
        <div className="this">
          <h2>Что даст вам этот курс</h2>
          <div className="this--group">
            <div className="this--group__block">
              <div className="this--group__block--text">
                <h2>01.</h2>
                <h3>Трудоустройство</h3>
              </div>
              <p>
                Мы помогаем студентам с высшим образованием (получившим Золотой
                сертификат) получить работу
              </p>
            </div>
            <div className="this--group__block">
              <div className="this--group__block--text">
                <h2>02.</h2>
                <h3>Английский</h3>
              </div>
              <p>
                Бесплатные уроки по английскому языку 3 раза в неделю.
                Это поможет вам в будущем работать с зарубежними проектами
                и компаниями
              </p>
            </div>
            <div className="this--group__block">
              <div className="this--group__block--text">
                <h2>03.</h2>
                <h3>Сильное портфолио</h3>
              </div>
              <p>
                Во время обучения создатиде 5+ проектов и упакуете своё
                протфолио
              </p>
            </div>
            <div className="this--group__block">
              <div className="this--group__block--text">
                <h2>04.</h2>
                <h3>Поддержка</h3>
              </div>
              <p>
                Помимо тренера ментора помощь оказывается со стороны SUPPORT
              </p>
            </div>
            <div className="this--group__block">
              <div className="this--group__block--text">
                <h2>05.</h2>
                <h3>Индивидуальное работа с каждым</h3>
              </div>
              <p>
                Наша система образования построена на то, чтобы делать упор
                на сильные стороны ученика и подходить к каждому индивидуально
              </p>
            </div>
            <div className="this--group__block">
              <div className="this--group__block--text">
                <h2>06.</h2>
                <h3>Стажировка</h3>
              </div>
              <p>
                После прохождения курса сможете стажироватса в IT клубе,
                где получете опыт работы над реальным проектом вместе с командой
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThisKurs;
