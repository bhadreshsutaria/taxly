import React from "react";
import images from "../../Utils/ImageHelper";
import MobileMenu from "../../Layout/MobileMenu";
import Navbar from "../../Layout/Navbar";
import {SingleData, InsightPlanForOptionData, InsightPFOListData, GuidesResourcesData, InsightControlData} from "../Insights/Data";

const InsightHeroSection = () => {
    return(
        <div className="hero__inner insights">
            <MobileMenu/>
            <div className="taxly-hero taxly-hero taxly-hero_bg taxly-hero_bg-white" style={{ backgroundImage: `url(${images.insightsBackWhiteBg})` }}>
                {/* <div className="taxly-hero-city-bg"></div> */}
                <Navbar/>
                {/* <div className="taxly-hero-bg-green"></div> */}
                <div className="hero site-section padding-bottom-none l-container in-viewport">
                    {/* <div className="taxly-hero-bg"></div>
                    <div className="taxly-hero-bird-back" style={{ backgroundImage: `url(${images.insightsBackBg})` }}></div>
                    <div className="taxly-hero-curve-green"><img src={images.taxlyHeroCurveDarkBg} alt="taxly-hero-curve-dark" /></div>
                    <div className="taxly-hero-bird-front" style={{ backgroundImage: `url(${images.insightsFrontBg})` }}></div>
                    <div className="taxly-hero-bird"></div> */}
                    <div className="hero__wrapper">
                        <div className="l-container l-container--content">
                            <h1 className="page-heading">{SingleData.heroPageHeading}</h1>
                            <p>{SingleData.heroDesc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const InsightHowItWork = () =>{
    return(
        <section className="site-section no-subtitle">
            <div className="l-container">
                <h2 className="site-section__heading">{SingleData.HowItWorkTitle}</h2>
                <div className="insights-first">
                    <div className="insights-first-image">
                        <img src={images.insightsHowitworksSingleBg} alt="insights-howitworks-single" />
                        <img src={images.insightsHowitworksSingleBg} alt="insights-howitworks-single" />
                        <img src={images.insightsHowitworksSingleBg} alt="insights-howitworks-single" />
                    </div>
                    <div className="insights-first-text">
                        <p>{SingleData.HowItWorkDesc}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const InsightPlanFor = () =>{
    return(
        <section className="site-section taxly-grey-bg no-subtitle">
            <div className="l-container">
                <h2 className="site-section__heading">{SingleData.InsightPlanForHeading}</h2>
                <div className="insights-planning-module">
                    <div className="insights-planning-options">
                        {InsightPlanForOptionData.map((val, ind) => 
                            <div key={ind} className="insights-planning-option">
                                <div className="number-green">{val.PlanForOptionNumber}</div>
                                <div className="insights-planning-option-content">
                                    <h4>{val.PlanForOptionTitle}</h4>
                                    <p>{val.PlanForOptionDesc}</p>
                                    <img src={val.PlanForOptionImage} alt={val.PlanForOptionAlt} />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="insights-planning-subjects">
                        <div className="columns-2 taxly-boxes taxly-boxes-square">
                            {InsightPFOListData.map((val, ind) =>
                                <div key={ind} className="columns-2-item taxly-box taxly-box-white">
                                    <div className="box-top-left box-image"></div>
                                    <div className="box-top-right box-image"></div>
                                    <div className="box-bottom-left box-image"></div>
                                    <div className="box-bottom-right box-image"></div>
                                    <div className="box-content">
                                        <div className="insights-planning-subject-image">
                                            <img src={val.InsightPSImage} alt={val.InsightPSAlt} />
                                        </div>
                                        <h3>{val.InsightPSTitle}</h3>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const GuidesResources = () =>{
    return(
        <section className="site-section">
            <div className="l-container">
                <h2 className="site-section__heading">{SingleData.GuidesResourcesHeading}</h2>
                <div className="site-section__subheading">
                    <p>{SingleData.GuidesResourcesSubHeading}</p>
                </div>
                <div className="icons-module insights-guides">
                    <div className="columns-3">
                        {GuidesResourcesData.map((val,ind) => 
                            <div key={ind} className="columns-3-item">
                                <img src={val.grdImage} alt={val.grdAlt} />
                                <p>{val.grdText}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

const InsightControl = () => {
    return(
        <section className="site-section control-bg taxly-grey-bg no-subtitle">
            <div className="controller-bg"></div>
            <div className="l-container">
                <h2 className="site-section__heading">{SingleData.InsightControlHeading}</h2>
                <div className="taxly-module">
                    <a href="https://app.taxly.ch/GettingStarted" target="_blank" className="btn btn-large hero__cta">{SingleData.InsightControlBtnText}</a>
                </div>
            </div>
        </section>
    );
};

export {InsightHeroSection, InsightHowItWork, InsightPlanFor, GuidesResources, InsightControl};