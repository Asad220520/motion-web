import React from "react";
import "./index.scss";
const Contact = () => {
  return (
    <div id="contact">
      <div className="container">
        <div className="contact">
          <div className="contact__title">
            <h1>Оставить заявку на обучение или получить консультацию</h1>
            <p>
              Менеджер свяжется с вами в течение 30 минут и ответит
              на все интересующие вопросы.
            </p>
          </div>
          <div className="contact__form">
            <input type="text" placeholder="Имя" />
            <input type="text" placeholder="Номер" />
            <input type="email" placeholder="Электронная почта" />
            <div className="div">
              <input type="checkbox" />
              <span>Я соглашаюсь на обработку персональных данных</span>
            </div>
            <button>Оставить заявку</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
