import "./Contact.css"
import ContactImage from "/Contact.png"
import { openCallModal } from "../../utils/openCallModal";

export default function Contact() {
  return <section id="contacts" className="contact">
    <h2>Давайте создадим <br /> интерьер, который понравится <br /> именно вам</h2>
    <button onClick={openCallModal}>Позвонить нам</button>
    <img src={ContactImage} />
  </section>
}