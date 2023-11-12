import logements from "../../data/logements.json";
import { Link } from "react-router-dom";
import Card from "../card/Card";
import '../../styles/gallery.css'

export default function Gallery() {
    return (
        <div className="gallery">
          {logements.map((logement) => {
            return (
              <article className="card__details" key={logement.id}>
                <Link to={`/logement/${logement.id}`}>
                  <Card image={logement.cover} title={logement.title} />
                </Link>
              </article>
            );
          })}
        </div>
      );
}
