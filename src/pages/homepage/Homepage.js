import React, { useState } from 'react'
import bg from '../../img/bg.png'
import mobileImg from '../../img/mobile.png'
import swordImg from '../../img/sword.png'
import gameplayImg from '../../img/gameplay.png'
import containerImg from '../../img/container.png'
import merchImg from '../../img/merch.png'
import secondMerchImg from '../../img/secondmerch.png'
import '../homepage/homepage.scss'

const Homepage = () => {

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
                <p>Get fitter today!</p>
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
              <h4 className='gameplay-text-h4'><span className='detail'>Genre:</span>RPG/Fitness</h4>
              <h4 className='gameplay-text-h4'><span className='detail'>Type:</span>Mobile game</h4>
            </div>
          </div>
          <div className='gameplay-container-right'>
            <img className='gameplay-image' src={gameplayImg}></img>
          </div>
        </div>
        <div className='container-img' style={{ backgroundImage: `url(${containerImg})` }} alt='#'>
          <div className='container-img-leftside'>
          <img className='merch-image' src={merchImg}></img>
          </div>
          <div className='container-img-rightside'>
            <div className='center-container'>
              <div className='field-one'>
              <h2 className='container-img-title'>Buy merch to support the game</h2>
              <p>Made with 100% cotton</p>
              </div>
              <div className='field-two'>
                <h3>Get merch for FREE! just by playing the game</h3>
                <img src={secondMerchImg}></img>
              </div>
              <div className='field-three'>
                <h3>People that reach the rank of <span className='legend'>legend</span> will get a <span className='free'>free</span> T-shirt with their character on it</h3>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Homepage