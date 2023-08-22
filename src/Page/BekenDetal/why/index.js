import React from "react";
// import "./index.scss";

const Why = ({language}) => {
  return (
    <div className="container">
      <div className="why">
        <div className="disain--whywe">
          <h2>
            {language === "" ? "Почему" : language === "ky" ? "Кандай" : "Why"}{" "}
            <span>MOTION WEB IT ACADEMY?</span>
          </h2>
          <div className="disain--whywe__text">
            <p>
              {language === ""
                ? "MOTION WEB IT ACADEMY использует практический подход к обучению, что означает, что студенты будут работать над реальными проектами, используя современные инструменты и технологии."
                : language === "ky"
                ? "MOTION WEB IT ACADEMY окууга практикалык мамиле жасайт, бул студенттер заманбап инструменттерди жана технологияларды колдонуу менен реалдуу долбоорлордун үстүндө иштешет дегенди билдирет."
                : "MOTION WEB IT ACADEMY takes a hands-on approach to learning, which means students will work on real projects using modern tools and technology."}
            </p>
            <p>
              {language === ""
                ? "MOTION WEB IT ACADEMY предоставляет студентам поддержку в поиске работы после окончания курсов. Ученики могут получить доступ к эксклюзивным вакансиям, менторству и помощи в составлении резюме."
                : language === "ky"
                ? "MOTION WEB IT ACADEMY студенттерге окууну аяктагандан кийин жумуш табууга колдоо көрсөтөт. Студенттер эксклюзивдүү жумуш мүмкүнчүлүктөрүнө, насаатчылыкка жана резюме жазууга жардам ала алышат."
                : "MOTION WEB IT ACADEMY provides students with support in finding a job after graduation. Students can access exclusive job opportunities, mentoring and resume writing assistance."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
