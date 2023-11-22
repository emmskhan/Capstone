import React from "react";
import logo from "../assets/Logo .svg"
import '../styles/nav.css';

const Nav = () => {
    return (
        <nav className="navbar">
            <div className="logo">
            <img src={logo} alt="Little Lemon Logo" />
            </div>
            <ul className="nav-action-list">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order-online">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;