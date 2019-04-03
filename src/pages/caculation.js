import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from "react-bootstrap";
import { NavLink, Route } from 'react-router-dom'


import { Mainmenu } from "./mainmenu";
import App from '../components/App'
import '../stylesheets/caculationPages.scss'

const selectedStyle = {
    backgroundColor: "white",
    color: "slategray",
}


export const Calculation = ({ match }) =>
<Container style={ {margin: 0}}>
<Row>
<Col lg={2}>
<Mainmenu />
</Col>
<Col lg={10}>
<Row>
<Topmenu match={match} />
</Row>
<Row>
<Route exact path="/Calculation" component={Info} />
<Route path="/Calculation/Exp" component={Exp} />
<Route path="/Calculation/Production" component={App} />
</Row>
</Col>
</Row>
</Container>



const Topmenu = ({ match }) =>
<div className="Top-menu">
    <li>
        <NavLink to="/Calculation" style={match.isExact && selectedStyle}>
            [Info]
        </NavLink>
    </li>
    <li>
        <NavLink to="/Calculation/Exp" activeStyle={selectedStyle}>
            [Exp]
        </NavLink>
    </li>
    <li>
        <NavLink to="/Calculation/Production" activeStyle={selectedStyle}>
            [Production]
        </NavLink>
    </li>
</div>

const Info = () =>
<div>
    <p>Select what you want to caculate from top-menu</p>
</div>

const Exp = () =>
<div>
    <p>Here you can caculate Exp from some level to target level.</p>
    <p>But Building...</p>
</div>
