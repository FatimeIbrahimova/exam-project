import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="container">
          <div className="nav-left">
            <h1>Coza Store</h1>
            <ul>
              <NavLink to="/">
                <li>Home</li>
              </NavLink>
              <NavLink to="/add">
                <li>Add</li>
              </NavLink>
              <NavLink to="/features">
                <li>Features</li>
              </NavLink>
              <NavLink to="/blog">
                <li>Blog</li>
              </NavLink>
              <NavLink to="/about">
                {" "}
                <li>About</li>
              </NavLink>
              <NavLink to="/contact">
                <li>Contact</li>
              </NavLink>
            </ul>
          </div>
          <div className="nav-right">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-regular fa-heart"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
