import React from 'react'
import '../header/header.scss'
import logo from '../../img/logo.png'

const Header = () => {
  return (
    <div>
      <header className='header'>
        <img className='header__logo' src={logo} />
        <div className='header__buttoncontainer'>
          <button>Merch</button>
          <button>Support</button>
        </div>
      </header>
      <div className='background'>

      </div>
    </div>
  )
}

export default Header