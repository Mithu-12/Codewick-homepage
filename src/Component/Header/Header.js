import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { Container, Navbar } from 'react-bootstrap';
import logo from '../image/logo.png';

const Header = () => {
  
    return (

      
  <Navbar className="navmenu" bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
  <Container className='nav-container'>
      <Navbar.Brand href="#home" className="logo"><img src={logo} className='logo' alt="" width="60" height="60"/> <span>Insignia</span></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      <NavLink to="/home" className="items">
                    <li>About</li>
                  </NavLink>
                 <NavLink to="/about" className="items">
                    <li>Help</li>
                  </NavLink>
                  <NavLink to="/explore" className="items">
                  <li>Features</li>
                  </NavLink>
                  <NavLink to="/offer" className="items">
                  <li>SighUP</li>
                  </NavLink>
                  <NavLink to="/" className='input'>
                  <span>Request Demo <i class="fas fa-arrow-right"></i></span>
                  </NavLink>
                 
                  
      </Navbar.Collapse>
  </Container>
  </Navbar>
      
    );
};

export default Header;