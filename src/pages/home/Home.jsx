import Header from "../../components/header/Header"
import Banner from "../../components/banner/Banner"
import Card from "../../components/card/Card"
import '../../styles/home.css'
import logements from "../../data/logements.json"
import Footer from "../../components/footer/Footer"
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div className="home">
            <Header />
            <Banner />
            <div className="gallery">
                {logements.map((logement) => {
                    return (
                        <div className="card__details" key={logement.id}>
                            <Link to={`/logement/${logement.id}`}>
                                <Card image={logement.cover} title={logement.title} />
                            </Link>
                        </div>
                    );
                })}
            </div>
            <Footer />
        </div>
    );
}