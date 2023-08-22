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
                ? "Проектты дайындау"
                : "Project Development"}
            </span>
          </h1>
          <div className="why--text">
            <div className="why--text__block">
              <img src={smail} alt="img" />
              <div className="why--text__block--group">
                <h2>
                  {language === ""
                    ? "Работа в команде"
                    : language === "ky"
                    ? "Топтомду жумуш"
                    : "Teamwork"}
                </h2>
                <p>
                  {language === ""
                    ? "Это процесс сотрудничества и взаимодействия между участниками команды. Команда может быть составлена из различных специалистов, каждый из которых вносит свой вклад в проект. Работа в команде включает обмен идеями, распределение задач, обсуждение проблем и поиск совместных решений."
                    : language === "ky"
                    ? "Бул белгилүүдө жана ылайланууда топтун катышуу жана кечиретиңиз болот. Топ белгилүү ишкердиктерди камсыздоо ар бир жакын аспекттен иштеген, ар биринин проектке жардам кылышы керек. Топтун ишин тартып жатуучу идеяларды алмаштыруу, убактылуу аткаруу, мөмөлүктөрдү талап кылуу жана бирге чечимди эңдешүү өзүмүздү тапшыруу камсыз."
                    : "This is the process of collaboration and interaction among team members. The team can be composed of various specialists, each contributing their expertise to the project. Teamwork involves exchanging ideas, distributing tasks, discussing issues, and finding collaborative solutions."}
                </p>
              </div>
            </div>
            <div className="why--text__block">
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
                    ? "Бул бейне шторму убактысында топтун азаматтары өз карастарын, тапшыруларын жана концепцияларын жакшы жолу тапшыруу үчүн оңдой тарткандар. Бейне шторму карти байланыштуу жана мамлекеттик депеше берүү, жана инновацияларды бошоткуу максаты менен колдонулат."
                    : "This is a method of idea generation in which team members freely express their thoughts, suggestions, and concepts to find the best solutions and approaches. Brainstorming promotes creative and productive discussion, as well as stimulates innovation."}
                </p>
              </div>
            </div>
            <div className="why--text__block">
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
                    ? "Проектты дайындау кызматкерлери проектти баяндоо жана натыйжаларын берүү үчүн презентация толуктой жатат. Презентация келтирилгендер курултуу материалдар, графикалар, диаграммалар жана башка көрсөткүчтөрдү камсыз коюу үчүн колдонулат. Проектти өткөрүү нерселерге жооп берүү, артка чыгуу жана алынган учурдагы чечимдерди түшүндүрүүгө аракет кылат."
                    : "After project development, the team prepares a presentation to showcase their ideas and results. The presentation may include visual materials, graphics, diagrams, and other visual aids to better convey information. Project defense involves answering questions, receiving feedback, and explaining the decisions made."}
                </p>
              </div>
            </div>
            <div className="why--text__block">
              <img src={roket} alt="img" />
              <div className="why--text__block--group">
                <h2>{language === "" ? "Talking club" : "Talking club"}</h2>
                <p>
                  {language === ""
                    ? "Talking club - это формат, при котором участники собираются для общения и обмена опытом на определенную тему или вопросы. Это может быть частью командной работы, где члены команды обсуждают прогресс, проблемы и идеи в неформальной обстановке. Talking club также способствует укреплению командного духа и развитию навыков коммуникации."
                    : language === "ky"
                    ? "Talking club - бул, учурга же суроолорга жарыяланып, учактарды топтомдо общение жана байланыш алмаштыруу үчүн турган формат. Бул команда жумушунун бир чаагы болушу мүмкүн, топтын азаматтары чечимдик ортотуп, токтомдорду чечген маалыматтарды жана иштерин кыраактарды бириктирген жерде чечет. Talking club топтун духуну күштөтүп, байланыштык кабилеттүүгүн жана коомуникативдик умткйларын көтерүүгө камсыз кылуу максаты менен колдонулат."
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
