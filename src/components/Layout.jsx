// components/Layout.jsx
import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";


 function Layout({ children }) {
  return (
    <div className="layout">
      <Nav />
      <Header />
      <main className="contenido"><Outlet /></main>
      <Footer />
    </div>
  );
}
      
export default Layout;