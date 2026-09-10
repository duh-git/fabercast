import "./Inspiration.css"

const mockData = [
  { image: "./inspiration-1.png", category: "Кухня", city: "Москва", name: "Кухня в классическом стиле", link: "a" },
  { image: "./inspiration-2.png", category: "Кухня", city: "Барвиха", name: "Гарнитур с витриной", link: "b" },
  { image: "./inspiration-3.png", category: "Кухня", city: "Рублевка", name: "Угловая кухня с островом", link: "c" },
  { image: "./inspiration-4.png", category: "Кухня", city: "Москва", name: "Латунные ручки и акценты", link: "d" },
]

export default function Inspiration() {
  return <section id="inspiration" className="inspiration">
    <h2>Портфолио</h2>
    <div className="wrapper">
      <p>Работы, <br /> вдохновляющие нас</p>
      <a href="#">Все работы <span>→</span></a>
    </div>
    <ul>
      {
        mockData.map((card) => {
          return <li
            key={card.name}
            href={card.link}
          >
            <img src={card.image} alt={card.name} />
            <p>{card.category} · {card.city}</p>
            <h3>{card.name}</h3>
          </li >
        })
      }
    </ul>
  </section>
}