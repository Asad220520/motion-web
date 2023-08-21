import React, { useState } from "react";
import axios from "axios";
import "./index.scss";
import smail from "../../../img/smiling-face.png";
import { BASE_URL } from "../../../API";
const Contact = () => {
  const [modal, setModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      first_name: firstName,
      phone_number: phoneNumber,
      email: email,
    };
    const url = `${BASE_URL}/contacts/applications/`;
    axios
      .post(url, formData)
      .then((response) => {
        console.log("Successful response:", response.data);
        if (!modal) {
          setModal(true);
          setTimeout(() => {
            setModal(false);
            setIsChecked(false);
            setFirstName("");
            setPhoneNumber("");
            setEmail("");
          }, 3000);
        }
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
          <form className="contact__form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Имя"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Номер"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              type="email"
              placeholder="Электронная почта"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <ul className="checked">
              <li className="checkbox">
                <input
                  className="checkbox-spin"
                  type="checkbox"
                  id="check4"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                <label htmlFor="check4">
                  <span>Я соглашаюсь на обработку персональных данных</span>
                </label>
              </li>
            </ul>
            <button type="submit">Оставить заявку</button>
            <div
              style={{
                display: modal ? "flex" : "none",
              }}
              className="modal"
            >
              <img src={smail} alt="" />
              <h2>Менеджер скоро свяжется с вами</h2>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
