import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
// import "./Header.css"

const Header = () => (
  <header>
    <Navbar bg="white" variant="light">
      <Navbar.Brand href="#home">My Short Links</Navbar.Brand>
      <Button variant="outline-primary">Login</Button>
    </Navbar>
  </header>
)

export default Header
