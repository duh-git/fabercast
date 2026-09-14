import { openCallModal } from "../../utils/openCallModal";
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
      <li><a href="/confidentiality">Политика <br /> конфиденциальности</a></li>
    </ul>
    <ul className="footer__contact">
      <li><button onClick={openCallModal}>+7 (961) 820-50-70</button></li>
      <li>РСО-Алания, г. Владикавказ, <br /> ул. Алагирская, д. 5, пом. 4</li>
      <li className="leave-request"><button onClick={openCallModal}>оставить заявку</button></li>
    </ul>
    <ul className="footer__social">
      <li><a href=""><img src="/instagram.svg" alt="" /></a></li>
      <li><a href=""><img src="/facebook.svg" alt="" /></a></li>
      <li><a href=""><img src="/pinterest.svg" alt="" /></a></li>
    </ul>
    <div className="footer__copyright">
      <p>ООО "Владикавказская Мебельная Фабрика"</p>
      <p>@2026 FABERCAST. ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
    </div>
  </footer>
}