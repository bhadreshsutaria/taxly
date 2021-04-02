import React from 'react';
import images from "../../Utils/ImageHelper";
import MobileMenu from "../../Layout/MobileMenu";
import Navbar from "../../Layout/Navbar";
import {SingalData, HeroSectionData, NutShellData, HIWColumns2Data, TaxReturnData} from "../HowItWorks/Data";

const HeroSection = () => {
    return(
        <div className="hero__inner">
            <MobileMenu/>
            <div className="taxly-hero taxly-hero_bg taxly-hero_bg-white" style={{ backgroundImage: `url(${images.TaxlyHowItWorksBg})` }}>
                {/* <div className="taxly-hero-city-bg"></div> */}
                <Navbar/>
                {/* <div className="taxly-hero-bg-green"></div> */}
                {HeroSectionData.map((val,ind) =>
                    <div key={ind} className="hero site-section padding-bottom-none l-container in-viewport">
                        {/* <div className="taxly-hero-bg"></div>
                        <div className="taxly-hero-bird-back" style={{ backgroundImage: `url(${images.howItWorkBirdBg})` }}></div>
                        <div className="taxly-hero-curve-green">
                            <img src={images.taxlyHeroCurveDarkBg} alt="taxly-hero-curve-dark" />
                        </div> */}
                        <div className="hero__wrapper">
                            <div className="l-container l-container--content">
                                <h1 className="page-heading">{val.title}</h1>
                                <p>{val.description}</p>
                                <a href={val.btnLink} target="_blank" className="btn btn-large hero__cta">{val.btnName}</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

const HIWColumns2 = () => {
    return(
        <section className="site-section no-title">
            <div className="l-container">
                <div className="howitworks-module">
                    {HIWColumns2Data.map((val, ind) =>
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

const NutShell = () => {
    return (
        <section className="site-section site-section-line no-subtitle">
                <div className="l-container">
                    <h2 className="site-section__heading">{SingalData.map((val) => val.NSHeading)}</h2>
                    <div className="list-ticks-module">
                        <ul>
                            { NutShellData.map((val, ind) => 
                                <li key={ind}>{val}</li>
                            )}
                        </ul>
                    </div>
                </div>
        </section>
    );
};

const TaxReturn = () => {
    return(
        <>
        {TaxReturnData.map((val, ind) =>
            <section key={ind} className="site-section narrow-hedding clock-image-bg taxly-grey-bg no-subtitle">
                <div className="l-container">
                <h2 className="site-section__heading">{val.title}</h2>
                    <a href={val.btnLink} target="_blank" className="btn btn-large">{val.btnText}</a>
                </div>
            </section>
        )}
        </>
    );
};
export {HeroSection, HIWColumns2, NutShell, TaxReturn};