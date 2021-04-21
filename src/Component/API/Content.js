import React, {useState} from 'react';
import Slider from "react-slick";
import images from "../../Utils/ImageHelper";
import MobileMenu from "../../Layout/MobileMenu";
import Navbar from "../../Layout/Navbar";
import {DarkModalApi, TopBottomLeftRight} from "../Modal/Modal";
import Modal from "react-modal";
import { useTranslation } from "react-i18next";
Modal.setAppElement('#root');

const ApiDarkModalApi = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();
    function toggleModal() {
        setIsOpen(!isOpen);
    }
    return(
        <>
        <button className="btn btn-large hero__cta" onClick={toggleModal}>{t('api.SingleData.apiHeroBtnName')}</button>
        <Modal className="modal invite-modal taxly-dark is-visible" isOpen={isOpen} onRequestClose={toggleModal}>
            <div className="modal__overlay"></div>
            <div className="modal__content taxly-box">
                <TopBottomLeftRight />
                <div className="box-content">
                    <div className="modal__close" onClick={toggleModal}>Close</div>
                    <DarkModalApi/>
                </div>
            </div>
        </Modal>
        </>
    );
};

const ApiHeroSection = () => {
    const { t } = useTranslation();
    return(
        <div className="hero__inner__white">
            <div className="hero">
                <MobileMenu/>
                <div className="taxly-hero taxly-hero_bg" style={{ backgroundImage: `url(${images.TaxlyApiBg})` }}>
                    <Navbar/>
                    <div className="hero site-section padding-bottom-none l-container in-viewport">
                        <div className="hero__wrapper">
                            <div className="l-container l-container--content">
                                <h1 className="page-heading">{t('api.SingleData.apiHeroHeading')}</h1>
                                <p>{t('api.SingleData.apiHeroDescription')}</p>
                                <ApiDarkModalApi/>
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
    const { t } = useTranslation();
    let LimitlessPData =  t('api.LimitlessPData.data', { returnObjects: true });
    return(
        <>
        <section className="site-section pdb-40">
            <div className="slick-slide-container">
                <h2 className="site-section__heading">{t('api.SingleData.limitlessPHeading')}</h2>
                <div className="site-section__subheading">
                    <p>{t('api.SingleData.limitlessPSubHeading')}</p>
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
        </>
    );
};

const ApiHowItWork = () =>{
    const { t } = useTranslation();
    let ApiHowItWorkData =  t('api.ApiHowItWorkData.data', { returnObjects: true });
    return(
        <section className="site-section">
            <div className="l-container">
                <h2 className="site-section__heading">{t('api.SingleData.apiHowItWorkHeading')}</h2>
                <div className="site-section__subheading">
                    <p>{t('api.SingleData.apiHowItWorkSubHeading')}</p>
                </div>
                <div className="howitworks-module module-single-column">
                    {ApiHowItWorkData.map((val,ind) =>
                        <div key={ind} className={`columns-2 text-left taxly-image-text ${val.extraClass === '' ? '': val.extraClass}`}>
                            <div className="columns-2-item">
                                <img src={val.image} alt={val.imgAlt} />
                            </div>
                            <div className="columns-2-item">
                                <h3>{val.title}</h3>
                                <p>{val.description}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

const ApiPartnership = () => {
    const { t } = useTranslation();
    let ApiPartnershipData =  t('api.ApiPartnershipData.data', { returnObjects: true });
    return (
        <section className="site-section">
            <div className="l-container">
                <h2 className="site-section__heading">{t('api.SingleData.apiPHeading')}</h2>
                <div className="site-section__subheading">
                    <p>{t('api.SingleData.apiPSubHeading')}</p>
                </div>
                <div className="interest-areas-module">
                    <div className="columns-2 taxly-boxes">
                        {ApiPartnershipData.map((val,ind) =>
                            <div key={ind} className="columns-2-item taxly-box taxly-box-white">
                                <div className="box-top-left box-image"></div>
                                <div className="box-top-right box-image"></div>
                                <div className="box-bottom-left box-image"></div>
                                <div className="box-bottom-right box-image"></div>
                                <div className="box-content">
                                    <img src={val.apiImage} alt={val.apiAlt} />
                                    <h3>{val.apiPartnershipTitle}</h3>
                                    <p>{val.apiPartnershipDesc}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

const ApiLetsTalk = () =>{
    const { t } = useTranslation();
    return(
        <section className="site-section open-door">
            <div className="open-door-bg">
                <img src={images.apiopenDoor} alt="open-door" />
            </div>
            <div className="l-container">
                <h2 className="site-section__heading">{t('api.SingleData.apiLetsTalkheading')}</h2>
                <div className="site-section__subheading">
                    <p>{t('api.SingleData.apiLetsTalkSubheading')}</p>
                </div>
                <ApiDarkModalApi/>
            </div>
        </section>
    );
};

export {ApiHeroSection, LimitlessPossibilities, ApiHowItWork, ApiPartnership, ApiLetsTalk};