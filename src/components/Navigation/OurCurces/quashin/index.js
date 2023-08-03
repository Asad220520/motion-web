import React, { useState } from "react";
import "./index.scss";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

const Quashin = () => {
  const [blo1, setBlo1] = useState(false);
  const [blo2, setBlo2] = useState(false);
  const [blo3, setBlo3] = useState(false);
  const [blo4, setBlo4] = useState(false);
  const [blo5, setBlo5] = useState(false);
  const [blo6, setBlo6] = useState(false);
  return (
  <div id="quashin">
    <div className="container ">
      <div  className="quashin">
        <h1>Частые вопросы</h1>
        <div className="quashin--group">


          <div style={{
              height: blo1 ? "45%" : "60px",
              overflow: blo1 ? "" : "hidden",
              borderRadius: blo1 ? "20px" : "30px", }}
            className="quashin--group__block"
          >
            <div  onClick={() => {
                    setBlo1(!blo1);
                    setBlo2(false);
                    setBlo3(false);
                    setBlo4(false);
                    setBlo5(false);
                    // setBlo(!blo)
                    setBlo6(false);
                  }}className="quashin--group__block--span">
              <p>
              Нужны ли начальные знания для учёбы?
                {
                  blo1 ? 
                  <GoChevronUp style={{fontSize:'25px'}}/>
                  :
                  <GoChevronDown style={{fontSize:'25px'}} />
                }
              </p>
              <div className="par"
              >
                <span style={{transition:'.2s step-end',
                  opacity:blo1 ? '1' : '0'}} >
                 Для учебы на курсе
 программирования обычно рекомендуется иметь базовые 
знания компьютера и уметь работать с операционной системой.
 Определенные курсы могут требовать предварительных знаний
 или навыков в определенных языках программирования или областях
 разработки. Однако, существуют и курсы, которые предназначены
 для начинающих и предоставляют все необходимые основы.
                </span>
              </div>
            </div>
          </div>
          <div style={{
              height: blo2 ? "40%" : "60px",
              overflow: blo2 ? "" : "hidden",
              borderRadius: blo2 ? "20px" : "30px", }}
            className="quashin--group__block"
          >
            <div  onClick={() => {
                    setBlo2(!blo2);
                    setBlo1(false);
                    setBlo3(false);
                    // setBlo(!blo)
                    setBlo4(false);
                    setBlo5(false);
                    setBlo6(false);
                  }}className="quashin--group__block--span">
              <p>
              Как проходит консультация?
                {
                  blo2 ? 
                  <GoChevronUp style={{fontSize:'25px'}}/>
                  :
                  <GoChevronDown style={{fontSize:'25px'}} />
                }
              </p>
              <div className="par"
              >
                <span style={{transition:'.2s step-end',
                  opacity:blo2 ? '1' : '0'}} >
                 Консультации на курсе программирования 
могут проходить в различных форматах, включая личные встречи, 
онлайн-конференции, чаты или форумы. Обычно студенты могут общаться 
с преподавателями, наставниками или соучастниками курса, чтобы получить 
ответы на вопросы, разъяснения материала или дополнительную поддержку. 
                </span>
              </div>
            </div>
          </div>

          <div style={{
              height: blo3 ? "45%" : "60px",
              overflow: blo3 ? "" : "hidden",
              borderRadius: blo3 ? "20px" : "30px", }}
            className="quashin--group__block"
          >
            <div  onClick={() => {
                    setBlo3(!blo3);
                    setBlo2(false);
                  
                    // setBlo(!blo)
                    setBlo1(false);
                    setBlo4(false);
                    setBlo5(false);
                    setBlo6(false);
                  }}className="quashin--group__block--span">
              <p>
              Какой график обучения? 
                {
                  blo3 ? 
                  <GoChevronUp style={{fontSize:'25px'}}/>
                  :
                  <GoChevronDown style={{fontSize:'25px'}} />
                }
              </p>
              <div className="par"
              >
                <span style={{transition:'.2s step-end',
                  opacity:blo3 ? '1' : '0'}} >
                  Получится ли совмещать его с работо? График обучения может 
варьироваться в зависимости от курса и его формата. Некоторые курсы предлагают
 гибкий график, который позволяет студентам проходить материал в своем темпе, в 
то время как другие могут иметь определенные сроки и дедлайны. Если у вас есть 
работа, то лучше выбрать курс с гибким графиком, чтобы иметь возможность совмещать 
учебу и работу.
                </span>
              </div>
            </div>
          </div>

          <div style={{
              height: blo4 ? "35%" : "60px",
              overflow: blo4 ? "" : "hidden",
              borderRadius: blo4 ? "20px" : "30px", }}
            className="quashin--group__block"
          >
            <div  onClick={() => {
                    setBlo4(!blo4);
                    setBlo3(false);
                    // setBlo(!blo)
                    setBlo2(false);
                    setBlo1(false);
                 
                    setBlo5(false);
                    setBlo6(false);
                  }}className="quashin--group__block--span">
              <p>
              Мне помогут трудоустроится?
                {
                  blo4 ? 
                  <GoChevronUp style={{fontSize:'25px'}}/>
                  :
                  <GoChevronDown style={{fontSize:'25px'}} />
                }
              </p>
              <div className="par"
              >
                <span style={{transition:'.2s step-end',
                  opacity:blo4 ? '1' : '0'}} >
                
 Предоставляем помощь в трудоустройстве,
 предлагая ресурсы для поиска работы или установление контактов с работодателями. 
Однако, не все курсы предлагают гарантию трудоустройства.
                </span>
              </div>
            </div>
          </div>

          <div style={{
              height: blo5 ? "40%" : "60px",
              overflow: blo5 ? "" : "hidden",
              borderRadius: blo5 ? "20px" : "30px", }}
            className="quashin--group__block"
          >
            <div  onClick={() => {
                    setBlo5(!blo5);
                    setBlo4(false);
                  
                    setBlo3(false);
                    // setBlo(!blo)
                    setBlo2(false);
                    setBlo1(false);
                    setBlo6(false);
                  }}className="quashin--group__block--span">
              <p>
              Кто мне поможет, если возникнут вопросы?
                {
                  blo5 ? 
                  <GoChevronUp style={{fontSize:'25px'}}/>
                  :
                  <GoChevronDown style={{fontSize:'25px'}} />
                }
              </p>
              <div className="par"
              >
                <span style={{transition:'.2s step-end',
                  opacity:blo5 ? '1' : '0'}} >
                Курсы программирования обычно имеют команду 
преподавателей и наставников, которые готовы помочь вам с возникшими вопросами и трудностями.
 Они могут предоставить разъяснения материала, дать дополнительные примеры и объяснения,
 а также помочь в решении конкретных проблем.
                </span>
              </div>
            </div>
          </div>
           <div style={{
            margin: blo1 || blo2 || blo3 || blo4 || blo5 || blo6 ? '0 0 80px 0' : '0 0 0 0',
              height: blo6 ? "40%" : "60px",
              overflow: blo6 ? "" : "hidden",
              borderRadius: blo6 ? "20px" : "30px", }}
            className="quashin--group__block"
          >
            <div  onClick={() => {
                    setBlo6(!blo6);
                    setBlo5(false);
                    setBlo4(false);
                    setBlo3(false);
                    setBlo2(false);
                    setBlo1(false);
                  }}className="quashin--group__block--span">
              <p>
              Какая техника нужна для обучения?
                {
                  blo6 ? 
                  <GoChevronUp style={{fontSize:'25px'}}/>
                  :
                  <GoChevronDown style={{fontSize:'25px'}} />
                }
              </p>
              <div className="par"
              >
                <span style={{transition:'.2s step-end',
                  opacity:blo6 ? '1' : '0'}} >
                  Необходим
 компьютер или ноутбук с доступом в Интернет, чтобы получить доступ к материалам курса, 
выполнять задания и практиковаться в программировании. Желательно, чтобы ноутбук 
был достаточно мощным, чтобы запускать современные инструменты и среды 
разработки.
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
