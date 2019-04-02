import React from 'react';
import App from '../components/App'
import { NavLink } from 'react-router-dom'

import '../stylesheets/pages.scss'

const selectedStyle = {
    backgroundColor: "white",
    color: "slategray"
}
    
const Mainpages = ({children}) =>
    <div className="Mainpage">
        <Mainmenu />
        <section className="content">
            {children}
        </section>
    </div>
    
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
        <h1>Combat Page</h1>
    </Mainpages>

export const Gathering = () =>
    <Mainpages>
        <h1>Gathering Page</h1>
    </Mainpages>

export const Crafting = () =>
    <Mainpages>
        <h1>Crafting Page</h1>
    </Mainpages>

export const Calculation = () =>
    <Mainpages>
        <App />
    </Mainpages>

export const Whoops404 = ({ location }) =>
    <div className="Whoops-404">
        <hi>找不到以'{location.pathname}'為名稱的分頁</hi>
    </div>