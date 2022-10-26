import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar (){

    return(
      <header className="nav_bar">
      <div className="logo">
        <h1>Maya Travels</h1>
      </div>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <a href="#about">About Us</a>
        <Link to="/destinations">Destinations</Link>
        <a href="#service">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#blogs">Blogs</a>
        <a href="#contact us">Contact Us</a>
        <Link to="/logout">Logout</Link>
      </div>
      <div className="book">
        <Link to="./login"><button className="booknow"><b>Login/Register</b></button></Link>
      </div>
    </header>
    )

}