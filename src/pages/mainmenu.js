import React from 'react';
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from "react-bootstrap";


const selectedStyle = {
    backgroundColor: "white",
    color: "slategray"
}

export const Mainmenu = () =>
<nav className="main-menu">
<NavLink to="/">
    [Home Page]
</NavLink>
<NavLink to="/Combat" activeStyle={selectedStyle}>
    [Combat Page]
</NavLink>
<NavLink to="/Gathering" activeStyle={selectedStyle}>
    [Gathering Page]
</NavLink>
<NavLink to="/Crafting" activeStyle={selectedStyle}>
    [Crafting Page]
</NavLink>
<NavLink to="/Calculation" activeStyle={selectedStyle}>
    [Calculation]
</NavLink>
</nav>
/*
<Container fixed = "bottom" >
    <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/#/">[Home Page]</Navbar.Brand>
    </Navbar>
    <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/#/Combat">[Combat Page]</Navbar.Brand>
    </Navbar>
    <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/#/Gathering">[Gathering Page]</Navbar.Brand>
    </Navbar>
    <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/#/Crafting">[Crafting Page]</Navbar.Brand>
    </Navbar>
    <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/#/Calculation">[Calculation Page]</Navbar.Brand>
    </Navbar>
</Container>
*/