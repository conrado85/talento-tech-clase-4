import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./page/home"
import Formulario from "./page/Formulario"

import Layout from "./components/Layout";
function App() {
  return (
    <Router>
      <Routes>
         <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/formulario" element={<Formulario />} />
        </Route>
        
      </Routes>
    </Router>
  );
}


export default App
