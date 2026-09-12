import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, Catalog, Product } from "./pages";
import { Confidentiality } from "./pages/documents";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/confidentiality" element={<Confidentiality />} />
      </Routes>
    </BrowserRouter>
  );
}