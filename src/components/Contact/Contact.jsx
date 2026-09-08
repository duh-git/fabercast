import "./Contact.css"
import ContactImage from "/Contact.png"

export default function Contact() {
  return <section className="contact">
    <h2>Давайте создадим <br /> интерьер, который понравится <br /> именно вам</h2>
    <button>Позвонить нам</button>
    <img src={ContactImage} />
  </section>
}