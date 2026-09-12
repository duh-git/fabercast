// src/pages/Product/Product.jsx
import { Link, useParams } from "react-router-dom";
import { Header, Footer } from "../../components";
import { getProductById } from "../Catalog/mockData";
import "./Product.css";

export default function Product() {
  const { id } = useParams();
  const product = getProductById(id);

  // Если товар не найден
  if (!product) {
    return (
      <>
        <Header />
        <section className="product product--not-found">
          <h1>Товар не найден</h1>
          <p>Возможно, он был удалён или ссылка неверна.</p>
          <Link to="/catalog" className="back-link">← Вернуться в каталог</Link>
        </section>
        <Footer />
      </>
    );
  }

  const {
    category,
    name,
    description,
    price,
    params,
    images,
    colorPalette,
    asideInfo,
  } = product;

  return (
    <>
      <Header />
      <section className="product">
        <nav>
          <Link to="/catalog">Каталог</Link>
          <Link to="/catalog">{category}</Link>
          <span className="name">{name}</span>
          <Link to="/catalog" className="back">
            <span className="arrow">←</span> Назад
          </Link>
        </nav>

        <div className="title">
          <h2>{category}</h2>
          <h1>{name}</h1>
        </div>

        <ul className="pictures">
          <li className="main">
            <img src={images[0]} alt={name} />
          </li>
          {images.slice(0, 5).map((img, i) => (
            <li key={`${img}-${i}`}>
              <img src={img} alt={`${name} ${i + 1}`} />
            </li>
          ))}
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

        <img className="scheme" src={params.image} alt="Схема" />

        <div className="colorPalette">
          <h2>Цветовая палитра</h2>
          <ul>
            {colorPalette.map((color) => (
              <li key={color.name}>
                <img src={color.img} alt={color.name} />
                <div>
                  <h3>{color.name}</h3>
                  <p>{color.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="peculiarities">
          <h2>Особенности изделия</h2>
          <ul className="peculiarities">
            {asideInfo.map((info, index) => {
              const isLast = index === asideInfo.length - 1;
              return (
                <li key={info.img}>
                  <img src={info.img} alt={info.title} />
                  <div>
                    <h3>{info.title}</h3>
                    <p>{info.desc}</p>
                  </div>
                  {!isLast && <hr />}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="action">
          <p>{price} $</p>
          <button>
            <img src="/cart.svg" alt="В корзину" />
          </button>
          <a href="tel:+89618205070">Оставить заявку</a>
        </div>
      </section>
      <Footer />
    </>
  );
}