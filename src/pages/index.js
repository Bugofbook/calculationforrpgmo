import React from 'react';
import { NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from "react-bootstrap";

import '../stylesheets/pages.scss'

const selectedStyle = {
    backgroundColor: "white",
    color: "slategray"
}
    
export const Mainpages = ({children}) =>
<Container style={{margin: 0}}>
    <Row>
    <Col lg={2}>
    <Mainmenu />
    </Col>
    <Col lg={10}>
    {children}
    </Col>
    </Row>
</Container>
/*
<div className="Mainpage">
        <Mainmenu />
        <div className="main-content">
            {children}
        </div>
    </div>
*/    
const Mainmenu = () =>
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

export const Home = () =>
    <Mainpages>
        <h1>Home Page</h1>
    </Mainpages>

export const Combat = () =>
    <Mainpages>
    <Container>
    <Row>
        <p>TopCombat Page</p>
    </Row>
    <Row>
        <Col>Content1</Col>
        <Col>Content2</Col>
        <Col>Content3</Col>
    </Row>
    </Container>
    </Mainpages>

export const Gathering = () =>
    <Mainpages>
        <h1>Gathering Page</h1>
    </Mainpages>

export const Crafting = () =>
    <Mainpages>
        <h1>Crafting Page</h1>
    </Mainpages>

export const Whoops404 = ({ location }) =>
    <div className="whoops-404">
        <hi>we can not find '{location.pathname}' Page.</hi>
    </div>

