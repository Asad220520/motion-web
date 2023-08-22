import React, { useContext, useState } from "react";
import axios from "axios";
import "./index.scss";
import smail from "../../../img/smiling-face.png";
import { BASE_URL } from "../../../API";
import { LanguageContext } from "../../../context";
const Contact = () => {
  const [modal, setModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const { language } = useContext(LanguageContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      first_name: firstName,
      phone_number: phoneNumber,
      email: email,
    };
    const url = `${BASE_URL}/${language}/api/v1/contacts/applications/`;
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
            <h1>
              {language === ""
                ? "Оставить заявку на обучение или получить консультацию"
                : language === "ky"
                ? "Окутуу үчүн байланыш калтырыңыз же кеңеш алыңыз"
                : "Leave a Request for Training or Get Consultation"}
            </h1>
            <p>
              {language === ""
                ? "Менеджер свяжется с вами в течение 30 минут и ответит на все интересующие вопросы."
                : language === "ky"
                ? "Менеджер сиз менен 30 мүнөттүн ичинде байланышып, бардык суроолоруңузга жооп берет."
                : "A manager will contact you within 30 minutes and answer all your questions."}
            </p>
          </div>
          <form className="contact__form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder={
                language === "" ? "Имя" : language === "ky" ? "Атыныз" : "Name"
              }
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder={
                language === ""
                  ? "Номер"
                  : language === "ky"
                  ? "Номер"
                  : "Phone"
              }
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              type="email"
              placeholder={
                language === ""
                  ? "Электронная почта"
                  : language === "ky"
                  ? "Электрондук почта"
                  : "Email"
              }
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
                  <span>
                    {language === ""
                      ? "Я соглашаюсь на обработку персональных данных"
                      : language === "ky"
                      ? "Мен жеке маалыматтарды иштетүүгө макулмун"
                      : "I agree to the processing of personal data"}
                  </span>{" "}
                </label>
              </li>
            </ul>
            <button type="submit">
              {language === ""
                ? "Оставить заявку"
                : language === "ky"
                ? "байланыш калтыруу"
                : "Submit Application"}
            </button>{" "}
            <div
              style={{
                display: modal ? "flex" : "none",
              }}
              className="modal"
            >
              <img src={smail} alt="" />
              <h2>
                {language === ""
                  ? "Менеджер скоро свяжется с вами"
                  : language === "ky"
                  ? "Менеджер жакында сиз менен байланышат"
                  : "Manager will contact you soon"}
              </h2>{" "}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
