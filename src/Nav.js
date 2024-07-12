import React from 'react'
import Logo from './Logo'

function Nav() {
  return (
    <>
    <div className='nav-empty'></div>
    <nav>
        <div className='logo'><div className='svg-logo'><Logo></Logo></div> <span>Portofolio</span></div>
        <div></div>
        <div className='navigation-items'>
        </div>
    </nav>
    </>
  )
}

export default Nav