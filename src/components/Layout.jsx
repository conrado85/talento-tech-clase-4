// components/Layout.jsx
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import Formulario from "./Formulario";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Nav />
      <Header />
      <main className="contenido">{children}</main>
      <Formulario />
      <Footer />
    </div>
  );
}
