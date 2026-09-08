import logo from "/fabercast-logo.svg"
import "./Header.css"

export default function Header() {
  return <header>
    <div className="logo-wrapper">
      <img src={logo} style={{ height: 80 }} alt="" />
      <div className="logo-text">
        <h2>fabercast</h2>
        <p>мебельная фабрика · 1978</p>
      </div>
    </div>
    <nav>
      <ul>
        <a href="">О нас</a>
        <a href="">Галлерея</a>
        <a href="">Каталог</a>
        <a href="">Контакты</a>
      </ul>
    </nav>
    <p className="phone-number">+7 (495) 666-66-66</p>
  </header>
}