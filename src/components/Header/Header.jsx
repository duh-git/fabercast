import { useState } from "react";
import logo from "/fabercast-logo.svg";
import CallModal from "../CallModal/CallModal";
import { openCallModal } from "../../utils/openCallModal";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={isOpen ? "open" : ""}>
      <a href="/#" className="logo-wrapper">
        <img src={logo} alt="Fabercast logo" />
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

      <button className="phone-number" onClick={openCallModal}>
        +7 (961) 820-50-70
      </button>

      <button
        className="burger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Меню"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <CallModal />
    </header>
  );
}