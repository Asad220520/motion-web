import React from 'react'
// import "./media.scss"
import black1 from '../../../img/black1.png'
import black2 from '../../../img/black2.png'
import black3 from '../../../img/black3.png'
import black4 from '../../../img/black4.png'
import black5 from '../../../img/black5.png'
import back6 from '../../../img/back6.png'
import black7 from '../../../img/black7.png'
import black8 from '../../../img/black8.png'


const Glav = () => {
  return (
      <div id='himages'>
      <div className="himages">
        <div className="himages--group">
        <img className='im g1' src={black1} alt="img" />
        <img className='im g2' src={black2} alt="img" />
        <img className='im g3' src={black3} alt="img" />
        <img className='im g4' src={black4} alt="img" />
        <img className='im g5' src={black5} alt="img" />
        <img  style={{width:'400px'}}className='im g6' src={back6} alt="img" />
        <img className='im g7' src={black7} alt="img" />
        <img style={{width:'200px'}} className='im g8' src={black8} alt="img" />
      <div className="himages--group__block">
        <h1><span>FRONT</span>END</h1>
        
        <p>Frontend - это часть веб-разработки, которая отвечает за создание пользовательского интерфейса и взаимодействие с пользователем в браузере.
 Она включает в себя различные технологии, такие
 как HTML, CSS и JavaScript, которые используются для создания структуры, стиля и поведения веб-страниц.</p>
        <button>Оставить заявку</button>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Glav

