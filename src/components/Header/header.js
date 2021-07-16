// import React, { Component } from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <nav className="Header">
             <ul className="nav-links">
                <li id="title">Yahtzee++</li>
                <NavLink exact to="/" activeClassName="chosen" className="nav-buttons">
                    <li >Home</li>
                </NavLink>
                <NavLink exact to="/rules" activeClassName="chosen" className="nav-buttons">
                    <li >Rules</li>
                </NavLink>
                <NavLink exact to="/aboutus" activeClassName="chosen" className="nav-buttons">
                    <li >About Us</li>
                </NavLink>
                <NavLink exact to="/sinlgeplayer" activeClassName="chosen" className="nav-buttons">
                    <li >Single Player</li>
                </NavLink>
                <NavLink exact to="/multiplayer" activeClassName="chosen" className="nav-buttons">
                    <li >Multi Player</li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default Header