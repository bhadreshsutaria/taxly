import React, { useState } from "react";
import images from "../../Utils/ImageHelper";
import Footer from "../../Layout/Footer";
import MobileMenu from "../../Layout/MobileMenu";
import Navbar from "../../Layout/Navbar";
export default function Charity() {
    return (
        <div className="App">
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
                                <h1 className="page-heading">Making a change</h1>
                                <p>For us and our community, there is a real desire to be able to engage in actions for the environment, even as a start-up and for-profit business</p>
                                <a href="https://app.taxly.ch/GettingStarted" target="_blank" className="btn btn-large hero__cta">Get started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main className="page-content">
                {/*BEING Who’s with us?*/}
                <section className="site-section">
                    <div className="l-container">
                        <h2 className="site-section__heading">Who’s with us?</h2>
                        <div className="site-section__subheading">
                            <p>We are a young company. Alone, we might not make a large impact. But could it be as simple as just asking other start-ups to join us? We think it just might.</p>
                            <p>There are many start-ups out there already doing incredible things to give back. This is not about positioning ourselves above, or shaming those who don’t participate, but is intended to be positive and an encouraging call to action for those who agree that we could and should be doing better.</p>
                        </div>
                        <div className="social-who">
                            <img src={images.socialwhoStars} className="stars" alt="social_who_stars" />
                            <img src={images.socialwhoStars} className="stars-flip" alt="social_who_stars" />
                            <img src={images.socialwhogloBeen} className="globe" alt="social_who_globe-en" />
                        </div>
                    </div>
                </section>
                {/*END Who’s with us?*/}

                {/*BEING Our plan*/}
                <section className="site-section taxly-grey-bg no-subtitle">
                    <div className="l-container">
                        <h2 className="site-section__heading">Our plan</h2>
                        <div className="icons-module how-module">
                            <div className="columns-3">
                                <div className="columns-3-item">
                                    <img src={images.charityIcon} alt="icon-charity" />
                                    <p>We are supporting <a href="https://www.myclimate.org/" target="_blank" rel="noopener">myclimate.org</a>, a Swiss charity focused on climate change, and we will match every donation made by our customers.</p>
                                </div>
                                <div className="columns-3-item">
                                    <img src={images.campaignIcon} alt="icon-campaign" />
                                    <p>We will also be campaigning on social media, on site and in the press. Spreading the word about our customers and those start-ups who join the movement.</p>
                                </div>
                                <div className="columns-3-item">
                                    <img src={images.collaborationIcon} alt="icon-collaboration" />
                                    <p>We hope that this may be the first of many collaborations between customer and corporations to come and make a change for the better.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*END Our plan*/}

                {/*BEING B-Corp*/}
                <section className="site-section">
                    <div className="l-container">
                        <h2 className="site-section__heading">B-Corp</h2>
                        <div className="site-section__subheading">
                            <p>Taxly AG has applied for a B-Corp pending certificate. Serious social impact is part of our legal mission and business model – Not just marketing fluff.</p>
                        </div>
                        <div className="social-climate-change">
                            <img src={images.socialimpactBcorpglobe} className="globe" alt="social_bcorp_globe" />
                            <img src={images.socialimpactBcorpleaf} className="leaf" alt="social_bcorp_leaf" />
                            <img src={images.socialimpactBcorpcertified} className="bcorp" alt="social_bcorp_certified" />
                        </div>
                        <a href="https://bcorporation.net/about-b-corps" target="_blank" className="btn btn-large hero__cta">Learn more</a>
                    </div>
                </section>
                {/*END B-Corp*/}

                {/*BEING Join the movement*/}
                <section className="site-section handshake-bg taxly-grey-bg">
                    <div className="l-container">
                        <h2 className="site-section__heading">Join the movement</h2>
                        <div className="site-section__subheading">
                            <p>People are already supporting us in this effort and care deeply about it. And as our community grows, our social impact can become much much bigger.</p>
                        </div>
                        <a href="https://app.taxly.ch/GettingStarted" target="_blank" className="btn btn-large hero__cta">Get started</a>
                    </div>
                </section>
                {/*END Join the movement*/}
            </main>
            <Footer/>
        </div>
    )
}