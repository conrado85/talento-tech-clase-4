import { useState } from "react";
import "../styles/nav.css";
import {  Link } from "react-router-dom";
function Nav() {
  
 const menuNavBar = [
    { to: "/", label: "Home" },
    { to: "/login", label: "login" },
    { to: "/products", label: "Products" },
    { to: "/cart", label: "Cart" },
    { to: "/checkout", label: "Checkout" },
 ]
  
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {menuNavBar.map((item) => (
          <li key={item.to} className="navbar-item">
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
      </ul>   
       
    </nav>
  );
}

export default Nav;
