import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../../../images/logo.png'
const NavBar = () => {
    return (
        <Navbar expand="lg">
            <div className='container'>
                <Navbar.Brand style={{float:'left'}}> 
                    <img style={{height:'100px'}} src={Logo} alt="logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse style={{width:'900px',float:'right'}} id="basic-navbar-nav">
                    <Nav  className="ml-auto">
                            <NavLink activeClassName='text-primary' to='/home' className='Menu'>
                                    Home
                            </NavLink>
                            <NavLink activeClassName='text-primary' to='/about' className='Menu'>
                                    About
                            </NavLink>
                            <NavLink activeClassName='text-primary' to='/service' className='Menu'>
                                    Service
                            </NavLink>
                            <NavLink activeClassName='text-primary' to='/pricing' className='Menu'>
                                    Pricing
                            </NavLink>
                            <NavLink activeClassName='text-primary' to='/team' className='Menu'>
                                    Our Team
                            </NavLink>
                            <button className='btn menu-btn'>
                                    Contact Us
                            </button>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default NavBar;