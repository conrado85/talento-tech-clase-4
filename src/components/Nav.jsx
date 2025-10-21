import { useState } from "react";
import "../estilo/nav.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
function Nav() {

 const [user, setUser] = useState(null);

  const login = () =>
    setUser({
      id: 1,
      name: "John",
      permissions: ["analize"],
      roles: ["admin"],
    });
  const logout = () => setUser(null);


  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/formulario">Formulario</Link>
        </li>
      </ul>   
    </nav>
  );
}

export default Nav;
