import "./GalleryCard.css"

export default function GalleryCard({ image, category, name, link, price }) {
  return <li className="galleryCard" >
    <img src={image} alt={name} />
    <p>{category}</p>
    <h3>{name}</h3>
    <div className="gallery-card-action">
      <button href={link}>Подробнее</button>
      <button>{price} $</button>
    </div>
  </li >
}