import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./page/HomePage"
import Formulario from "./page/Formulario"

import Layout from "./layout/LayoutPrincipal";
function App() {
  return (
    <Router>
      <Routes>
         <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Formulario />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductsDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Route>
        
      </Routes>
    </Router>
  );
}


export default App
