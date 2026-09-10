import "./Footer.css"

export default function Footer() {
  return <footer>
    <h2>fabercast</h2>
    <ul className="footer__catalog">
      <li><a href="/catalog">Каталог</a></li>
      <li>Кухни</li>
      <li>Гостинные</li>
      <li>Ванные</li>
      <li>Офисы</li>
      <li>Прихожие</li>
    </ul>
    <ul className="footer__about">
      <li><a href="/">Компания</a></li>
      <li><a href="/about">О нас</a></li>
      <li><a href="/catalog">Продукция</a></li>
      <li><a href="/#inspiration">Портфолио</a></li>
      <li><a href="/#contacts">Контакты</a></li>
    </ul>
    <ul className="footer__contact">
      <li><a href="tel:+74956666666">+7 (499) 666-66-66</a></li>
      <li>г. Москва, ул. 8 марта, <br /> ТЦ “Яркость” 2-й этаж</li>
      <li className="leave-request"><a href="tel:+74956666666">Оставить заявку</a></li>
    </ul>
    <ul className="footer__social">
      <li><a href=""><img src="/src/assets/instagram.svg" alt="" /></a></li>
      <li><a href=""><img src="/src/assets/facebook.svg" alt="" /></a></li>
      <li><a href=""><img src="/src/assets/pinterest.svg" alt="" /></a></li>
    </ul>
    <div className="footer__copyright">
      <p>Мебельная фабрика · 1978</p>
      <p>@2026 FABERCAST. ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
    </div>
  </footer>
}