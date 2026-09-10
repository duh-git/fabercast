import "./InspirationCard.css"

export default function InspirationCard({ image, category, city, name, link, index }) {
  return <li className="inspirationCard" style={{ gridArea: `img-${index + 1}` }} href={link} >
    <img src={image} alt={name} />
    <p>{category} · {city}</p>
    <h3>{name}</h3>
  </li >
}