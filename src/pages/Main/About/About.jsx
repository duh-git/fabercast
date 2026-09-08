import "./About.css"
import AboutImage from "/About.png"

export default function About() {
  return <section className="about">
    <div className="about-image-wrapper">
      <img src={AboutImage} />
      <p><span>46</span> <br />лет опыта</p>
    </div>
    <div className="about-message">
      <h2>О нас</h2>
      <h3>Ремесло, которое не <br /> терпит <br /> <span>компромиссов</span></h3>
      <p>
        С 1978 года мы создаём мебель, где каждый шип, <br />
        каждое соединение и каждый слой <br />
        лакокрасочного покрытия выполнен вручную. <br />
        Никакой серийности — только авторские изделия.
      </p>
      <p>
        Мы работаем с орехом, дубом, ясенем и <br />
        редкими экзотическими породами. <br />
        Гарантия на все изделия — 25 лет.
      </p>
    </div>
  </section>
}