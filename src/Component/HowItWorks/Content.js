import React from 'react';
import images from "../../Utils/ImageHelper";
import MobileMenu from "../../Layout/MobileMenu";
import Navbar from "../../Layout/Navbar";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
    const { t } = useTranslation();
    let HeroSectionData =  t('howitworks.HeroSectionData.data', { returnObjects: true });
    return(
        <div className="hero__inner">
            <MobileMenu
                extraClass="taxly-mobile-menu-fixed_white" 
                menuBtnClass="taxly-mobile-menu-button_white"
                menuBGColorClass="taxly-mobile-menu_white"
            />
            <div className="taxly-hero taxly-hero_bg taxly-hero_bg-white" style={{ backgroundImage: `url(${images.TaxlyHowItWorksBg})` }}>
                <Navbar/>
                {HeroSectionData.map((val,ind) =>
                    <div key={ind} className="hero site-section padding-bottom-none l-container in-viewport">
                        <div className="hero__wrapper">
                            <div className="l-container l-container--content">
                                <h1 className="page-heading">{val.title}</h1>
                                <p>{val.description}</p>
                                <a href={val.btnLink} target="_blank" rel="noreferrer" className="btn btn-large hero__cta">{val.btnName}</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

const HIWColumns2 = () => {
    const { t } = useTranslation();
    let HIWColumns2Data =  t('howitworks.HIWColumns2Data.data', { returnObjects: true });
    return(
        <section className="site-section no-title">
            <div className="l-container">
                <div className="howitworks-module">
                    {HIWColumns2Data.map((val, ind) =>
                    <div key={ind} className={`columns-2 text-left taxly-image-text ${val.extraClass === '' ? '':  val.extraClass}`}>
                        <div className={`columns-2-item ${val.fadeBottomClass === '' ? '':  val.fadeBottomClass}`}>
                            {val.fadeBottomRightLeft === true ? <><div className="fade-bottom-left"></div><div className="fade-bottom-right"></div></> : ''}
                            {val.fadeBottomItem === true ? <div className="fade-bottom-item"><img src={val.image} alt={val.alt} /></div> : <img src={val.image} alt={val.alt} /> }
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
    const { t } = useTranslation();
    let NutShellData =  t('howitworks.NutShellData.data', { returnObjects: true });

    return (
        <section className="site-section site-section-line no-subtitle">
                <div className="l-container">
                    <h2 className="site-section__heading">{t('howitworks.SingalData.NSHeading')}</h2>
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
    const { t } = useTranslation();
    let TaxReturnData =  t('howitworks.TaxReturnData.data', { returnObjects: true });
    return(
        <>
        {TaxReturnData.map((val, ind) =>
            <section key={ind} className="site-section narrow-hedding clock-image-bg taxly-grey-bg no-subtitle">
                <div className="l-container">
                <h2 className="site-section__heading">{val.title}</h2>
                    <a href={val.btnLink} target="_blank" rel="noreferrer" className="btn btn-large">{val.btnText}</a>
                </div>
            </section>
        )}
        </>
    );
};
export {HeroSection, HIWColumns2, NutShell, TaxReturn};