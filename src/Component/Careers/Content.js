import React from "react";
import images from "../../Utils/ImageHelper";
import MobileMenu from "../../Layout/MobileMenu";
import Navbar from "../../Layout/Navbar";
import { useTranslation } from "react-i18next";

const CareersHeroSection = () => {
    const { t } = useTranslation();
    return(
        <div className="header-wrap hero__inner__white">
            <MobileMenu/>
            <div className="taxly-hero">
                <div className="taxly-hero-city-bg"></div>
                <Navbar/>
                <div className="taxly-hero-bg-green"></div>
                <div className="hero site-section padding-bottom-none l-container in-viewport">
                    <div className="taxly-hero-bg"></div>
                    <div className="taxly-hero-bird-back" style={{ backgroundImage: `url(${images.joinBackOneBg})`}}></div>
                    <div className="taxly-hero-curve-green">
                        <img src={images.taxlyHeroCurveDarkBg} alt="taxly-hero-curve-dark" />
                    </div>
                    <div className="taxly-hero-bird-front" style={{ backgroundImage: `url(${images.joinFrontOneBg})`}}></div>
                    <div className="taxly-hero-bird"></div>
                    <div className="hero__wrapper">
                        <div className="l-container l-container--content">
                            <h1 className="page-heading">{t('careers.SingleData.careersHeroHeading')}</h1>
                            <p>{t('careers.SingleData.careersHeroSubHeading')}</p>
                            <a href="https://app.taxly.ch/GettingStarted" rel="noreferrer" target="_blank" className="btn btn-large hero__cta">{t('careers.SingleData.careersHeroBtnText')}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
};

const CareersJoinTheTeam = () =>{
    const { t } = useTranslation();
    let careersJoinTheTeamData =  t('careers.careersJoinTheTeamData.data', { returnObjects: true });
    return(
        <section className="site-section taxly-grey-bg">
            <div className="l-container">
                <h2 className="site-section__heading">{t('careers.SingleData.careersJTTHeading')}</h2>
                <div className="site-section__subheading">
                    <p>{t('careers.SingleData.careersJTTSubHeading')}</p>
                </div>
                <div className="join1-module module-single-column">
                    <div className="columns-2 text-left">
                        {careersJoinTheTeamData.map((val,ind) =>
                            <div key={ind} className="columns-2-item">
                                <h3>{val.title}</h3>
                                <p></p>
                                <p>{val.description}</p>
                                <p></p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

const CareerCurrentOpp = () => {
    const { t } = useTranslation();
    let careerCurrentOppData =  t('careers.careerCurrentOppData.data', { returnObjects: true });
    return(
        <section className="site-section">
            <div className="l-container">
                <h2 className="site-section__heading">{t('careers.SingleData.careerCOHeading')}</h2>
                <div className="site-section__subheading">
                    <p>{t('careers.SingleData.careerCOSubHeading')}</p>
                </div>
                <div className="people-module jobs-module">
                    <div className="columns-3 taxly-boxes taxly-boxes-square">
                        {careerCurrentOppData.map((val,ind) =>
                            <div key={ind} className="columns-3-item taxly-box taxly-box-white">
                                <div className="box-top-left box-image"></div>
                                <div className="box-top-right box-image"></div>
                                <div className="box-bottom-left box-image"></div>
                                <div className="box-bottom-right box-image"></div>
                                <div className="box-content">
                                    <img src={val.image} alt={val.imgAlt} />
                                    <h3>{val.title}</h3>
                                    <a href={val.btnLink} rel="noreferrer" target="_blank">{val.button}</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
export {CareersHeroSection, CareersJoinTheTeam, CareerCurrentOpp};