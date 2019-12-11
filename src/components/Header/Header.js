import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import './Header.scss';
import LogOut from '../LogOut/LogOut';

const Header = () => {
  const isLogIn = localStorage.getItem('token');
  return (
    <header className="navbarContainer">
      <Navbar bg="white" variant="light">
        <Navbar.Brand href="/Main">My-Links</Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        {isLogIn ? (
          <LogOut />
        ) : (
          <Button href="/Login" variant="outline-primary">
            Login
          </Button>
        )}
      </Navbar>
    </header>
  );
};

export default Header;
