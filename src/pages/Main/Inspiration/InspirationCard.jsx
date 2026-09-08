import "./InspirationCard.css"

export default function InspirationCard({ image, category, city, name, link }) {
  const digit = image.match(/\d/)?.[0] || null;

  return <li className="inspirationCard" style={{ gridArea: `img-${digit}` }} href={link} >
    <img src={image} alt={name} />
    <p>{category} · {city}</p>
    <h3>{name}</h3>
  </li >
}