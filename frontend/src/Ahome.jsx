import React from 'react'
import './Ahome.css'
import { Link } from 'react-router-dom'
 const Ahome = () => {
  return (
    <div>
<div id="viewport">
  {/* Sidebar */}
  <div id="sidebar">
    <header>
      <a href="#">Admin</a>
    </header>
    <header>
        <Link to={'/Dash'}>
      <a >DashBoard</a>
      </Link>
    </header>
    <header>
        <Link to={'/Aonline'}>
      <a >Yoga Online</a></Link>
    </header>
    <header>
        <Link to={'/Atrain'}>
      <a >Training Centre</a></Link>
    </header>
    <header>
        <Link to={'/'}>
      <a>Log Out</a></Link>
    </header>
   
  </div>
  {/* Content */}
  <div id="content">
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <ul className="nav navbar-nav navbar-right">
        
          
        </ul>
      </div>
    </nav>

  </div>
</div>

    </div>
  )
}
export default Ahome
