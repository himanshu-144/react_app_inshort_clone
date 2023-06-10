import React from 'react'
import "./Nav.css"
import HamburgerDrawer from "./HamburgerDrawer"

const Nav = ({setCategory}) => {
 
  return (
    <div className='Nav'>
      <div className='icons'>
         <HamburgerDrawer setCategory={setCategory}/>
      </div>
      <img src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png'
        style={{width: 150 , height:70 , cursor: "pointer"}}
        alt='logo'
      />
        
    </div>
  )
}

export default Nav
