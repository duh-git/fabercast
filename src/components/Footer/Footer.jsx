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
        <li><a href="/catalog">Продукция</a></li>
        <li><a href="/#inspiration">Портфолио</a></li>
        <li><a href="/#contacts">Контакты</a></li>
      </ul>
    </div>
    <div className="contact-group">
      <a href="tel:+74956666666">+7 (499) 666-66-66</a>
      <ul>
        <li>г. Москва, ул. 8 марта, <br /> ТЦ “Яркость” 2-й этаж</li>
      </ul>
    </div>
    <div className="social-group">
      <a className="leave-request" href="tel:+74956666666">Оставить заявку</a>
      <ul>
        <li><a href=""><img src="/src/assets/instagram.svg" alt="" /></a></li>
        <li><a href=""><img src="/src/assets/facebook.svg" alt="" /></a></li>
        <li><a href=""><img src="/src/assets/pinterest.svg" alt="" /></a></li>
      </ul>
    </div>
  </footer>
}