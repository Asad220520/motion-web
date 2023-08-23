import React, { useContext } from "react";
import smail from "../../../../img/smiling.png";
import roun from "../../../../img/roun.png";
import chek from "../../../../img/check.png";
import roket from "../../../../img/rocket .png";
import { LanguageContext } from "../../../../context";

const RazProject = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div id="why">
      <div className="container">
        <div className="why">
          <h1>
            <span>
              {language === ""
                ? "Разработка проекта"
                : language === "ky"
                ? "Проектти иштеп чыгуу"
                : "Project Development"}
            </span>
          </h1>
          <div className="why--text">
            <div data-aos="fade-left" className="why--text__block">
              <img src={smail} alt="img" />
              <div className="why--text__block--group">
                <h2>
                  {language === ""
                    ? "Работа в команде"
                    : language === "ky"
                    ? "Команда менен иштөө"
                    : "Teamwork"}
                </h2>
                <p>
                  {language === ""
                    ? "Это процесс сотрудничества и взаимодействия между участниками команды. Команда может быть составлена из различных специалистов, каждый из которых вносит свой вклад в проект. Работа в команде включает обмен идеями, распределение задач, обсуждение проблем и поиск совместных решений."
                    : language === "ky"
                    ? "Бул команда мүчөлөрүнүн ортосундагы кызматташтык жана өз ара аракеттенүү процесси. Команда ар кандай адистерден түзүлүшү мүмкүн, алардын ар бири долбоорго өз салымын кошот. Командалык иш идеяларды алмашууну, милдеттерди бөлүштүрүүнү, көйгөйлөрдү талкуулоону жана биргелешип чечүү жолдорун издөөнү камтыйт."
                    : "This is the process of collaboration and interaction among team members. The team can be composed of various specialists, each contributing their expertise to the project. Teamwork involves exchanging ideas, distributing tasks, discussing issues, and finding collaborative solutions."}
                </p>
              </div>
            </div>
            <div data-aos="fade-left" className="why--text__block">
              <img className="img" src={roun} alt="img" />
              <div className="why--text__block--group">
                <h2>
                  {language === ""
                    ? "Brainstorming (мозговой штурм)"
                    : language === "ky"
                    ? "Brainstorming (бейне шторму)"
                    : "Brainstorming"}
                </h2>
                <p>
                  {language === ""
                    ? "Это метод генерации идей, при котором члены команды свободно высказывают свои мысли, предложения и концепции, чтобы найти наилучшие решения и подходы. Brainstorming способствует творческому и продуктивному обсуждению, а также стимулирует инновацию."
                    : language === "ky"
                    ? "Бул мыкты чечимдерди жана ыкмаларды табуу үчүн команда мүчөлөрү өз ойлорун, сунуштарын жана концепцияларын эркин билдирген идеяны түзүү ыкмасы. Акыл чабуулу чыгармачыл жана жемиштүү талкууга үндөп, инновацияга үндөйт."
                    : "This is a method of idea generation in which team members freely express their thoughts, suggestions, and concepts to find the best solutions and approaches. Brainstorming promotes creative and productive discussion, as well as stimulates innovation."}
                </p>
              </div>
            </div>
            <div data-aos="fade-left" className="why--text__block">
              <img src={chek} alt="img" />
              <div className="why--text__block--group">
                <h2>
                  {language === ""
                    ? "Презентация и защита проекта"
                    : language === "ky"
                    ? "Презентация жана проектти өткөрүү"
                    : "Project Presentation and Defense"}
                </h2>
                <p>
                  {language === ""
                    ? "После разработки проекта команда подготавливает презентацию, чтобы представить свои идеи и результаты. Презентация может включать в себя визуальные материалы, графики, диаграммы и другие средства визуализации, чтобы лучше передать информацию. Защита проекта подразумевает ответы на вопросы, обратную связь и объяснение принятых решений."
                    : language === "ky"
                    ? "Проект иштелип чыккандан кийин, команда өз идеяларын жана натыйжаларын көрсөтүү үчүн презентация даярдайт. Презентация маалыматты жакшыраак жеткирүү үчүн визуалдык сүрөттөрдү, графиктерди, диаграммаларды жана башка көрсөтмө куралдарды камтышы мүмкүн. Долбоорду коргоо суроолорго жооп берүүнү, пикир билдирүүнү жана кабыл алынган чечимдерди түшүндүрүүнү камтыйт."
                    : "After project development, the team prepares a presentation to showcase their ideas and results. The presentation may include visual materials, graphics, diagrams, and other visual aids to better convey information. Project defense involves answering questions, receiving feedback, and explaining the decisions made."}
                </p>
              </div>
            </div>
            <div data-aos="fade-left" className="why--text__block">
              <img src={roket} alt="img" />
              <div className="why--text__block--group">
                <h2>{language === "" ? "Talking club" : "Talking club"}</h2>
                <p>
                  {language === ""
                    ? "Talking club - это формат, при котором участники собираются для общения и обмена опытом на определенную тему или вопросы. Это может быть частью командной работы, где члены команды обсуждают прогресс, проблемы и идеи в неформальной обстановке. Talking club также способствует укреплению командного духа и развитию навыков коммуникации."
                    : language === "ky"
                    ? "Talking club – бул катышуучулар белгилүү бир тема же маселелер боюнча баарлашуу жана тажрыйба алмашуу үчүн чогулган формат. Бул команда мүчөлөрү прогрессти, көйгөйлөрдү жана идеяларды бейформал шартта талкуулаган командалык иштин бир бөлүгү болушу мүмкүн. Talking клубу ошондой эле команданын духун чыңдоого жана баарлашуу жөндөмүн өнүктүрүүгө жардам берет."
                    : "Talking club is a format where participants gather for communication and sharing experiences on a specific topic or questions. It can be part of teamwork, where team members discuss progress, issues, and ideas in an informal setting. Talking club also contributes to strengthening team spirit and developing communication skills."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RazProject;
