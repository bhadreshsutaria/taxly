import React from "react";
import images from "../../Utils/ImageHelper";
import MobileMenu from "../../Layout/MobileMenu";
import Navbar from "../../Layout/Navbar";
import { useTranslation } from "react-i18next";

const CharityHeroSection = () => {
    const { t } = useTranslation();
    return (
        <div className="hero__inner__white">
            <div className="hero">
                <MobileMenu/>
                <div className="taxly-hero">
                    <div className="taxly-hero-city-bg"></div>
                    <Navbar/>
                    <div className="taxly-hero-bg-green"></div>
                    <div className="hero site-section padding-bottom-none l-container in-viewport">
                        <div className="taxly-hero-bg"></div>
                        <div className="taxly-hero-bird-back" style={{ backgroundImage: `url(${images.socialBackBg})` }}></div>
                        <div className="taxly-hero-curve-green"><img src={images.taxlyHeroCurveDarkBg} alt="taxly-hero-curve-dark" /></div>
                        <div className="taxly-hero-bird-front" style={{ backgroundImage: `url(${images.socialFrontBg})` }}></div>
                        <div className="taxly-hero-bird"></div>
                        <div className="hero__wrapper">
                            <div className="l-container l-container--content">
                                <h1 className="page-heading">{t('charity.SingalData.chsHeading')}</h1>
                                <p>{t('charity.SingalData.chsDescription')}</p>
                                <a href="https://app.taxly.ch/GettingStarted" target="_blank" className="btn btn-large hero__cta">{t('charity.SingalData.chsBtn')}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CharityWhoWithUs = () => {
    const { t } = useTranslation();
    return(
        <section className="site-section">
            <div className="l-container">
                <h2 className="site-section__heading">{t('charity.SingalData.cwwuHeading')}</h2>
                <div className="site-section__subheading">
                    <p>{t('charity.SingalData.cwwuSubHeading1')}</p>
                    <p>{t('charity.SingalData.cwwuSubHeading2')}</p>
                </div>
                <div className="social-who">
                    <img src={images.socialwhoStars} className="stars" alt="social_who_stars" />
                    <img src={images.socialwhoStars} className="stars-flip" alt="social_who_stars" />
                    <img src={images.socialwhogloBeen} className="globe" alt="social_who_globe-en" />
                </div>
            </div>
        </section>
    );
};

const CharityOurPlan = () =>{
    const { t } = useTranslation();
    let CharityOurPlanData =  t('charity.CharityOurPlanData.data', { returnObjects: true });
    return(
        <section className="site-section taxly-grey-bg no-subtitle">
            <div className="l-container">
                <h2 className="site-section__heading">{t('charity.SingalData.copHeading')}</h2>
                <div className="icons-module how-module">
                    <div className="columns-3">
                        <div className="columns-3-item">
                            <img src={images.charityIcon} alt="icon-charity" />
                            <p>{t('charity.SingalData.copdescription1')} <a href="https://www.myclimate.org/" target="_blank" rel="noopener">{t('charity.SingalData.myclimate')}</a>, {t('charity.SingalData.copdescription2')}</p>
                        </div>
                        {CharityOurPlanData.map((val,ind) =>
                            <div key={ind} className="columns-3-item">
                                <img src={val.image} alt={val.imgAlt} />
                                <p>{val.description}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

const CharityBCorp = () => {
    const { t } = useTranslation();
    return(
        <section className="site-section">
            <div className="l-container">
                <h2 className="site-section__heading">{t('charity.SingalData.cbcHeading')}</h2>
                <div className="site-section__subheading">
                    <p>{t('charity.SingalData.cbcSubHeading')}</p>
                </div>
                <div className="social-climate-change">
                    <img src={images.socialimpactBcorpglobe} className="globe" alt="social_bcorp_globe" />
                    <img src={images.socialimpactBcorpleaf} className="leaf" alt="social_bcorp_leaf" />
                    <img src={images.socialimpactBcorpcertified} className="bcorp" alt="social_bcorp_certified" />
                </div>
                <a href="https://bcorporation.net/about-b-corps" target="_blank" className="btn btn-large hero__cta">{t('charity.SingalData.cbcLearnMore')}</a>
            </div>
        </section>
    );
};

const CharityJoinThe = () => {
    const { t } = useTranslation();
    return(
        <section className="site-section handshake-bg taxly-grey-bg">
            <div className="l-container">
                <h2 className="site-section__heading">{t('charity.SingalData.cjtmHeading')}</h2>
                <div className="site-section__subheading">
                    <p>{t('charity.SingalData.cjtmSubHeading')}</p>
                </div>
                <a href="https://app.taxly.ch/GettingStarted" target="_blank" className="btn btn-large hero__cta">{t('charity.SingalData.cjtmBtnText')}</a>
            </div>
        </section>
    );
};

export { CharityHeroSection, CharityWhoWithUs, CharityOurPlan, CharityBCorp, CharityJoinThe};