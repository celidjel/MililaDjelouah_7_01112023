import '../../styles/logement.css';
import '../../styles/tag.css'
import starImg from '../../assets/images/rate_star.svg'
import { useParams, Navigate  } from 'react-router-dom';
import logements from "../../data/logements.json";
import Header from '../../components/header/Header';
import Carrousel from '../../components/carousel/Carousel'
import Tag from '../../components/tag/Tag'
import Collapse from '../../components/collapse/Collapse'
import Footer from '../../components/footer/Footer'


export default function Logement() {
    const { id } = useParams();
    const logement = logements.find((apt) => apt.id === id);

    if (logement === undefined) {
        return <Navigate to="*" />;
      }
   
    const stars = [1, 2, 3, 4, 5];
    const rate = logement.rating;
    return (
        <><Header />
            <Carrousel slides={logement?.pictures} />
            <div className='logement__details'>
                <div className='logement__description'>
                    <div className='title'>{logement.title}</div>
                    <div className='location'>{logement.location}</div>
                    <div className='tags'>
                        {
                            logement.tags.map((tag, index) => {
                                return <Tag key={index} name={tag} />
                            })
                        }
                    </div>
                </div>
                <div className='logement__owner'>
                    <div className='owner__details'>
                        <div className='name'>{logement.host.name}</div>
                        <img className='picture' src={logement.host.picture} alt='Logement host'></img>
                    </div>
                    <div className='rating'>
                        {stars.map((val) =>
                            rate >= val ? (
                                <img
                                    key={val.toString()}
                                    className="star star--full"
                                    src={starImg}
                                    alt="rating star"
                                />
                            ) : (
                                <img
                                    key={val.toString()}
                                    className="star star--empty"
                                    src={starImg}
                                    alt="A rating star"
                                />
                            )
                        )}
                    </div>
                </div>
            </div>

            <div className="logement__collapse">
                <div className="logement__collapse_item">
                    <Collapse title={'Description'} content={logement.description} />
                </div>
                <div className="logement__collapse_item">
                    <Collapse title={'Equipements'} content={logement.equipments} />
                </div>
            </div>
            <Footer />
        </>
    );
}
