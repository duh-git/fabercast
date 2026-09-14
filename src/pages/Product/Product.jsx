// src/pages/Product/Product.jsx
import { Link, useParams } from "react-router-dom";
import { Header, Footer } from "../../components";
import { getProductById } from "../Catalog/mockData";
import { openCallModal } from "../../utils/openCallModal";
import "./Product.css";

// Словарь для перевода ключей габаритов
const PARAM_LABELS = {
  height: "Высота",
  width: "Ширина",
  depth: "Глубина",
  length: "Длина",
  seatHeight: "Высота сиденья",
  tableHeight: "Высота столика",
  tableDiameter: "Диаметр столешницы",
  legsHeight: "Высота ножек",
  drawerHeight: "Высота ящика",
  nicheHeight: "Высота ниши",
  backHeight: "Высота спинки",
  wardrobeWidth: "Ширина шкафа",
  supportHeight: "Высота опоры",
  bodyHeight: "Высота корпуса",
  drawers: "Количество ящиков",
  doors: "Количество дверей",
  cabinetHeight: "Высота шкафа",
  cabinetWidth: "Ширина шкафа",
  cabinetDepth: "Глубина шкафа",
  tableWidth: "Ширина стола",
  tableDepth: "Глубина стола",
  wallWidth: "Ширина композиции",
  wallHeight: "Высота композиции",
  wallDepth: "Глубина",
  shelfHeight: "Высота стеллажа",
  shelfWidth: "Ширина стеллажа",
  shelfDepth: "Глубина стеллажа",
  chairHeight: "Высота кресла",
  chairWidth: "Ширина кресла",
  shelfSectionWidth: "Ширина секции с полками",
  stonePanelWidth: "Ширина каменной панели",
};

export default function Product() {
  const { id } = useParams();
  const product = getProductById(id);

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
    materials,
    plan,
    features,
  } = product;

  // Габариты: превращаем объект в массив пар, отфильтровываем note
  const paramEntries = Object.entries(params)
    .filter(([key]) => key !== "note")
    .map(([key, value]) => ({
      label: PARAM_LABELS[key] || key,
      value: typeof value === "number" ? `${value} мм` : value,
    }));

  return (
    <>
      <Header />
      <section className="product">
        <nav>
          <Link to="/catalog">Каталог</Link>
          <Link to="/catalog">{category}</Link>
          <a className="name" href="#">{name}</a>
          <Link to="/catalog" className="back">
            <span className="arrow">←</span> Назад
          </Link>
        </nav>

        <div className="title">
          <h2>{category}</h2>
          <h1>{name}</h1>
        </div>

        {/* Галерея изображений */}
        <ul className="pictures">
          <li className="main">
            <img src={images[0]} alt={name} />
          </li>
          {images.slice(1).map((img, i) => (
            <li key={`${img}-${i}`}>
              <img src={img} alt={`${name} ${i + 2}`} />
            </li>
          ))}
        </ul>

        <p className="description">{description}</p>

        {/* Габариты */}
        <div className="params">
          <h2>Габариты</h2>
          {params.note ? (
            <p className="params-note">{params.note}</p>
          ) : (
            <dl>
              {paramEntries.map((entry, idx) => (
                <div key={entry.label}>
                  <dt>{entry.label}</dt>
                  <dd>{entry.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        {/* Чертёж */}
        {plan && <img className="scheme" src={plan} alt={`Чертёж ${name}`} />}

        {/* Материалы */}
        <div className="colorPalette">
          <h2>Материалы и фактуры</h2>
          <ul>
            {materials.map((mat, i) => (
              <li key={`${mat.name}-${i}`}>
                <img src={mat.img} alt={mat.name} />
                <div>
                  <h3>{mat.name}</h3>
                  <p>{mat.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Особенности */}
        <div className="peculiarities">
          <h2>Ключевые качества</h2>
          <ul className="peculiarities">
            {features.map((f, index) => {
              const isLast = index === features.length - 1;
              return (
                <li key={f.title}>
                  <div>
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </div>
                  {!isLast && <hr />}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="action">
          <p>{price}₽</p>
          <button className="cart">
            <img src="/cart.svg" alt="В корзину" />
          </button>
          <button className="leave-request" onClick={openCallModal}>Оставить заявку</button>
        </div>
      </section>
      <Footer />
    </>
  );
}