import React from 'react';
import { BrowserRouter as Router, Routes, Route ,Link } from "react-router-dom";

function Navbar(props) {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about-us">About Us</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/blogs">Blogs</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/news">News</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/teams">Teams</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contact-us">Contact Us</Link>
            </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
        </nav>
  )
}

export default Navbar
