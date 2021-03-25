import React, { useState } from "react";
import images from "../../Utils/ImageHelper";
import Footer from "../../Layout/Footer";
import MobileMenu from "../../Layout/MobileMenu";
import Navbar from "../../Layout/Navbar";
export default function App() {
    return (
        <div className="App">
            <div className="hero__inner app-page">
                <MobileMenu/>
                <div className="taxly-hero">
                    <div className="taxly-hero-city-bg"></div>
                    <Navbar/>
                    <div className="taxly-hero-bg-green"></div>
                    <div className="hero site-section padding-bottom-none l-container in-viewport">
                        <div className="taxly-hero-bg"></div>
                        <div className="taxly-hero-bird-back" style={{ backgroundImage: `url(${images.homeBackBg})` }}></div>
                        <div className="taxly-hero-curve-green"><img src={images.taxlyHeroCurveDarkBg} alt="taxly-hero-curve-dark" /></div>
                        <div className="taxly-hero-bird-front" style={{ backgroundImage: `url(${images.appFrontOneBg})` }}></div>
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
            <strong>This is app</strong>

            <Footer/>
        </div>
    )
}