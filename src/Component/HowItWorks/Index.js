import React, { useState } from "react";
import images from "../../Utils/ImageHelper";
import Footer from "../../Layout/Footer";
import MobileMenu from "../../Layout/MobileMenu";
import Navbar from "../../Layout/Navbar";

export default function HowItWorks() {
    return (
        <div className="App">
            <div className="hero__inner">
                <MobileMenu/>
                <div className="taxly-hero">
                    <div className="taxly-hero-city-bg"></div>
                    <Navbar/>
                    <div className="taxly-hero-bg-green"></div>
                    <div className="hero site-section padding-bottom-none l-container in-viewport">
                        <div className="taxly-hero-bg"></div>
                        <div className="taxly-hero-bird-back" style={{ backgroundImage: `url(${images.howItWorkBirdBg})` }}></div>
                        <div className="taxly-hero-curve-green"><img src={images.taxlyHeroCurveDarkBg} alt="taxly-hero-curve-dark" /></div>
                        <div className="hero__wrapper">
                            <div className="l-container l-container--content">
                                <h1 className="page-heading">How does taxly work?</h1>
                                <p>Complete your Swiss tax return without any tax knowledge in 10 minutes</p>
                                <a href="https://app.taxly.ch/GettingStarted" target="_blank" className="btn btn-large hero__cta">Get started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="site-section no-title">
                <div className="l-container">
                    <div className="howitworks-module">
                        <div className="columns-2 text-left taxly-image-text">
                            <div className="columns-2-item fade-bottom">
                                <div className="fade-bottom-left"></div>
                                <div className="fade-bottom-right"></div>
                                <div className="fade-bottom-item">
                                    <img src={images.meetRogerOneEn} alt="meet-roger-1-en" />
                                </div>
                            </div>
                            <div className="columns-2-item">
                                <h3>Simplified Questions</h3>
                                <p>AI Roger will guide you through simplified questions that are only relevant to your situation.</p>
                            </div>
                        </div>
                        <div className="columns-2 text-left taxly-image-text flex-reverse">
                            <div className="columns-2-item">
                                <img src={images.meetRogerTwoEn} alt="meet-roger-2-large" />
                            </div>
                            <div className="columns-2-item">
                                <h3>Let Roger do his thing!</h3>
                                <p>Roger will compute and optimise your tax return better than any human, by checking the relevant rules and finding deductions in a split second.</p>
                            </div>
                        </div>
                        <div className="columns-2 text-left taxly-image-text">
                            <div className="columns-2-item fade-bottom">
                                <div className="fade-bottom-left"></div>
                                <div className="fade-bottom-right"></div>
                                <div className="fade-bottom-item">
                                    <img src={images.meetRogerThreeEn} alt="meet-roger-3" />
                                </div>
                            </div>
                            <div className="columns-2-item">
                                <h3>Review &amp; confirm</h3>
                                <p>In a matter of minutes you can review a fully completed tax return. And don’t worry Roger is best friends with your local tax authority to ensure the output is checked and correct.</p>
                            </div>
                        </div>
                        <div className="columns-2 text-left taxly-image-text flex-reverse">
                            <div className="columns-2-item fade-bottom">
                                <div className="fade-bottom-left"></div>
                                <div className="fade-bottom-right"></div>
                                <div className="fade-bottom-item">
                                    <img src={images.meetRogerFourEn} alt="meet-roger-4" />
                                </div>
                            </div>
                            <div className="columns-2-item">
                                <h3>Submit with a click</h3>
                                <p>We handle the submission to your local tax office, either electronically or via post so you don’t have to worry about it. We’ll keep you informed, of course, and you can always retrieve your data online.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* BEING In a nutshell */}
            <section className="site-section site-section-line no-subtitle">
                <div className="l-container">
                    <h2 className="site-section__heading">In a nutshell</h2>
                    <div className="list-ticks-module">
                        <ul>
                            <li>File your Swiss tax return in 10 minutes</li>
                            <li>Your taxes are automatically optimised - better than any human, to maximise your personal situation.</li>
                            <li>Zero tax knowledge required</li>
                            <li>Starts from 25 CHF</li>
                            <li>Submit your tax return digitally or receive it by post</li>
                            <li>Gain insights on how to optimize your finances</li>
                            <li>Help us fight climate change</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* END In a nutshell */}
            {/* BEING Get your tax return in 10 minutes */}
            <section className="site-section narrow-hedding clock-image-bg taxly-grey-bg no-subtitle">
                <div className="l-container">
                <h2 className="site-section__heading">Get your tax return in 10 minutes</h2>
                    <a href="https://app.taxly.ch/GettingStarted" target="_blank" className="btn btn-large">Get started</a>
                </div>
            </section>
            {/* END Get your tax return in 10 minutes */}
            <Footer/>
        </div>
    )
}