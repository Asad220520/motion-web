import React from "react";
import axios from "axios";
import "./index.scss";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      first_name: event.target.elements.firstName.value,
      phone_number: event.target.elements.phoneNumber.value,
      email: event.target.elements.email.value,
    };
    const url = "http://13.48.46.219/api/v1/contacts/applications/";
    axios
      .post(url, formData)
      .then((response) => {
        console.log("Successful response:", response.data);
      })
      .catch((error) => {
        console.error("Error sending POST request:", error);
      });
  };

  

  return (
    <div id="contact">
      <div className="container">
        <div className="contact">
          <div className="contact__title">
            <h1>Оставить заявку на обучение или получить консультацию</h1>
            <p>
              Менеджер свяжется с вами в течение 30 минут и ответит на все
              интересующие вопросы.
            </p>
          </div>
          {/* <div className="contact__form"> */}
          <form className="contact__form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Имя" name="firstName" />
            <input type="text" placeholder="Номер" name="phoneNumber" />
            <input type="email" placeholder="Электронная почта" name="email" />
            <ul className="checked">
              <li className="checkbox">
                <input className="checkbox-spin" type="checkbox" id="check4" />
                <label htmlFor="check4">
                  <span>Я соглашаюсь на обработку персональных данных</span>
                </label>
              </li>
            </ul>
            <button type="submit">Оставить заявку</button>
          </form>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
