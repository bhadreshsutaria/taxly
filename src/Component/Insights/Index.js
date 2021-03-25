import React, { useState } from "react";
import images from "../../Utils/ImageHelper";
import Footer from "../../Layout/Footer";
import MobileMenu from "../../Layout/MobileMenu";
import Navbar from "../../Layout/Navbar";
export default function Insights() {
    return (
        <div className="App">
            <div className="hero__inner insights">
                <MobileMenu/>
                <div className="taxly-hero">
                    <div className="taxly-hero-city-bg"></div>
                    <Navbar/>
                    <div className="taxly-hero-bg-green"></div>
                    <div className="hero site-section padding-bottom-none l-container in-viewport">
                        <div className="taxly-hero-bg"></div>
                        <div className="taxly-hero-bird-back" style={{ backgroundImage: `url(${images.insightsBackBg})` }}></div>
                        <div className="taxly-hero-curve-green"><img src={images.taxlyHeroCurveDarkBg} alt="taxly-hero-curve-dark" /></div>
                        <div className="taxly-hero-bird-front" style={{ backgroundImage: `url(${images.insightsFrontBg})` }}></div>
                        <div className="taxly-hero-bird"></div>
                        <div className="hero__wrapper">
                            <div className="l-container l-container--content">
                                <h1 className="page-heading">Introducing personal insights</h1>
                                <p>Discover tax implications and savings for your future with simple to-the-point resources</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*BEING How does it work?*/}
            <section className="site-section no-subtitle">
                <div className="l-container">
                    <h2 className="site-section__heading">How does it work?</h2>
                    <div className="insights-first">
                        <div className="insights-first-image">
                            <img src={images.insightsHowitworksSingleBg} alt="insights-howitworks-single" />
                            <img src={images.insightsHowitworksSingleBg} alt="insights-howitworks-single" />
                            <img src={images.insightsHowitworksSingleBg} alt="insights-howitworks-single" />
                        </div>
                        <div className="insights-first-text">
                            <p>Life is uncertain. Taxes are even more uncertain. Add clarity to your personal financial planning with our insights.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/*END How does it work?*/}

            {/*BEING What would you like to plan for?*/}
            <section className="site-section taxly-grey-bg no-subtitle">
                <div className="l-container">
                    <h2 className="site-section__heading">What would you like to plan for?</h2>
                    <div className="insights-planning-module">
                        <div className="insights-planning-options">
                            <div className="insights-planning-option">
                                <div className="number-green">1</div>
                                <div className="insights-planning-option-content">
                                    <h4>Running our AI script</h4>
                                    <p>We can analyse your tax data.</p>
                                    <img src={images.insightsIconAi} alt="insights-icon-ai" />
                                </div>
                            </div>
                            <div className="insights-planning-option">
                                <div className="number-green">2</div>
                                <div className="insights-planning-option-content">
                                    <h4>Total savings per year</h4>
                                    <p>Detailed breakdowns of savings or liabilities.</p>
                                    <img src={images.insightsIconSavings} alt="insights-icon-savings" />
                                </div>
                            </div>
                            <div className="insights-planning-option">
                                <div className="number-green">3</div>
                                <div className="insights-planning-option-content">
                                    <h4>Optimise further</h4>
                                    <p>With our partners, we can offer you better financial products to save you more money.</p>
                                    <img src={images.insightsIconOffers} alt="insights-icon-offers" />
                                </div>
                            </div>
                        </div>
                        <div className="insights-planning-subjects">
                            <div className="columns-2 taxly-boxes taxly-boxes-square">
                                <div className="columns-2-item taxly-box taxly-box-white">
                                    <div className="box-top-left box-image"></div>
                                    <div className="box-top-right box-image"></div>
                                    <div className="box-bottom-left box-image"></div>
                                    <div className="box-bottom-right box-image"></div>
                                    <div className="box-content">
                                        <div className="insights-planning-subject-image">
                                            <img src={images.insightsHomeIcon} alt="insights-home" />
                                        </div>
                                        <h3>Buying a home</h3>
                                    </div>
                                </div>
                                <div className="columns-2-item taxly-box taxly-box-white">
                                    <div className="box-top-left box-image"></div>
                                    <div className="box-top-right box-image"></div>
                                    <div className="box-bottom-left box-image"></div>
                                    <div className="box-bottom-right box-image"></div>
                                    <div className="box-content">
                                        <div className="insights-planning-subject-image">
                                            <img src={images.insightsMortgageIcon} alt="insights-mortgage" />
                                        </div>
                                        <h3>Remortgage</h3>
                                    </div>
                                </div>
                                <div className="columns-2-item taxly-box taxly-box-white">
                                    <div className="box-top-left box-image"></div>
                                    <div className="box-top-right box-image"></div>
                                    <div className="box-bottom-left box-image"></div>
                                    <div className="box-bottom-right box-image"></div>
                                    <div className="box-content">
                                        <div className="insights-planning-subject-image">
                                            <img src={images.insightsChildrenIcon} alt="insights-children" />
                                        </div>
                                        <h3>Having children</h3>
                                    </div>
                                </div>
                                <div className="columns-2-item taxly-box taxly-box-white">
                                    <div className="box-top-left box-image"></div>
                                    <div className="box-top-right box-image"></div>
                                    <div className="box-bottom-left box-image"></div>
                                    <div className="box-bottom-right box-image"></div>
                                    <div className="box-content">
                                        <div className="insights-planning-subject-image">
                                            <img src={images.insightsMarriedIcon} alt="insights-married" />
                                        </div>
                                        <h3>Getting married</h3>
                                    </div>
                                </div>
                                <div className="columns-2-item taxly-box taxly-box-white">
                                    <div className="box-top-left box-image"></div>
                                    <div className="box-top-right box-image"></div>
                                    <div className="box-bottom-left box-image"></div>
                                    <div className="box-bottom-right box-image"></div>
                                    <div className="box-content">
                                        <div className="insights-planning-subject-image">
                                            <img src={images.insightsRetirementIcon} alt="insights-retirement" />
                                        </div>
                                        <h3>Retirement</h3>
                                    </div>
                                </div>
                                <div className="columns-2-item taxly-box taxly-box-white">
                                    <div className="box-top-left box-image"></div>
                                    <div className="box-top-right box-image"></div>
                                    <div className="box-bottom-left box-image"></div>
                                    <div className="box-bottom-right box-image"></div>
                                    <div className="box-content">
                                        <div className="insights-planning-subject-image">
                                            <img src={images.insights3aIcon} alt="insights-3a" />
                                        </div>
                                        <h3>Buying into a 3A</h3>
                                    </div>
                                </div>
                                <div className="columns-2-item taxly-box taxly-box-white">
                                    <div className="box-top-left box-image"></div>
                                    <div className="box-top-right box-image"></div>
                                    <div className="box-bottom-left box-image"></div>
                                    <div className="box-bottom-right box-image"></div>
                                    <div className="box-content">
                                        <div className="insights-planning-subject-image">
                                            <img src={images.insightsCarIcon} alt="insights-car" />
                                        </div>
                                        <h3>Leasing a car</h3>
                                    </div>
                                </div>
                                <div className="columns-2-item taxly-box taxly-box-white">
                                    <div className="box-top-left box-image"></div>
                                    <div className="box-top-right box-image"></div>
                                    <div className="box-bottom-left box-image"></div>
                                    <div className="box-bottom-right box-image"></div>
                                    <div className="box-content">
                                        <div className="insights-planning-subject-image">
                                            <img src={images.insightsBusinessIcon} alt="insights-business" />
                                        </div>
                                        <h3>Starting a business</h3>
                                    </div>
                                </div>
                                <div className="columns-2-item taxly-box taxly-box-white">
                                    <div className="box-top-left box-image"></div>
                                    <div className="box-top-right box-image"></div>
                                    <div className="box-bottom-left box-image"></div>
                                    <div className="box-bottom-right box-image"></div>
                                    <div className="box-content">
                                        <div className="insights-planning-subject-image">
                                            <img src={images.insightsLifeInsuranceIcon} alt="insights-life-insurance" />
                                        </div>
                                        <h3>Buying insurance</h3>
                                    </div>
                                </div>
                                <div className="columns-2-item taxly-box taxly-box-white">
                                    <div className="box-top-left box-image"></div>
                                    <div className="box-top-right box-image"></div>
                                    <div className="box-bottom-left box-image"></div>
                                    <div className="box-bottom-right box-image"></div>
                                    <div className="box-content">
                                        <div className="insights-planning-subject-image">
                                            <img src={images.insightsCantonIcon} alt="insights-canton" />
                                        </div>
                                        <h3>Canton change</h3>
                                    </div>
                                </div>
                                <div className="columns-2-item taxly-box taxly-box-white">
                                    <div className="box-top-left box-image"></div>
                                    <div className="box-top-right box-image"></div>
                                    <div className="box-bottom-left box-image"></div>
                                    <div className="box-bottom-right box-image"></div>
                                    <div className="box-content">
                                        <div className="insights-planning-subject-image">
                                            <img src={images.insightsDivorceIcon} alt="insights-divorce" />
                                        </div>
                                        <h3>Getting a divorce</h3>
                                    </div>
                                </div>
                                <div className="columns-2-item taxly-box taxly-box-white">
                                    <div className="box-top-left box-image"></div>
                                    <div className="box-top-right box-image"></div>
                                    <div className="box-bottom-left box-image"></div>
                                    <div className="box-bottom-right box-image"></div>
                                    <div className="box-content">
                                        <div className="insights-planning-subject-image">
                                            <img src={images.insightsMoreIcon} alt="insights-more" />
                                        </div>
                                        <h3>...More</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*END What would you like to plan for?*/}

            {/*BEING Guides & Resources*/}
            <section className="site-section">
                <div className="l-container">
                    <h2 className="site-section__heading">Guides &amp; Resources</h2>
                    <div className="site-section__subheading">
                        <p>Unlock our guides to help you navigate and become more financially savvy.</p>
                    </div>
                    <div className="icons-module insights-guides">
                        <div className="columns-3">
                            <div className="columns-3-item">
                                <img src={images.managerIcon} alt="icon-manager" />
                                <p>How do wealth managers work?</p>
                            </div>
                            <div className="columns-3-item">
                                <img src={images.investIcon} alt="icon-invest" />
                                <p>Start investing like the top 1%</p>
                            </div>
                            <div className="columns-3-item">
                                <img src={images.artIcon} alt="icon-art" />
                                <p>Investing in art and precious metals</p>
                            </div>
                            <div className="columns-3-item">
                                <img src={images.incomeIcon} alt="icon-income" />
                                <p>Managing major income</p>
                            </div>
                            <div className="columns-3-item">
                                <img src={images.houseIcon} alt="icon-house" />
                                <p>Investing in Swiss property</p>
                            </div>
                            <div className="columns-3-item">
                                <img src={images.chooseIcon} alt="icon-choose" />
                                <p>Choosing an investment provider</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*END Guides & Resources*/}

            {/*BEING Take control of your finances*/}
            <section className="site-section control-bg taxly-grey-bg no-subtitle">
                <div className="controller-bg"></div>
                <div className="l-container">
                    <h2 className="site-section__heading">Take control of your finances</h2>
                    <div className="taxly-module">
                        <a href="https://app.taxly.ch/GettingStarted" target="_blank" className="btn btn-large hero__cta">Get started</a>
                    </div>
                </div>
            </section>
            {/*END Take control of your finances*/}
            <Footer/>
        </div>
    )
}