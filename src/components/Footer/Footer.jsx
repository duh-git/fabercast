import "./Footer.css"

export default function Footer() {
  return <footer>
    <div className="logo-group">
      <h2>fabercast</h2>
      <div className="asd">
        <p>Мебельная фабрика · 1978</p>
        <p>@2026 FABERCAST. ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
      </div>
    </div>
    <div className="catalog-group">
      <p>Каталог</p>
      <ul>
        <li>Кухни</li>
        <li>Гостинные</li>
        <li>Ванные</li>
        <li>Офисы</li>
        <li>Прихожие</li>
      </ul>
    </div>
    <div className="company-group">
      <p>О нас</p>
      <ul>
        <li>Продукция</li>
        <li>Портфолио</li>
        <li>Контакты</li>
      </ul>
    </div>
    <div className="contact-group">
      <p>+7 (499) 666-66-66</p>
      <ul>
        <li>г. Москва, ул. 8 марта, <br /> ТЦ “Яркость” 2-й этаж</li>
      </ul>
    </div>
    <div className="social-group">
      <button>Оставить заявку</button>
      <ul>
        <li><img src="/src/assets/instagram.svg" alt="" /></li>
        <li><img src="/src/assets/facebook.svg" alt="" /></li>
        <li><img src="/src/assets/pinterest.svg" alt="" /></li>
      </ul>
    </div>
  </footer>
}