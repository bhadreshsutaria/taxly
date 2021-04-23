import React from "react";
import images from "../../Utils/ImageHelper";
import MobileMenu from "../../Layout/MobileMenu";
import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";
import { useTranslation } from "react-i18next";

const TaxExtensionHeroSection = () => {
    const { t } = useTranslation();
    return (
        <div className="header-wrap hero__inner__white">
            <MobileMenu/>
            <div className="taxly-hero height-98">
                <div className="taxly-hero-city-bg"></div>
                <Navbar/>
                <div className="taxly-hero-bg-green"></div>
                <div className="hero site-section padding-bottom-none l-container in-viewport">
                    <div className="taxly-hero-bg"></div>
                    <div className="taxly-hero-bird-back" style={{ backgroundImage: `url(${images.homeBackBg})` }}></div>
                    <div className="taxly-hero-curve-green"><img src={images.taxlyHeroCurveDarkBg} alt="taxly-hero-curve-dark" /></div>
                    <div className="taxly-hero-bird-front" style={{ backgroundImage: `url(${images.homeFrontBg})` }}></div>
                    <div className="taxly-hero-bird"></div>
                    <div className="hero__wrapper">
                        <div className="l-container l-container--content">
                            <h1 className="page-heading">{t('taxExtension.SingleData.pageHeading')}</h1>
                            <p>{t('taxExtension.SingleData.pageSubHeading')}</p>
                            <a href="https://app.taxly.ch/GettingStarted" rel="noreferrer" target="_blank" className="btn btn-large hero__cta">{t('taxExtension.SingleData.pageBtnText')}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TaxExtensionColumns2 = () => {
    const { t } = useTranslation();
    let TaxExtensionColumns2Data =  t('taxExtension.TaxExtensionColumns2.data', { returnObjects: true });
    return(
        <section className="site-section no-title">
            <div className="l-container">
                <div className="howitworks-module">
                    {TaxExtensionColumns2Data.map((val, ind) =>
                    <div key={ind} className={`columns-2 text-left taxly-image-text ${val.extraClass === '' ? '':  val.extraClass}`}>
                        <div className="columns-2-item fade-bottom">
                            <div className="fade-bottom-left"></div>
							<div className="fade-bottom-right"></div>
                            <div className="fade-bottom-item">
                                <img src={val.image} alt={val.alt} />
                            </div>
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

export default function ContactUs() {
    // let contactBoxData =  t('contactus.contactBoxData.data', { returnObjects: true });
    return (
        <div className="App">
            <TaxExtensionHeroSection/>
            <TaxExtensionColumns2/>
            <Footer/>
        </div>
    )
}