import React from 'react';
import './Home.css'
import Banner from '../images/banner.jpg'
import Product from './Product';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Home() {
    return (
        <div className="home">
           
            <div className="home__container"> 
                <Carousel autoPlay emulateTouch infiniteLoop >
                    <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
                    <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Samsung/SamsungM/M12/PEA/SaleTomorrow/D21200796_IN_WLME_SamsungGalaxy_M12_New_Launch_DesktopTallHero_1500x600_2._CB658360729_.jpg" alt="" />
                    <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Luggage/March/BBS/GW/GW_PC_BUNK_1500x600._CB658312757_.jpg" alt="" />
                </Carousel>
                 
                <div className="home__row">
                    <Product id="12345678" title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses" price={1559} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5}/>
                    <Product
                    id="12345656"
                    title="Redmi Note 9 Pro (Aurora Blue, 4GB RAM, 64GB Storage) - Latest 8nm Snapdragon 720G & Alexa Hands-Free"
                    price={14999}
                    rating={4}
                    image="data:image/webp;base64,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"
                    />
                </div>
                <div className="home__row">
                <Product title="Mi Smart Band 4 – 0.94-inch AMOLED Color Display, 20 Days Battery Life, Unlimited Watch Faces, 5ATM Water Resistant, Music Control"
                id="12345934"
                price={2499}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/719ZywAmvOL._SL1500_.jpg"
                />
                <Product
                id="12345671"
                    title="OnePlus 10000 mAh Power Bank (Fast PD Charging, 18 W) (Black, Lithium Polymer)"
                    rating={3}
                    image="https://m.media-amazon.com/images/I/61fefWEyHdL._AC_UL480_FMwebp_QL65_.jpg"
                    price={1990}
                />
                <Product
                id="12345345"
                    title="boAt Bassheads 100 in Ear Wired Earphones with Mic(Black)"
                    price={390}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/719elVA3FvL._SL1500_.jpg"
                />
                </div>
                <div className="home__row">
                <Product
                id="12345143"
                    title="OnePlus 138.8 cm (55 inches) Q1 Series 4K Certified Android QLED TV"
                    price={84899}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71GYLokH21L._SL1500_.jpg"
                />
                    
                </div>
                    

            </div>
            
        </div>
    )
}

export default Home
