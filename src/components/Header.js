import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({title}) => {

  const linkStyle = {
    
    textDecoration: "none",
    color: 'white'
  };
    
  return (
    <header>
        <div className='container'>
           <Link to='/' style={linkStyle}><h2>{title}</h2></Link> 
        </div>
    </header>
  )
}

export default Header