import '../../styles/card.css'

export default function Card({image, title}) {
    return (
      <div className="card">
        <img src={image} alt={title} className="card__img" />
        <div className='card__filter'></div>
        <h2 className="card__title">{title}</h2>
      </div>
    );
}