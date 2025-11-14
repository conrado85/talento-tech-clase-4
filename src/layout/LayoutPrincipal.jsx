// components/Layout.jsx
import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../components/Nav";


 function LayoutPrincipal({ children }) {
  return (
    <div className="layout">
      <Nav />
      <Header />
      <main className="contenido"><Outlet /></main>
      <Footer />
    </div>
  );
}
      
export default LayoutPrincipal;