import { Header, Contact, Footer } from "../../components"
import "./Catalog.css"

const mockData = {
  allAmount: 4,
  categories:
    [
      { name: "Столы", amount: 1 },
      { name: "Стулья", amount: 2 },
      { name: "Комоды", amount: 1 },
      { name: "Освещение", amount: 0 }
    ],
  products: [
    { category: "Стол", name: "Стол “Nordic”", materials: ["Массив ореха", "Кожа", "Латунь"], price: 799 },
    { category: "Стул", name: "Стул “Nordic”", materials: ["Ткань букле", "Массив дуба"], price: 399 },
    { category: "Комод", name: "Комод “Geometry”", materials: ["Массив ореха", "Кожа", "Латунь"], price: 999 },
    { category: "Комод", name: "Тумба “Art Faces”", materials: ["Керамика", "Дерево", "Металл"], price: 999 },
  ]
}

export default function Catalog() {
  return <>
    <Header />
    <section className="catalog">
      <h1>Каталог</h1>
      <ul>
        {
          mockData.categories.map((category) => {
            <li key={category.name}>{category.name} ({category.amount})</li>
          })
        }
      </ul>
    </section>
    <Contact />
    <Footer />
  </>
}