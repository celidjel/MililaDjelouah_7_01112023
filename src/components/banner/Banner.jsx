import '../../styles/banner.css'
import HomeBannerImg from '../../assets/images/banner_home.jpg'
import AboutBannerImg from '../../assets/images/banner_about.jpg'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Banner() {
    const [aboutPage, setAboutPage] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/about') {
            setAboutPage(true)
        };
    }, [location.pathname])

    const imgSrc = aboutPage ? AboutBannerImg : HomeBannerImg;

    return (
        <div className='banner__content'>     
           <img src={imgSrc} className='banner'/>
           { aboutPage ? '' : <h1 className='banner__text'>Chez vous, partout et ailleurs</h1> }
        </div>           
    
    );
}
