import React, { useContext, useState } from "react";
import "./index.scss";
import "./media.scss";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { LanguageContext } from "../../../../context";

const Quashin = () => {
  const [blo1, setBlo1] = useState(false);
  const [blo2, setBlo2] = useState(false);
  const [blo3, setBlo3] = useState(false);
  const [blo4, setBlo4] = useState(false);
  const [blo5, setBlo5] = useState(false);
  const [blo6, setBlo6] = useState(false);
  const { language } = useContext(LanguageContext);

  return (
    <div id="quashin">
      <div className="container ">
        <div className="quashin">
          <h1 className="quashin--h1">
            {language === ""
              ? "Частые вопросы"
              : language === "ky"
              ? "Көп берилүүчү суроолор"
              : "Frequently Asked Questions"}
          </h1>
          <div className="quashin--group">
            <div
              style={{
                height: blo1 ? "30%" : "60px",
                overflow: blo1 ? "" : "hidden",
                borderRadius: blo1 ? "20px" : "30px",
              }}
              className="quashin--group__block"
            >
              <div
                onClick={() => {
                  setBlo1(!blo1);
                  setBlo2(false);
                  setBlo3(false);
                  setBlo4(false);
                  setBlo5(false);
                  // setBlo(!blo)
                  setBlo6(false);
                }}
                className="quashin--group__block--span"
              >
                <p data-aos="fade-left">
                  {language === ""
                    ? "Нужны ли начальные знания для учёбы?"
                    : language === "ky"
                    ? "Окуу үчүн негизги билим керекпи?"
                    : "Do I need prior knowledge to start learning?"}
                  {blo1 ? (
                    <GoChevronUp style={{ fontSize: "25px" }} />
                  ) : (
                    <GoChevronDown style={{ fontSize: "25px" }} />
                  )}
                </p>
                <div className="par">
                  <span
                    style={{
                      transition: ".2s step-end",
                      opacity: blo1 ? "1" : "0",
                    }}
                  >
                    {language === ""
                      ? "Для учебы на курсе программирования обычно рекомендуется иметь базовые знания компьютера и уметь работать с операционной системой. Определенные курсы могут требовать предварительных знаний или навыков в определенных языках программирования или областях разработки. Однако, существуют и курсы, которые предназначены для начинающих и предоставляют все необходимые основы."
                      : language === "ky"
                      ? "Программалоо курсу үчүн, адатта, компьютердик базалык билимге ээ болуу жана операциялык система менен иштей билүү сунушталат. Кээ бир курстар белгилүү бир программалоо тилдери же өнүктүрүү чөйрөлөрүндө алдын ала билимди же көндүмдөрдү талап кылышы мүмкүн. Бирок, курстар бар. үйрөнчүктөргө багытталган жана бардык керектүү негиздер менен камсыз кылат."
                      : "For learning in a programming course, it's usually recommended to have basic computer knowledge and be familiar with operating systems. Certain courses may require prior knowledge or skills in specific programming languages or development areas. However, there are also courses designed for beginners that provide all the necessary fundamentals."}
                  </span>
                </div>
              </div>
            </div>
            <div
              style={{
                height: blo2 ? "30%" : "60px",
                overflow: blo2 ? "" : "hidden",
                borderRadius: blo2 ? "20px" : "30px",
              }}
              className="quashin--group__block"
            >
              <div
                onClick={() => {
                  setBlo2(!blo2);
                  setBlo1(false);
                  setBlo3(false);
                  // setBlo(!blo)
                  setBlo4(false);
                  setBlo5(false);
                  setBlo6(false);
                }}
                className="quashin--group__block--span"
              >
                <p data-aos="fade-left">
                  {language === ""
                    ? "Как проходит консультация?"
                    : language === "ky"
                    ? "Консультация кандай өткөрүлөт?"
                    : "How does the consultation process work?"}
                  {blo2 ? (
                    <GoChevronUp style={{ fontSize: "25px" }} />
                  ) : (
                    <GoChevronDown style={{ fontSize: "25px" }} />
                  )}
                </p>
                <div className="par">
                  <span
                    style={{
                      transition: ".2s step-end",
                      opacity: blo2 ? "1" : "0",
                    }}
                  >
                    {language === ""
                      ? "Консультации на курсе программирования могут проходить в различных форматах, включая личные встречи, онлайн-конференции, чаты или форумы. Обычно студенты могут общаться с преподавателями, наставниками или соучастниками курса, чтобы получить ответы на вопросы, разъяснения материала или дополнительную поддержку."
                      : language === "ky"
                      ? "Программалоо курсу боюнча консультациялар ар кандай форматтарда, анын ичинде бетме-бет жолугушуулар, онлайн конференциялар, чаттар же форумдар болушу мүмкүн. Адатта, студенттер суроолорго жооп алуу, материалды тактоо же кошумча колдоо үчүн инструкторлор, насаатчылар же курстун өнөктөштөрү менен байланыша алышат."
                      : "Consultations in the programming course can take place in various formats, including personal meetings, online conferences, chats, or forums. Typically, students can communicate with instructors, mentors, or fellow course participants to get answers to questions, explanations of material, or additional support."}
                  </span>
                </div>
              </div>
            </div>

            <div
              style={{
                height: blo3 ? "30%" : "60px",
                overflow: blo3 ? "" : "hidden",
                borderRadius: blo3 ? "20px" : "30px",
              }}
              className="quashin--group__block"
            >
              <div
                onClick={() => {
                  setBlo3(!blo3);
                  setBlo2(false);

                  // setBlo(!blo)
                  setBlo1(false);
                  setBlo4(false);
                  setBlo5(false);
                  setBlo6(false);
                }}
                className="quashin--group__block--span"
              >
                <p data-aos="fade-left">
                  {language === ""
                    ? "Какой график обучения?"
                    : language === "ky"
                    ? "Окутуу тартиби кандай?"
                    : "What is the study schedule?"}
                  {blo3 ? (
                    <GoChevronUp style={{ fontSize: "25px" }} />
                  ) : (
                    <GoChevronDown style={{ fontSize: "25px" }} />
                  )}
                </p>
                <div className="par">
                  <span
                    style={{
                      transition: ".2s step-end",
                      opacity: blo3 ? "1" : "0",
                    }}
                  >
                    {language === ""
                      ? "Получится ли совмещать его с работой? График обучения может варьироваться в зависимости от курса и его формата. Некоторые курсы предлагают гибкий график, который позволяет студентам проходить материал в своем темпе, в то время как другие могут иметь определенные сроки и дедлайны. Если у вас есть работа, то лучше выбрать курс с гибким графиком, чтобы иметь возможность совмещать учебу и работу."
                      : language === "ky"
                      ? "Аны жумуш менен айкалыштыра аласызбы? Окутуу тартиби курска жана анын форматына жараша өзгөрүшү мүмкүн. Кээ бир курстар ийкемдүү графикти сунуштайт, бул студенттерге материалды өз темпинде иштөөгө мүмкүндүк берет, ал эми башкаларында белгилүү бир мөөнөттөр жана мөөнөттөр болушу мүмкүн. Эгерде сизде жумуш бар болсо, анда окуу менен жумушту айкалыштыруу үчүн ийкемдүү график менен курсту тандап алганыңыз оң."
                      : "Is it possible to combine it with work? The study schedule can vary depending on the course and its format. Some courses offer a flexible schedule that allows students to go through the material at their own pace, while others may have specific deadlines. If you have a job, it's better to choose a course with a flexible schedule to have the opportunity to balance studying and work."}
                  </span>
                </div>
              </div>
            </div>

            <div
              style={{
                height: blo4 ? "30%" : "60px",
                overflow: blo4 ? "" : "hidden",
                borderRadius: blo4 ? "20px" : "30px",
              }}
              className="quashin--group__block"
            >
              <div
                onClick={() => {
                  setBlo4(!blo4);
                  setBlo3(false);
                  // setBlo(!blo)
                  setBlo2(false);
                  setBlo1(false);

                  setBlo5(false);
                  setBlo6(false);
                }}
                className="quashin--group__block--span"
              >
                <p data-aos="fade-left">
                  {language === ""
                    ? "Мне помогут трудоустроиться?"
                    : language === "ky"
                    ? "мага жумушка орношууга жардам береби?"
                    : "Will I receive assistance with job placement?"}{" "}
                  {blo4 ? (
                    <GoChevronUp style={{ fontSize: "25px" }} />
                  ) : (
                    <GoChevronDown style={{ fontSize: "25px" }} />
                  )}
                </p>
                <div className="par">
                  <span
                    style={{
                      transition: ".2s step-end",
                      opacity: blo4 ? "1" : "0",
                    }}
                  >
                    {language === ""
                      ? "Предоставляем помощь в трудоустройстве, предлагая ресурсы для поиска работы или установление контактов с работодателями. Однако, не все курсы предлагают гарантию трудоустройства."
                      : language === "ky"
                      ? "Биз жумуш табуу же иш берүүчүлөр менен байланышуу үчүн ресурстарды сунуштоо менен жумушка орношууга жардам беребиз. Бирок, бардык курстар жумушка кепилдик бере бербейт."
                      : "We provide assistance in job placement by offering resources for job search or establishing contacts with employers. However, not all courses offer job placement guarantee."}
                  </span>
                </div>
              </div>
            </div>

            <div
              style={{
                height: blo5 ? "30%" : "60px",
                overflow: blo5 ? "" : "hidden",
                borderRadius: blo5 ? "20px" : "30px",
              }}
              className="quashin--group__block"
            >
              <div
                onClick={() => {
                  setBlo5(!blo5);
                  setBlo4(false);

                  setBlo3(false);
                  // setBlo(!blo)
                  setBlo2(false);
                  setBlo1(false);
                  setBlo6(false);
                }}
                className="quashin--group__block--span"
              >
                <p data-aos="fade-left">
                  {language === ""
                    ? "Кто мне поможет, если возникнут вопросы?"
                    : language === "ky"
                    ? "Суроолорум болсо мага ким жардам бере алат?"
                    : "Who will help me if I have questions?"}{" "}
                  {blo5 ? (
                    <GoChevronUp style={{ fontSize: "25px" }} />
                  ) : (
                    <GoChevronDown style={{ fontSize: "25px" }} />
                  )}
                </p>
                <div className="par">
                  <span
                    style={{
                      transition: ".2s step-end",
                      opacity: blo5 ? "1" : "0",
                    }}
                  >
                    {language === ""
                      ? "Курсы программирования обычно имеют команду преподавателей и наставников, которые готовы помочь вам с возникшими вопросами и трудностями. Они могут предоставить разъяснения материала, дать дополнительные примеры и объяснения, а также помочь в решении конкретных проблем."
                      : language === "ky"
                      ? "Программалоо курстарында, адатта, суроолоруңузга жана кыйынчылыктарыңызга жардам берүүгө даяр мугалимдер жана насаатчылар тобу бар. Алар материалды тактап, кошумча мисалдарды жана түшүндүрмөлөрдү берип, конкреттүү көйгөйлөрдү чечүүгө жардам бере алышат."
                      : "Programming courses usually have a team of instructors and mentors who are ready to help you with your questions and difficulties. They can provide explanations of the material, give additional examples and explanations, as well as assist you in solving specific problems."}
                  </span>
                </div>
              </div>
            </div>
            <div
              style={{
                margin:
                  blo1 || blo2 || blo3 || blo4 || blo5 || blo6
                    ? "0 0 50px 0"
                    : "0  0 ",
                height: blo6 ? "30%" : "60px",
                overflow: blo6 ? "" : "hidden",
                borderRadius: blo6 ? "20px" : "30px",
              }}
              className="quashin--group__block"
            >
              <div
                onClick={() => {
                  setBlo6(!blo6);
                  setBlo5(false);
                  setBlo4(false);
                  setBlo3(false);
                  setBlo2(false);
                  setBlo1(false);
                }}
                className="quashin--group__block--span"
              >
                <p data-aos="fade-left">
                  {language === ""
                    ? "Какая техника нужна для обучения?"
                    : language === "ky"
                    ? "Окуу үчүн кандай технология керек?"
                    : "What equipment is needed for learning?"}{" "}
                  {blo6 ? (
                    <GoChevronUp style={{ fontSize: "25px" }} />
                  ) : (
                    <GoChevronDown style={{ fontSize: "25px" }} />
                  )}
                </p>
                <div className="par">
                  <span
                    style={{
                      transition: ".2s step-end",
                      opacity: blo6 ? "1" : "0",
                    }}
                  >
                    {language === ""
                      ? "Необходим компьютер или ноутбук с доступом в Интернет, чтобы получить доступ к материалам курса, выполнять задания и практиковаться в программировании. Желательно, чтобы ноутбук был достаточно мощным, чтобы запускать современные инструменты и среды разработки."
                      : language === "ky"
                      ? "Курстук материалдарга кирүү, тапшырмаларды аткаруу жана программалоону практикалоо үчүн Интернетке кирүү мүмкүнчүлүгү бар компьютер же ноутбук талап кылынат. Ноутбук заманбап иштеп чыгуу куралдарын жана чөйрөлөрүн иштетүү үчүн жетиштүү күчтүү болушу керек."
                      : "You'll need a computer or laptop with internet access to access the course materials, complete assignments, and practice programming. It's preferable for the laptop to be powerful enough to run modern tools and development environments."}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quashin;
