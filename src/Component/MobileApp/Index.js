import React from "react";
import images from "../../Utils/ImageHelper";
import Footer from "../../Layout/Footer";
import MobileMenu from "../../Layout/MobileMenu";
import Navbar from "../../Layout/Navbar";
import Heading, {Card, SubHeading, IconsModuleOne, ComingSoonCard} from "../MobileApp/Content";

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
                                <h1 className="page-heading">Tax Submission Built Around Your Life</h1>
                                <p>It really couldn’t be easier, or faster.</p>
                                <a href="#" className="btn btn-large hero__cta js-show-dark-modal">Notify Me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="site-section no-title">
                <div className="l-container">
                    <div className="howitworks-module app-first-module">
                        <Card
                            extraClass=""
                            img={images.revolutionalOsrBg}
                            alt="revolutional-osr"
                            title="Digitize &amp; Transfer Documents In No Time At All"
                            desc="Intuitive, fast, secure and always available. Snap documents and store them in a secure digital wallet and submit them instantly."
                        />
                        <Card
                            extraClass="flex-reverse relative pdt-40 site-section-line"
                            img={images.scanLikeAWindBg}
                            alt="scan-like-a-wind"
                            title="Scan Like The Wind"
                            desc="Digitize paper documents via your smartphone. Single or multi-page document scans with OCR high image processing for maximum readability.&nbsp; 
                            Automatic assignment to your tax return. End-to-end encryption."
                        />
                    </div>
                </div>
            </section>

            <section className="site-section taxly-grey-bg">
                <div className="l-container">
                    <Heading heading="Tax For the 21st Century"/>
                    <SubHeading subHeading="Taxly's amazing app makes doing your taxes simple, practical and kinda fun!"/>
                    <IconsModuleOne image={images.appScreensBg} imgAlt="app-screens" />
                </div>
            </section>

            <section className="site-section taxly-insight-bg">
                <div className="l-container">
                    <Heading heading="Removing Financial Complexity Through Personal Insights"/>
                    <SubHeading subHeading="Add clarity to your personal financial planning with our insights tool."/>
                    <IconsModuleOne image={images.thirdAppBg} imgAlt="3rd-app" />
                </div>
            </section>

            <section className="site-section apps-bottom-module site-section-line">
                <div className="l-container">
                    <div className="top-image">
                        <img src={images.tBackground1xLogo} alt="t-background1x" />
                    </div>
                    <Heading heading="Download the app"/>
                    <SubHeading subHeading="Download Taxly for free from the App Store &amp; Google Play."/>
                    <div className="prices-module">
                        <div className="columns-2 taxly-boxes taxly-boxes-square">
                            <ComingSoonCard title="Coming soon" image={images.appleIcon} imgAlt="apple" btnName="Notify Me" />
                            <ComingSoonCard title="Coming soon" image={images.androidIcon} imgAlt="android" btnName="Notify Me" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>

            <div className="modal invite-modal dark-modal taxly-dark">
                <div className="modal__overlay"></div>
                <div className="modal__content taxly-box">
                    <div className="box-top-left box-image"></div>
                    <div className="box-top-right box-image"></div>
                    <div className="box-bottom-left box-image"></div>
                    <div className="box-bottom-right box-image"></div>
                    <div className="box-content">
                        <div className="modal__close js-hide-modal">Close</div>
                        <div className="modal__body">
                            <div className="text-center">
                                <div className="screen-reader-response">
                                    <p role="status" aria-live="polite" aria-atomic="true"></p>
                                </div>
                                <form className="init">
                                    <h2>Let's get started</h2>
                                    <p>Give us your details and we'll get right back to you</p>
                                    <div className="form__group">
                                        <label>Full name*</label><input type="text" name="full-name" className="form__control" id="full-name-taxacc" aria-required="true" aria-invalid="false" />
                                    </div>
                                    <div className="form__group">
                                        <label>Email*</label><input type="email" name="email" className="form__control" id="email-taxacc" aria-required="true" aria-invalid="false" />
                                    </div>
                                    <div className="form__group">
                                        <label>Company</label><input type="text" name="company" className="form__control" id="company-taxacc" aria-invalid="false" />
                                    </div>
                                    <div className="form__group">
                                        <p className="form-label">*Required field</p>
                                    </div>
                                    <p><input type="submit" value="Sign up now" className="btn form__submit" /></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}