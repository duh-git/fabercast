import GalleryCard from "./GalleryCard"
import "./Gallery.css"

const mockData = [
  { image: "./gallery-1.png", category: "Комоды", name: "Комод “Geometry”", link: "a", price: 999 },
  { image: "./gallery-2.png", category: "Столы", name: "Стол “Nordic”", link: "b", price: 1999 },
  { image: "./gallery-3.png", category: "Стулья", name: "Стул “Rein”", link: "c", price: 399 },
  { image: "./gallery-4.png", category: "Тумбы", name: "Тумба “Art Faces”", link: "d", price: 999 },
]

export default function Gallery() {
  return <section className="gallery">
    <h2>Галерея</h2>
    <div className="wrapper">
      <p>Избранные позиции</p>
      <button>Весь каталог <span>→</span></button>
    </div>
    <ul>
      {
        mockData.map((cardData) => {
          return <GalleryCard key={cardData.link} {...cardData} />
        })
      }
    </ul>
  </section>
}