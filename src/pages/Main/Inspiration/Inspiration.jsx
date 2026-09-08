import InspirationCard from "./InspirationCard"
import "./Inspiration.css"

const mockData = [
  { image: "./inspiration-1.png", category: "Кухня", city: "Москва", name: "Кухня в классическом стиле", link: "a" },
  { image: "./inspiration-2.png", category: "Кухня", city: "Барвиха", name: "Гарнитур с витриной", link: "b" },
  { image: "./inspiration-3.png", category: "Кухня", city: "Рублевка", name: "Угловая кухня с островом", link: "c" },
  { image: "./inspiration-4.png", category: "Кухня", city: "Москва", name: "Латунные ручки и акценты", link: "d" },
]

export default function Inspiration() {
  return <section className="inspiration">
    <h2>Портфолио</h2>
    <div className="wrapper">
      <p>Работы, <br /> вдохновляющие нас</p>
      <button>Все работы <span>→</span></button>
    </div>
    <ul>
      {
        mockData.map((cardData) => {
          return <InspirationCard  key={cardData.link} {...cardData} />
        })
      }
    </ul>
  </section>
}