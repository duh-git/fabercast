import "./Contact.css"
import ContactImage from "/Contact.png"

export default function Contact() {
  return <section id="contacts" className="contact">
    <h2>Давайте создадим <br /> интерьер, который понравится <br /> именно вам</h2>
    <a href="tel:+74956666666">Позвонить нам</a>
    <img src={ContactImage} />
  </section>
}