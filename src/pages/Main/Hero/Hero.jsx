import "./Hero.css"
import HeroImage from "/Hero.png"

export default function Hero() {
  return <section className="hero">
    <div className="hero-message">
      <h1>
        Производство <br />
        <span>полного</span> цикла
      </h1>
      <p>От создания проекта до идеального интерьера в вашем доме</p>
      <div className="action">
        <a href="tel:+74956666666" className="call">Позвонить нам</a>
        <a href="/catalog" className="catalog">Каталог</a>
      </div>
    </div>
    <img src={HeroImage} />
  </section>
}