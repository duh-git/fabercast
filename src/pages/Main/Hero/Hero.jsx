import "./Hero.css"

export default function Hero() {
  return <section className="hero">
    <div className="hero-message">
      <h1>
        Производство <br />
        <span>полного</span> цикла
      </h1>
      <p>От создания проекта до идеального интерьера в вашем доме</p>
      <div className="action">
        <button className="call">Позвонить нам</button>
        <button className="catalog">Каталог</button>
      </div>
    </div>
    <img src="/src/assets/Hero.png" style={{ width: "60vw" }} />
  </section>
}