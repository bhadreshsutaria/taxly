import React from "react";
import images from "../../Utils/ImageHelper";
import MobileMenu from "../../Layout/MobileMenu";
import Navbar from "../../Layout/Navbar";
import { useTranslation } from "react-i18next";

const AboutUsHeroSection = () => {
    const { t } = useTranslation();
    return(
        <div className="header-wrap hero__inner__white">
            <MobileMenu/>
            <div className="taxly-hero taxly-hero_bg" style={{ backgroundImage: `url(${images.TaxlyAboutUsBg})` }}>
                <Navbar/>
                <div className="hero site-section padding-bottom-none l-container in-viewport">
                    <div className="hero__wrapper">
                        <div className="l-container l-container--content">
                            <h1 className="page-heading">{t('aboutUs.SingleData.pageHeading')}</h1>
                            <p>{t('aboutUs.SingleData.pageSubHeading')}</p>
                            <a href="https://app.taxly.ch/GettingStarted" rel="noreferrer" target="_blank" className="btn btn-large hero__cta">{t('aboutUs.SingleData.pageBtnText')}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
};

const AboutUsOurMission = () => {
    const { t } = useTranslation();
    let AboutUsOurMissionData =  t('aboutUs.AboutUsOurMissionData.data', { returnObjects: true });
    return(
        <section className="site-section taxly-grey-bg">
            <div className="l-container">
                <h2 className="site-section__heading">{t('aboutUs.SingleData.AboutUsOMHeading')}</h2>
                <div className="site-section__subheading">
                    <p>{t('aboutUs.SingleData.AboutUsOMSubHeading')}</p>
                </div>
                <div className="site-section__module icons-module">
                    <div className="columns-4">
                        {AboutUsOurMissionData.map((val,ind) =>
                            <div key={ind} className="columns-4-item">
                                <img src={val.image} alt={val.imgAlt} />
                                <p>{val.text}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

const AboutUsManagementTeam = () => {
    const { t } = useTranslation();
    let AboutUsManagementTeamData =  t('aboutUs.AboutUsManagementTeamData.data', { returnObjects: true });
    return(
        <section className="site-section">
            <div className="l-container">
                <h2 className="site-section__heading">{t('aboutUs.SingleData.AboutUsMTHeading')}</h2>
                <div className="site-section__subheading">
                    <p>{t('aboutUs.SingleData.AboutUsMTSubHeading')}</p>
                </div>
                <div className="site-section__module management_team people-module">
                    <div className="columns-3 taxly-boxes taxly-boxes-square">
                        {AboutUsManagementTeamData.map((val,ind) =>
                            <div key={ind} className="columns-3-item taxly-box taxly-box-white">
                                <div className="box-top-left box-image"></div>
                                <div className="box-top-right box-image"></div>
                                <div className="box-bottom-left box-image"></div>
                                <div className="box-bottom-right box-image"></div>
                                <div className="box-content">
                                    <a href={val.link} className="icon-linkedin" rel="noreferrer" target="_blank">&nbsp;</a>
                                    <img src={val.image} alt={val.imgAlt} />
                                    <div className="person-item">
                                        <h3>{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

const AboutUsInvestorsAndAdvisors = () => {
    const { t } = useTranslation();
    let AboutUsIAAData =  t('aboutUs.AboutUsIAAData.data', { returnObjects: true });
    return(
        <section className="site-section taxly-grey-bg">
            <div className="l-container">
                <h2 className="site-section__heading">{t('aboutUs.SingleData.AboutUsIAAHeading')}</h2>
                <div className="site-section__subheading">
                    <p>{t('aboutUs.SingleData.AboutUsIAASubHeading')}</p>
                </div>
                <div className="people-module investors-module">
                    <div className="columns-3 taxly-boxes taxly-boxes-square">
                        {AboutUsIAAData.map((val,ind) => 
                            <div key={ind} className="columns-3-item taxly-box taxly-box-white">
                                <div className="box-top-left box-image"></div>
                                <div className="box-top-right box-image"></div>
                                <div className="box-bottom-left box-image"></div>
                                <div className="box-bottom-right box-image"></div>
                                <div className="box-content">
                                    <a href={val.link} rel="noreferrer" className="icon-linkedin" target="_blank">&nbsp;</a>
                                    <h3>{val.title}</h3>
                                    <p>{val.subTitle}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export{AboutUsHeroSection, AboutUsOurMission, AboutUsManagementTeam, AboutUsInvestorsAndAdvisors};