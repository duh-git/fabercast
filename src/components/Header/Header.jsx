import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "/fabercast-logo.svg";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={isOpen ? "open" : ""}>
      <a href="/" className="logo-wrapper">
        <img src={logo} style={{ height: 80 }} alt="Fabercast logo" />
        <div className="logo-text">
          <h2>fabercast</h2>
          <p>Мебельная фабрика · 1978</p>
        </div>
      </a>

      <nav className={isOpen ? "open" : ""}>
        <ul>
          <li><a href="/#about" onClick={() => setIsOpen(false)}>О нас</a></li>
          <li><a href="/#gallery" onClick={() => setIsOpen(false)}>Галерея</a></li>
          <li><a href="/catalog" onClick={() => setIsOpen(false)}>Каталог</a></li>
          <li><a href="/#contacts" onClick={() => setIsOpen(false)}>Контакты</a></li>
        </ul>
      </nav>

      <a className="phone-number" href="tel:+74956666666">
        +7 (495) 666-66-66
      </a>

      <button
        className="burger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Меню"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}