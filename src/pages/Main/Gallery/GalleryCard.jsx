import "./GalleryCard.css"

export default function GalleryCard({ image, category, name, link, price }) {
  return <li className="galleryCard" >
    <img src={image} alt={name} />
    <p>{category}</p>
    <h3>{name}</h3>
    <div className="gallery-card-action">
      <a href={`/product/${link}`}>Подробнее</a>
      <button>{price}₽</button>
    </div>
  </li >
}