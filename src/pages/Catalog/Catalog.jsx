// src/pages/Catalog/Catalog.jsx
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { Header, Contact, Footer } from "../../components";
import { catalogItems, ITEMS_PER_PAGE } from "./mockData";
import "./Catalog.css";

export default function Catalog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("Все");
  const [searchQuery, setSearchQuery] = useState("");

  // Фильтрация по категории и поиску
  const filteredItems = useMemo(() => {
    return catalogItems.filter((item) => {
      const matchesCategory =
        activeCategory === "Все" || item.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.material.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / ITEMS_PER_PAGE));

  // Сбрасываем страницу, если она вышла за пределы
  const safePage = Math.min(currentPage, totalPages);

  // Товары для текущей страницы
  const currentItems = useMemo(() => {
    const start = (safePage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredItems, safePage]);

  // Категории с количеством
  const categories = useMemo(() => {
    const counts = catalogItems.reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + 1;
      return acc;
    }, {});
    return [
      { name: "Все", count: catalogItems.length },
      { name: "Столы", count: counts["Столы"] || 0 },
      { name: "Стулья", count: counts["Стулья"] || 0 },
      { name: "Комоды", count: counts["Комоды"] || 0 },
      { name: "Освещение", count: counts["Освещение"] || 0 },
    ];
  }, []);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <Header />
      <section className="catalog">
        <h1>Каталог</h1>
        <nav>
          <ul>
            {categories.map((cat) => (
              <li
                key={cat.name}
                className={activeCategory === cat.name ? "active" : ""}
                onClick={() => handleCategoryChange(cat.name)}
                style={{ cursor: "pointer" }}
              >
                {cat.name} ({cat.count})
              </li>
            ))}
          </ul>
          <div className="search">
            <img src="/search.svg" alt="search" />
            <input
              id="search-input"
              type="text"
              placeholder="Поиск по каталогу..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </nav>
        <hr />
        <ul className="catalogList">
          {currentItems.length > 0 ? (
            currentItems.map((item) => (
              <li key={item.id}>
                <div>
                  <img src={item.image} alt={item.name} />
                  <p className="catcoll">{item.tag}</p>
                  <h2 className="name">{item.name}</h2>
                </div>
                <div className="cardInfo">
                  <p className="category">{item.category}</p>
                  <p className="material">{item.material}</p>
                  <p className="price">{item.price} $</p>
                  <div className="action">
                    <Link to={`/product/${item.id}`}>Подробнее</Link>
                    <button>Оставить заявку</button>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <li className="no-results">Ничего не найдено</li>
          )}
        </ul>

        {totalPages > 1 && (
          <div className="pagintaion">
            <p
              className="start"
              onClick={() => goToPage(1)}
              style={{ cursor: safePage === 1 ? "default" : "pointer", opacity: safePage === 1 ? 0.4 : 1 }}
            >
              1
            </p>
            <ul className="pages">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <li
                  key={page}
                  className={safePage === page ? "current" : ""}
                  onClick={() => goToPage(page)}
                  style={{ cursor: "pointer" }}
                >
                  {page}
                </li>
              ))}
            </ul>
            <p
              className="end"
              onClick={() => goToPage(totalPages)}
              style={{ cursor: safePage === totalPages ? "default" : "pointer", opacity: safePage === totalPages ? 0.4 : 1 }}
            >
              {totalPages}
            </p>
          </div>
        )}
      </section>
      <Contact />
      <Footer />
    </>
  );
}