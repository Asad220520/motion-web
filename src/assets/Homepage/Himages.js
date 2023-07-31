import React from 'react'
import './index.scss'
import black1 from '../../img/black1.png'
import black2 from '../../img/black2.png'
import black3 from '../../img/black3.png'
import black4 from '../../img/black4.png'
import black5 from '../../img/black5.png'
import back6 from '../../img/back6.png'
import black7 from '../../img/black7.png'
import black8 from '../../img/black8.png'

export const Himages = () => {
  return (
    <div id='himages'>
      <div className="himages">
        <div className="himages--group">
        {/* <img className='im g1' src={black1} alt="img" />
        <img className='im g2' src={black2} alt="img" />
        <img className='im g3' src={black3} alt="img" />
        <img className='im g4' src={black4} alt="img" />
        <img className='im g5' src={black5} alt="img" />
        <img  style={{width:'400px'}}className='im g6' src={back6} alt="img" />
        <img className='im g7' src={black7} alt="img" />
        <img style={{width:'200px'}} className='im g8' src={black8} alt="img" /> */}
      <div className="himages--group__block">
        <h1>MOTION WEB <span>IT</span> ACADEMY</h1>
        <p>Лицензированная IT академия в Бишкеке</p>
        <button>Оставить заявку</button>
      </div>
        </div>
      </div>
    </div>
  )
}
export default Himages;
