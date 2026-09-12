import { Header, Contact, Footer } from "../../components"
import "./Catalog.css"

export default function Catalog() {
  return <>
    <Header />
    <section className="catalog">
      <h1>Каталог</h1>
      <nav>
        <ul>
          <li className="active">Все (4)</li>
          <li>Столы (1)</li>
          <li>Стулья (2)</li>
          <li>Комоды (1)</li>
          <li>Освещение (0)</li>
        </ul>
        <div className="search">
          <img src="/search.svg" alt="search" />
          <input id="search-input" type="text" placeholder="Поиск по каталогу..." />
        </div>
      </nav>
      <hr />
      <ul className="catalogList">
        <li>
          <div>
            <img src="/catalog-1.png" alt="" />
            <p className="catcoll">СТОЛ • КОЛЛЕКЦИЯ</p>
            <h2 className="name">Стол “Nordic”</h2>
          </div>
          <div className="cardInfo">
            <p className="category">Столы</p>
            <p className="material">Массив ореха, кожа, латунь</p>
            <p className="price">999 $</p>
            <div className="action">
              <a href="/product/example">Подробнее</a>
              <button>Оставить заявку</button>
            </div>
          </div>
        </li>
        <li>
          <div>
            <img src="/catalog-2.png" alt="" />
            <p className="catcoll">КОМОД • КОЛЛЕКЦИЯ</p>
            <h2 className="name">Комод “Geometry”</h2>
          </div>
          <div className="cardInfo">
            <p className="category">Комоды</p>
            <p className="material">Массив дуба, латунь, лак</p>
            <p className="price">999 $</p>
            <div className="action">
              <a href="/product/example">Подробнее</a>
              <button>Оставить заявку</button>
            </div>
          </div>
        </li>
        <li>
          <div>
            <img src="/catalog-3.png" alt="" />
            <p className="catcoll">БУФЕТ • АРТ</p>
            <h2 className="name">Тумба “Art Faces”</h2>
          </div>
          <div className="cardInfo">
            <p className="category">Комоды</p>
            <p className="material">Керамика, дерево, металл</p>
            <p className="price">999 $</p>
            <div className="action">
              <a href="/product/example">Подробнее</a>
              <button>Оставить заявку</button>
            </div>
          </div>
        </li>
        <li>
          <div>
            <img src="/catalog-4.png" alt="" />
            <p className="catcoll">СТУЛ • ПРЕМИУМ</p>
            <h2 className="name">Стул “Rein”</h2>
          </div>
          <div className="cardInfo">
            <p className="category">Стулья</p>
            <p className="material">Ткань букле, массив дуба</p>
            <p className="price">999 $</p>
            <div className="action">
              <a href="/product/example">Подробнее</a>
              <button>Оставить заявку</button>
            </div>
          </div>
        </li>
      </ul>
      <div className="pagintaion">
        <p className="start">1</p>
        <ul className="pages">
          <li className="current">1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <p className="end">4</p>
      </div>
    </section>
    <Contact />
    <Footer />
  </>
}