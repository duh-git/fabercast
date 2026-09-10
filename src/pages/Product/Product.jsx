import { Header, Footer } from "../../components"
import "./Product.css"

const mockData = {
  category: "Комоды",
  name: "Тумба “Arc balance”",
  description: "Плавные линии, натуральное дерево и выразительные латунные акценты. Компактная тумба с открытой нишей и мягкой геометрией создаёт лёгкий архитектурный акцент в интерьере.",
  price: 289,
  params: {
    height: 650,
    width: 500,
    depth: 350,
    image: "/product-size.png",
  },
  images: [
    "/product-1.png",
    "/product-2.png",
    "/product-3.png",
    "/product-4.png",
    "/product-5.png",
  ],
  colorPalette: [
    { name: "Темно - зеленый", desc: "Тёплая фактура дерева", img: "/green.png" },
    { name: "Натуральный орех", desc: "Элегантный глубокий тон", img: "/natural-nut.png" },
    { name: "Матовая латунь", desc: "Деликатный благородный акцент", img: "/brass.png" },
  ],
  asideInfo: [
    { title: "Натуральный шпон", desc: "Тёплая фактура натурального ореха.", img: "/src/assets/aside-1.svg" },
    { title: "Матовая латунь", desc: "Деликатный золотистый акцент.", img: "/src/assets/aside-2.svg" },
    { title: "Мягкая геометрия", desc: "Плавные линии и выразительный силуэт.", img: "/src/assets/aside-3.svg" },
    { title: "Ручная отделка", desc: "Внимание к каждой детали изделия.", img: "/src/assets/aside-4.svg" },
  ],
}

export default function Product() {
  const { category, name, description, price, params, images, colorPalette, asideInfo } = mockData

  return <>
    <Header />
    <section className="product">
      <nav>
        <a href="/catalog">Каталог</a>
        <a href="/product/example">Комоды</a>
        <a href="/product/example" className="name">{name}</a>
        <a href="/catalog" className="back"><span className="arrow">←</span> Назад</a>
      </nav>

      <div className="title">
        <h2>{category}</h2>
        <h1>{name}</h1>
      </div>
      <ul className="pictures">
        <li className="main"><img src={images[0]} alt="" /></li>
        {
          images.slice(0, 5).map((img) => {
            return <li key={img}><img src={img} /></li>
          })
        }
      </ul>
      <p className="description">{description}</p>
      <div className="params">
        <h2>Размеры</h2>
        <dl>
          <div>
            <dt>Высота</dt>
            <dd>{params.height} мм</dd>
          </div>
          <hr />
          <div>
            <dt>Ширина</dt>
            <dd>{params.width} мм</dd>
          </div>
          <hr />
          <div>
            <dt>Глубина</dt>
            <dd>{params.depth} мм</dd>
          </div>
        </dl>
      </div>
      <img className="scheme" src={params.image} alt="" />
      <div className="colorPalette">
        <h2>Цветовая палитра</h2>
        <ul>
          {
            colorPalette.map((color) => {
              return <li key={color.name}>
                <img src={color.img} alt={name} />
                <div>
                  <h3>{color.name}</h3>
                  <p>{color.desc}</p>
                </div>
              </li>
            })
          }
        </ul>
      </div>
      <div className="peculiarities">
        <h2>Особенности изделия</h2>
        <ul className="peculiarities">
          {
            asideInfo.map((info, index) => {
              const isLast = index === asideInfo.length - 1;
              return <li key={info.img}>
                <img src={info.img} />
                <div>
                  <h3>{info.title}</h3>
                  <p>{info.desc}</p>
                </div>
                {!isLast && <hr />}
              </li>
            })
          }
        </ul>
      </div>
      <div className="action">
        <p>{price} $</p>
        <button><img src="/src/assets/cart.svg" alt="" /></button>
        <a href="tel:+89618205070">Оставить заявку</a>
      </div>
    </section >
    <Footer />
  </>
}