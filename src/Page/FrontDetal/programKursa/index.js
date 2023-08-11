import React, { useState } from "react";
import "./index.scss";
import "./media.scss"
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import figma from "../../../img/figma logo.png"
import strel from "../../../img/strel.png"
import smi from "../../../img/smi.png"
import star from "../../../img/star.png"
import ogon from "../../../img/ogon.png"
import har from "../../../img/har.png"
import kubo from "../../../img/kubo.png"

const ProgramKurs = () => {
  const [blo1, setBlo1] = useState(false);
  const [blo2, setBlo2] = useState(false);
  const [blo3, setBlo3] = useState(false);
  const [blo4, setBlo4] = useState(false);
  const [blo5, setBlo5] = useState(false);
  const [blo6, setBlo6] = useState(false);
  // const [blo, setBlo] = useState(false);
  return (
   <div id="program">
     <div className="container">
      <div className="program ">
        <div className="program--title">
          <h3>Программа курса</h3>
                    <p>
            С нашей помощью вы сможете создавать проекты, которые отвечают
            высоким требованиям юзабилити (UX) и визуала (UI). Вы пройдёте
            все этапы создания дизайна сайта совместно с опытным куратором
            и в итоге научитесь делать проекты на уровне лидеров индустрии.
          </p>
        </div>
        <div 
         className="program--group">
        <div  style={{
          transition:'.4s',
  height: blo2 ? "100%" : "100px",
  overflow: blo2 ? "" : "hidden",
  borderRadius: blo2 ? "30px" : "30px", }} className="program--group__block">
          <div onClick={() =>{
              setBlo2(!blo2);
              // setBlo(!blo)
              setBlo1(false);
              setBlo3(false);
              setBlo4(false);
              setBlo5(false);
              setBlo6(false);
          }} className="program--group__block--ims">
            <div style={{alignItems: blo2 ? 'start' : 'center'}} className="program--group__block--ims__img">
              <div style={{alignItems: blo2 ? 'start' : 'center'}} className="program--group__block--ims__img--vden">
                <img src={strel} alt="img" />
              <h3>Введение в UX/UI Design:</h3>
              </div>
                {
      blo2 ? 
      <GoChevronUp style={{fontSize:'25px'}}/>
      :
      <GoChevronDown style={{fontSize:'25px'}} />
    }
            </div>
          <div style={{transition:'.4s  ease-in-out',opacity: blo2 ? '1' : '0'}} 
          className="program--group__block--ims__text">
            <div className="program--group__block--ims__text--grou">
              <p>В этом модуле вы получите представление о том, в чем разница между UX и UI, а также почему они неразрывно связаны между собой. Мы обсудим, что такое интерфейс и затронем тему классификации дизайна и сайтов. Вы узнаете, какими принципами и в каком порядке важно руководствоваться в процессе проектирования, получите представление о том, как пользователи обрабатывают данные, изучите приёмы управления их вниманием и эмоциями. Научитесь работать в графическом редакторе Figma и пройдёте первые этапы погружения в UX/UI-дизайн.
              </p>
              <ul>
                <li>Определение и различие между UX и UI.</li>
                <li>История и эволюция дизайна пользовательского опыта и пользовательских интерфейсов.</li>
                <li> Понимание пользовательской аудитории и её потребностей.</li>
                <li>Методы исследования пользователя, такие как интервью, опросы, персонажи, пользовательские сценарии и т.д.</li>
                <li>Анализ пользовательского поведения и данных.</li>
              </ul>
            </div>
            <img src={figma} alt="img" />
            </div>  
          </div>
        </div>
        <div  style={{
          transition:'.4s',
  height: blo1 ? "100%" : "100px",
  overflow: blo1 ? "" : "hidden",
  borderRadius: blo1 ? "30px" : "30px", }} className="program--group__block">
          <div onClick={() =>{
              setBlo1(!blo1);
              setBlo2(false);
              setBlo3(false);
              setBlo4(false);
              setBlo5(false);
              setBlo6(false);
          }} className="program--group__block--ims">
            <div style={{alignItems: blo1 ? 'start' : 'center'}} className="program--group__block--ims__img">
              <div style={{alignItems: blo1 ? 'start' : 'center'}} className="program--group__block--ims__img--vden">
                <img src={smi} alt="img" />
              <h3>Информационная архитектура:</h3>
              </div>
                {
      blo1 ? 
      <GoChevronUp style={{fontSize:'25px'}}/>
      :
      <GoChevronDown style={{fontSize:'25px'}} />
    }
            </div>
          <div style={{transition:'.3s  ease-in-out',opacity: blo1 ? '1' : '0'}} 
          className="program--group__block--ims__text">
            <div className="program--group__block--ims__text--grou">
              <p>В этом модуле вы получите представление о том, в чем разница между UX и UI, а также почему они неразрывно связаны между собой. Мы обсудим, что такое интерфейс и затронем тему классификации дизайна и сайтов. Вы узнаете, какими принципами и в каком порядке важно руководствоваться в процессе проектирования, получите представление о том, как пользователи обрабатывают данные, изучите приёмы управления их вниманием и эмоциями. Научитесь работать в графическом редакторе Figma и пройдёте первые этапы погружения в UX/UI-дизайн.
              </p>
              <ul>
                <li>Создание структуры и организации информации.</li>
                <li>Разработка карты сайта и схемы навигации.</li>
                
              </ul>
            </div>
            <img src={figma} alt="img" />
            </div>  
          </div>
        </div>
        <div  style={{
          transition:'.4s',
  height: blo3 ? "100%" : "100px",
  overflow: blo3 ? "" : "hidden",
  borderRadius: blo3 ? "30px" : "30px", }} className="program--group__block">
          <div onClick={() =>{
              setBlo3(!blo3);
              // setBlo(!blo)
              setBlo1(false);
              setBlo2(false);
              setBlo4(false);
              setBlo5(false);
              setBlo6(false);
          }} className="program--group__block--ims">
            <div style={{alignItems: blo3 ? 'start' : 'center'}} className="program--group__block--ims__img">
              <div style={{alignItems: blo3 ? 'start' : 'center'}} className="program--group__block--ims__img--vden">
                <img src={star} alt="img" />
              <h3>UX Design:</h3>
              </div>
                {
      blo3 ? 
      <GoChevronUp style={{fontSize:'25px'}}/>
      :
      <GoChevronDown style={{fontSize:'25px'}} />
    }
            </div>
          <div style={{transition:'.3s  ease-in-out',opacity: blo3 ? '1' : '0'}} 
          className="program--group__block--ims__text">
            <div className="program--group__block--ims__text--grou">
              <p>В этом модуле вы получите представление о том, в чем разница между UX и UI, а также почему они неразрывно связаны между собой. Мы обсудим, что такое интерфейс и затронем тему классификации дизайна и сайтов. Вы узнаете, какими принципами и в каком порядке важно руководствоваться в процессе проектирования, получите представление о том, как пользователи обрабатывают данные, изучите приёмы управления их вниманием и эмоциями. Научитесь работать в графическом редакторе Figma и пройдёте первые этапы погружения в UX/UI-дизайн.
              </p>
              <ul>
                <li>Создание прототипов и макетов пользовательского интерфейса.</li>
                <li>Работа с wireframes (скетчи интерфейса).</li>
                <li>Проектирование пользовательских путешествий (user journey) и потоков пользовательских действий.</li>
                <li>Принципы дизайна пользовательского интерфейса (цвет, типографика, пропорции и т.д.).</li>
                <li>Создание стилевых концепций и элементов интерфейса.</li>
                <li>Работа с графикой и иконками.</li>
              </ul>
            </div>
            <img src={figma} alt="img" />
            </div>  
          </div>
        </div>
        <div  style={{
          transition:'.4s',
  height: blo4 ? "100%" : "100px",
  overflow: blo4 ? "" : "hidden",
  borderRadius: blo4 ? "30px" : "30px", }} className="program--group__block">
          <div onClick={() =>{
              setBlo4(!blo4);
              setBlo1(false);
              // setBlo(!blo)
              setBlo3(false);
              setBlo2(false);
              setBlo5(false);
              setBlo6(false);
          }} className="program--group__block--ims">
            <div style={{alignItems: blo4 ? 'start' : 'center'}} className="program--group__block--ims__img">
              <div style={{alignItems: blo4 ? 'start' : 'center'}} className="program--group__block--ims__img--vden">
                <img src={ogon} alt="img" />
              <h3>Прототипирование:</h3>
              </div>
                {
      blo4 ? 
      <GoChevronUp style={{fontSize:'25px'}}/>
      :
      <GoChevronDown style={{fontSize:'25px'}} />
    }
            </div>
          <div style={{transition:'.3s  ease-in-out',opacity: blo4 ? '1' : '0'}} 
          className="program--group__block--ims__text">
            <div className="program--group__block--ims__text--grou">
              <p>В этом модуле вы получите представление о том, в чем разница между UX и UI, а также почему они неразрывно связаны между собой. Мы обсудим, что такое интерфейс и затронем тему классификации дизайна и сайтов. Вы узнаете, какими принципами и в каком порядке важно руководствоваться в процессе проектирования, получите представление о том, как пользователи обрабатывают данные, изучите приёмы управления их вниманием и эмоциями. Научитесь работать в графическом редакторе Figma и пройдёте первые этапы погружения в UX/UI-дизайн.
              </p>
              <ul>
                <li>Использование инструментов для создания
 интерактивных прототипов (например, Sketch, Figma, Adobe XD).</li>
                <li>Тестирование и итеративное улучшение прототипов.</li>
              </ul>
            </div>
            <img src={figma} alt="img" />
            </div>  
          </div>
        </div>
        <div  style={{
          transition:'.4s',
  height: blo5 ? "100%" : "100px",
  overflow: blo5 ? "" : "hidden",
  borderRadius: blo5 ? "30px" : "30px", }} className="program--group__block">
          <div onClick={() =>{
              setBlo5(!blo5);
              // setBlo(!blo)
              setBlo1(false);
              setBlo3(false);
              setBlo4(false);
              setBlo2(false);
              setBlo6(false);
          }} className="program--group__block--ims">
            <div style={{alignItems: blo5 ? 'start' : 'center'}} className="program--group__block--ims__img">
              <div style={{alignItems: blo5 ? 'start' : 'center'}} className="program--group__block--ims__img--vden">
                <img src={har} alt="img" />
              <h3>Тестирование и оценка:</h3>
              </div>
                {
      blo5 ? 
      <GoChevronUp style={{fontSize:'25px'}}/>
      :
      <GoChevronDown style={{fontSize:'25px'}} />
    }
            </div>
          <div style={{transition:'.3s  ease-in-out',opacity: blo5 ? '1' : '0'}} 
          className="program--group__block--ims__text">
            <div className="program--group__block--ims__text--grou">
              <p>В этом модуле вы получите представление о том, в чем разница между UX и UI, а также почему они неразрывно связаны между собой. Мы обсудим, что такое интерфейс и затронем тему классификации дизайна и сайтов. Вы узнаете, какими принципами и в каком порядке важно руководствоваться в процессе проектирования, получите представление о том, как пользователи обрабатывают данные, изучите приёмы управления их вниманием и эмоциями. Научитесь работать в графическом редакторе Figma и пройдёте первые этапы погружения в UX/UI-дизайн.
              </p>
              <ul>
                <li>Методы тестирования пользовательского опыта.</li>
                <li>Сбор обратной связи и анализ результатов.</li>
              
              </ul>
            </div>
            <img src={figma} alt="img" />
            </div>  
          </div>
        </div>
        <div  style={{
          transition:'.4s',
  height: blo6 ? "100%" : "100px",
  overflow: blo6 ? "" : "hidden",
  borderRadius: blo6 ? "30px" : "30px", }} className="program--group__block">
          <div onClick={() =>{
              setBlo6(!blo6);
              // setBlo(!blo)
              setBlo1(false);
              setBlo3(false);
              setBlo4(false);
              setBlo5(false);
              setBlo2(false);
          }} className="program--group__block--ims">
            <div style={{alignItems: blo6 ? 'start' : 'center'}} className="program--group__block--ims__img">
              <div style={{alignItems: blo6 ? 'start' : 'center'}} className="program--group__block--ims__img--vden">
                <img src={kubo} alt="img" />
              <h3>Презентация проектов:</h3>
              </div>
                {
      blo6 ? 
      <GoChevronUp style={{fontSize:'25px'}}/>
      :
      <GoChevronDown style={{fontSize:'25px'}} />
    }
            </div>
          <div style={{transition:'.3s  ease-in-out',opacity: blo6 ? '1' : '0'}} 
          className="program--group__block--ims__text">
            <div className="program--group__block--ims__text--grou">
              <p>В этом модуле вы получите представление о том, в чем разница между UX и UI, а также почему они неразрывно связаны между собой. Мы обсудим, что такое интерфейс и затронем тему классификации дизайна и сайтов. Вы узнаете, какими принципами и в каком порядке важно руководствоваться в процессе проектирования, получите представление о том, как пользователи обрабатывают данные, изучите приёмы управления их вниманием и эмоциями. Научитесь работать в графическом редакторе Figma и пройдёте первые этапы погружения в UX/UI-дизайн.
              </p>
              <ul>
                <li>Как представлять свои дизайн-решения клиентам или команде разработчиков.</li>
              </ul>
            </div>
            <img src={figma} alt="img" />
            </div>  
          </div>
        </div>
        </div>
      </div>
    </div>
   </div>
  );
};
export default ProgramKurs;
