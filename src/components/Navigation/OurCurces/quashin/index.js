import React, { useState } from 'react'
import "./index.scss"
import {GoChevronDown} from "react-icons/go"

const Quashin = () => {
    const [blo,setBlo] = useState(false)
  return (
    <div className='quashin'>
        <h1>Частые вопросы</h1>
        <div className="quashin--group">
      <div  style={{height:blo ? '75%' : '30%',borderRadius: blo ? '20px' : '30px'
      }}className="quashin--group__block">  
      <div className="quashin--group__block--span">
      <p>Как проходит консультация?  <GoChevronDown onClick={() => {
        
        setBlo(!blo)}}/></p>
        <div style={{
            height:blo ? '100%' : '0'
        }} className="par"> <span
    //      style={{
    //         marginTop: 
    //     // display: blo ? 'block' : 'none',
    //   }}
      >
 Консультации на курсе программирования 
могут проходить в различных форматах, включая личные встречи, 
онлайн-конференции, чаты или форумы. Обычно студенты могут общаться 
с преподавателями, наставниками или соучастниками курса, чтобы получить 
ответы на вопросы, разъяснения материала или дополнительную поддержку.
 </span></div>
     
      </div>
    
      </div>

        </div>
    
    </div>
  )
}
 
 
 
export default Quashin
