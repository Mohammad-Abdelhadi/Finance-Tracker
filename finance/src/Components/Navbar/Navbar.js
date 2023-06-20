import React from 'react'
// import Link from 'react-dom'
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import plus from '../../Images/plus.svg'
import chart from '../../Images/chart.svg'
import wallet from '../../Images/wallet.svg'
import user from '../../Images/user.svg'
import home from '../../Images/home.svg'

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>
const Navbar = () => {
  return (
    <Nav
    activeKey="/home"
   
    className="navbar fixed-bottom navbar-light bg-light "
  >
    <Nav.Item>
      <Nav.Link href="/">
        <img src={home} alt="" className='home'/>
        </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1"><img src={chart} alt="" className='chart' /></Nav.Link>
    </Nav.Item>
  
     <img src={plus} alt="" className='plus' />
 
    <Nav.Item>
      <Nav.Link eventKey="link-2"><img src={wallet} alt="" className='wallet'/></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2"><img src={user} alt="" className='user'/></Nav.Link>
    </Nav.Item>
    
  </Nav>
  )
}

export default Navbar