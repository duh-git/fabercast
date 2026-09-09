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
    { name: "Темно - зеленый", img: "/green.png" },
    { name: "Натуральный орех", img: "/natural-nut.png" },
    { name: "Матовая латунь", img: "/brass.png" },
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
        <a href="/product/example">{name}</a>
        <a href="/catalog"><span className="arrow">←</span> Назад к каталогу</a>
      </nav>
      <div className="first">
        <div className="pictures">
          <img className="main" src={images[0]} alt="" />
          <ul>
            {
              images.slice(0, 5).map((img) => {
                return <li key={img}><img src={img} /></li>
              })
            }
          </ul>
        </div>
        <div className="description">
          <h2>{category}</h2>
          <h1>{name}</h1>
          <p className="description-text">{description}</p>
          <p>Цветовая палитра</p>
          <ul className="colorPalette">
            {
              colorPalette.map((color) => {
                return <li key={color.name}>
                  <img src={color.img} alt={name} />
                  <p>{color.name}</p>
                </li>
              })
            }
          </ul>
        </div>
        <ul className="aside-info">
          {
            asideInfo.map((info, index) => {
              const isLast = index === asideInfo.length - 1;
              return <li>
                <img src={info.img} />
                <h3>{info.title}</h3>
                <p>{info.desc}</p>
                {!isLast && <hr />}
              </li>
            })
          }
        </ul>
      </div>
      <div className="second">
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
        <img src={params.image} alt="" />
        <div className="action">
          <p>{price} $</p>
          <button><img src="/src/assets/cart.svg" alt="" /></button>
          <a href="tel:+74956666666">Оставить заявку</a>
        </div>
      </div>
    </section>
    <Footer />
  </>
}