import React from "react";
import smail from "../../../../img/smiling.png";
import roun from "../../../../img/roun.png";
import chek from "../../../../img/check.png";
import roket from "../../../../img/rocket .png";

const RazProject = () => {
  return (
    <div id="why">
      <div className="container">
        <div className="why">
          <h1>
            <span>
              Разработка <br /> проекта{" "}
            </span>
          </h1>
          <div className="why--text">
            <div className="why--text__block">
              <img src={smail} alt="img" />
              <div className="why--text__block--group">
                <h2>Робота в команде</h2>
                <p>
                  Это процесс сотрудничества и взаимодействия между участниками
                  команды. Команда может быть составлена из различных
                  специалистов, каждый из которых вносит свой вклад в проект.
                  Работа в команде включает обмен идеями, распределение задач,
                  обсуждение проблем и поиск совместных решений.
                </p>
              </div>
            </div>
            <div className="why--text__block">
              <img className="img" src={roun} alt="img" />
              <div className="why--text__block--group">
                <h2>Brainstorming (мозговой штурм):</h2>
                <p>
                  Это метод генерации идей, при котором члены команды свободно
                  высказывают свои мысли, предложения и концепции, чтобы найти
                  наилучшие решения и подходы. Brainstorming способствует
                  творческому и продуктивному обсуждению, а также стимулирует
                  инновацию.
                </p>
              </div>
            </div>
            <div className="why--text__block">
              <img src={chek} alt="img" />
              <div className="why--text__block--group">
                <h2>Презентация и защита проекта:</h2>
                <p>
                  После разработки проекта команда подготавливает презентацию,
                  чтобы представить свои идеи и результаты. Презентация может
                  включать в себя визуальные материалы, графики, диаграммы и
                  другие средства визуализации, чтобы лучше передать информацию.
                  Защита проекта подразумевает ответы на вопросы, обратную связь
                  и объяснение принятых решений.
                </p>
              </div>
            </div>
            <div className="why--text__block">
              <img src={roket} alt="img" />
              <div className="why--text__block--group">
                <h2>Talking club:</h2>
                <p>
                  Talking club - это формат, при котором участники собираются
                  для общения и обмена опытом на определенную тему или вопросы.
                  Это может быть частью командной работы, где члены команды
                  обсуждают прогресс, проблемы и идеи в неформальной обстановке.
                  Talking club также способствует укреплению командного духа и
                  развитию навыков коммуникации.
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
