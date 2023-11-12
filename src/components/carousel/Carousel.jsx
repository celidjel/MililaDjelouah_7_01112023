import Arrow from '../../assets/images/carousel_arrow.svg';
import { useState } from 'react';
import '../../styles/carousel.css';

export default function Carousel({ slides }) {
    const [slideIndex, setSlideIndex] = useState(0);

    const changeSlide = (newIndex) => {
        setSlideIndex((newIndex + slides.length) % slides.length);
    }

    return (
        <div className='carousel'>
                  <img src={slides[slideIndex]} alt={`Slide ${slideIndex + 1}`} />

            {slides.length > 1 && (
                <>
                    <div className='carousel__arrows'>
                        <div className='carousel__arrow carousel__arrow__left'
                            onClick={() => changeSlide(slideIndex - 1)}
                        >
                            <img src={Arrow} alt="Carousel left arrow" />
                        </div>
                        <div
                            className='carousel__arrow carousel__arrow__right'
                            onClick={() => changeSlide(slideIndex + 1)}
                        >
                            <img src={Arrow} alt="Carousel right arrow" />
                        </div>
                    </div>
                    <div className='slides__count'>{slideIndex + 1} / {slides.length}</div>
                </>
            )}
        </div>
    );
}
