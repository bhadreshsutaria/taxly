import React from 'react';
import Slider from "react-slick";
import images from "../../Utils/ImageHelper";
import MobileMenu from "../../Layout/MobileMenu";
import Navbar from "../../Layout/Navbar";
import {SingleData, LimitlessPData} from "../API/Data";

const ApiHeroSection = () => {
    return(
        <div className="hero__inner">
            <div className="hero">
                <MobileMenu/>
                <div className="taxly-hero">
                    <div className="taxly-hero-city-bg"></div>
                    <Navbar/>
                    <div className="taxly-hero-bg-green"></div>
                    <div className="hero site-section padding-bottom-none l-container in-viewport">
                        <div className="taxly-hero-bg"></div>
                        <div className="taxly-hero-bird-back" style={{ backgroundImage: `url(${images.apiBackBg})` }}></div>
                        <div className="taxly-hero-curve-green"><img src={images.taxlyHeroCurveDarkBg} alt="taxly-hero-curve-dark" /></div>
                        <div className="taxly-hero-bird-front" style={{ backgroundImage: `url(${images.apiFrontBg})` }}></div>
                        <div className="taxly-hero-bird"></div>
                        <div className="hero__wrapper">
                            <div className="l-container l-container--content">
                                <h1 className="page-heading">{SingleData.apiHeroHeading}</h1>
                                <p>{SingleData.apiHeroDescription}</p>
                                <a href="#" className="btn btn-large hero__cta js-show-dark-modal">{SingleData.apiHeroBtnName}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const LimitlessPossibilities = () =>{
    var settings = {
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerPadding: '30px',
        arrows: false,
        variableWidth: true,
        initialSlide: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    centerPadding: '200px'
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    centerPadding: '90px',
                }
            }
        ]
    };
    return(
        <section className="site-section pdb-40">
            <div className="slick-slide-container">
                <h2 className="site-section__heading">{SingleData.limitlessPHeading}</h2>
                <div className="site-section__subheading">
                    <p>{SingleData.limitlessPSubHeading}</p>
                </div>
                <div className="site-section__module limitless limitless-module">
                    <Slider {...settings} className="slick-dotted">
                        {LimitlessPData.map((val, ind) =>
                            <div key={ind} className=""><img src={val.lPImage} alt={val.lPAlt} /></div>
                        )}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export {ApiHeroSection, LimitlessPossibilities};