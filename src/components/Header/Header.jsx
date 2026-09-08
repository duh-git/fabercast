import logo from "/fabercast-logo.svg"
import "./Header.css"

export default function Header() {
  return <header>
    <a href="/" className="logo-wrapper">
      <img src={logo} style={{ height: 80 }} alt="" />
      <div className="logo-text">
        <h2>fabercast</h2>
        <p>мебельная фабрика · 1978</p>
      </div>
    </a>
    <nav>
      <ul>
        <a href="/#about">О нас</a>
        <a href="/#gallery">Галерея</a>
        <a href="/catalog">Каталог</a>
        <a href="/#contacts">Контакты</a>
      </ul>
    </nav>
    <a className="phone-number" href="tel:+74956666666">+7 (495) 666-66-66</a>
  </header>
}