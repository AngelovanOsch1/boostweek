import React, { useState } from 'react'
import bg from '../../img/bg.png'
import mobileImg from '../../img/mobile.png'
import swordImg from '../../img/sword.png'
import gameplayImg from '../../img/gameplay.png'
import '../homepage/homepage.scss'

const Homepage = () => {

  const [theme, setTheme] = useState('light')

  console.log(theme)

  return (
    <div>
        <div className='bg' style={{ backgroundImage: `url(${bg})` }} alt='#'>
          <div className='bg__leftside'>
            <img className='leftside__image' src={mobileImg}></img>
          </div>
          <div className='bg__rightside'>
            <div className='bg__container'>
              <div className='bg__title'>
              <img className='bg__logo' src={swordImg}></img>
                <h1>BattleFit GO</h1>
                <h3>New augment reality game</h3>
                <h5>Get fitter today!</h5>
              </div>
              <div className='bg__download'>
              <h4>Free on the playstore and appstore</h4>
              <button>Download now</button>
              </div>
            </div>
          </div>
        </div>
        <div className='gameplay-container'>
          <div className='gameplay-container-left'>
            <div className='gameplay-field'>
              <h1 className='gameplay-text-h1'>What is this game about?</h1>
              <h3 className='gameplay-text-h3'>This is not any normal game, it is meant to be fun while also getting fit. you can get some awesome rewards like merch!</h3>
            </div>
            <div className='gameplay-field'>
              <h4 className='gameplay-text-h4'><span>Genre:</span>RPG/Fitness</h4>
              <h4 className='gameplay-text-h4'><span>Type:</span>Mobile game</h4>
            </div>
          </div>
          <div className='gameplay-container-right'>
            <img className='gameplay-image' src={gameplayImg}></img>
          </div>
        </div>
    </div>
  )
}

export default Homepage