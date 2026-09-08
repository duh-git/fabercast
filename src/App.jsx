import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, Catalog } from "./pages";
import { Header } from "./components";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  );
}