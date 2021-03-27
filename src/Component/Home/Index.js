import React from "react";
import images from "../../Utils/ImageHelper";
import Homeheader from "../../Layout/Homeheader";
import Footer from "../../Layout/Footer";
import {Testimonial, SectionLink, TaxlyWork, Price, SafeHand, AppSection} from "../Home/Content";
import {Testimonialdata, TaxlyWorkData, PriceData, PriceBusinessData, SafeHandData} from "../Home/Data";
import DarkModal, {VideoModal} from "../Modal/Modal";

export default function Home() {
    return (
        <div className="App home">
            <Homeheader/>
            {/* BEGIN press logos section */}
            <section className="site-section home-press-logos taxly-grey-bg">
                <div className="l-container">
                    <p className="home-press-logos__title">You might’ve heard of us</p>
                    <ul>
                        <li><img style={{height: "18px"}} src={images.techCrunchLogo} alt="01_TechCrunch" /></li>
                        <li><img style={{height: "50px"}} src={images.twentyMinutenLogo} alt="02_20Minuten" /></li>
                        <li><img style={{height: "22px"}} src={images.nzzLogo} alt="03_NZZ" /></li>
                        <li><img style={{height: "25px"}} src={images.tagesanzeigerLogo} alt="04_Tagesanzeiger" /></li>
                        <li><img style={{height: "50px"}} src={images.cmsLogo} alt="cnn-money-switzerland" /></li>       
                    </ul>
                </div>
            </section>
            {/* END press logos section */}

            {/* BEGIN Over 6'000 Happy Customers section */}
            <section className="b-section site-section site-section-line no-subtitle testimonials-section 123">
                <div className="l-container b-section__container">
                    <span className="b-section__note">A 5 Star Tax Service</span>
                    <h2 className="site-section__heading b-section__title">Over 6'000 Happy Customers</h2>
                    <span className="b-section__desc testimonials-section__desc">Join a community of over 6'000 like-minded individuals who have already submitted their 2019 tax returns with Taxly.</span>
                    <div className="testimonials-section__grid">
                        {Testimonialdata.map((val, ind) => {
                            return <Testimonial key={ind} 
                                        title={val.title}
                                        description={val.description}
                                        name={val.name} 
                                        image={val.image}
                                    />;
                        })}
                    </div>
                    <SectionLink 
                        extraClass="good-to-know-section__link"
                        pageTarget="_blank"
                        pageLink="https://www.google.com/maps/place/Taxly+AG/@47.3672655,8.5329657,17z/data=!4m7!3m6!1s0x47900a01fce3e665:0xdc6d8cbf4e9556f3!8m2!3d47.3672655!4d8.5351544!9m1!1b1?hl=en-VN"
                        linkText="Read All Reviews"
                    />
                </div>
            </section>
            {/* END Over 6'000 Happy Customers section */}

            {/* BEGIN How Does Taxly Work section */}
            <section className="b-section b-section_bg-gray how-section">
                <div className="l-container b-section__container">
                    <span className="b-section__note">Swiss Tax Returns In Just 4 Steps</span>
                    <h2 className="b-section__title">How Does Taxly Work</h2>
                    <span className="b-section__desc how-section__desc">Roger is your virtual AI tax assistant.&nbsp;He’ll connect up the dots in your life, analyse your data, and optimize your return in real time down to the penny.</span>
                    <div className="how-section__grid">
                        {TaxlyWorkData.map((val, ind) => {
                            return <TaxlyWork 
                                        key={ind}
                                        imageSmall={val.imageSmall}
                                        imageBig={val.imageBig}
                                        name={val.name}
                                    />;
                        })}
                    </div>
                    <div className="how-content how-section__content">
                        <span className="how-content__title">Additional Support - Our In-House Swiss Tax Advisors Are On Hand</span>
                        <div className="how-content__text">
                            <p>Not every tax situation is the same and we can adapt to your needs. Whenever you need help, one of our Swiss tax advisors will be&nbsp;there to support&nbsp;you. Step by step until the finished tax return.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* END How Does Taxly Work section */}

            {/* BEGIN Who Can Benefit From Taxly? section */}
            <section className="b-section for-whom-section">
                <div className="l-container b-section__container">
                    <h3 className="b-section__title">Who Can Benefit From Taxly?</h3>
                    <span className="b-section__desc for-whom-section__desc">Taxly offers its services to all residents of Switzerland, regardless of your income or nationality.</span>
                    <div className="for-whom-section__grid">
                        <img className="for-whom-section__image" src={images.fWI2x} alt="Taxly" />
                        <span className="for-whom-section__item">Expats</span>
                        <span className="for-whom-section__item">Homeowner</span>
                        <span className="for-whom-section__item">Freelancers</span>
                        <span className="for-whom-section__item">Business Owners</span>
                        <span className="for-whom-section__item">Pensioner</span>
                        <span className="for-whom-section__item">Disabled</span>
                    </div>
                    <SectionLink 
                        extraClass="for-whom-section__link"
                        pageTarget=""
                        pageLink="/faq/"
                        linkText="Questions? (FAQ)"
                    />
                </div>
            </section>
            {/* END Who Can Benefit From Taxly? section */}

            {/* BEGIN Who Can Benefit From Taxly? section */}
            <section className="b-section b-section_bg-gray site-section price-section">
                <div className="l-container b-section__container">
                    <h2 className="site-section__heading b-section__title">Smart Pricing For Everyone</h2>
                    <div className="site-section__subheading b-section__desc price-section__desc">
                        <p>We strive for the most competitive&nbsp;prices in Switzerland and thanks to our smart technology, you can create your tax return at an unprecedented price. Examples below.</p>
                    </div>
                    <div className="price-section__grid">
                        {PriceData.map((val, ind) => {
                            return <Price 
                                        key={ind}
                                        image={val.image}
                                        note={val.note}
                                        numberValue={val.numberValue}
                                        currency={val.currency}
                                        priceText= {val.priceText}
                                    />;
                        })}
                    </div>
                    <footer className="price-section__details">
                        <svg className="price-section__details-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 20">
                            <g fill="none" fillRule="evenodd">
                                <path fill="#EEF1F6" d="M-466-1017H914V136H-466z"></path>
                                <path fill="#7C8AA2" d="M30 0H2C1.458 0 .99.165.594.495.198.825 0 1.215 0 1.667v16.666c0 .452.198.842.594 1.172.396.33.864.495 1.406.495h28c.542 0 1.01-.165 1.406-.495.396-.33.594-.72.594-1.172V1.667c0-.452-.198-.842-.594-1.172A2.127 2.127 0 0030 0zM2 4h28v3H2V4z"></path>
                            </g>
                        </svg>
                        <span className="price-section__details-value">Payment Options: Twint, PayPal, Credit Card, Payment By Invoice</span>
                    </footer>
                </div>
            </section>
            {/* END Who Can Benefit From Taxly? section */}

            {/* BEGIN We Want To Help Your Business section */}
            <section className="b-section site-section price-section">
                <div className="l-container b-section__container">
                    <span className="b-section__note b-section__note_icon-line">COVID-19 Special For Small Businesses</span>
                    <h3 className="site-section__heading b-section__title">We Want To Help Your Business</h3>
                    <div className="site-section__subheading b-section__desc price-section__desc">
                        <p>Taxly wants to help small businesses in their time of need with special prices for Small Medium Sized Businesses who have been affected by COVID-19.</p>
                    </div>
                    <div className="price-section__grid">
                        {PriceBusinessData.map((val, ind) => {
                            return <Price 
                                        key={ind}
                                        image={val.image}
                                        note={val.note}
                                        numberValue={val.numberValue}
                                        currency={val.currency}
                                        priceText= {val.priceText}
                                    />;
                        })}
                    </div>
                    <footer className="price-section__details">
                        <svg className="price-section__details-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 20">
                            <g fill="none" fillRule="evenodd">
                                <path fill="#EEF1F6" d="M-466-1017H914V136H-466z"></path>
                                <path fill="#7C8AA2" d="M30 0H2C1.458 0 .99.165.594.495.198.825 0 1.215 0 1.667v16.666c0 .452.198.842.594 1.172.396.33.864.495 1.406.495h28c.542 0 1.01-.165 1.406-.495.396-.33.594-.72.594-1.172V1.667c0-.452-.198-.842-.594-1.172A2.127 2.127 0 0030 0zM2 4h28v3H2V4z"></path>
                            </g>
                        </svg>
                        <span className="price-section__details-value">Payment Options: Twint, PayPal, Credit Card, Payment By Invoice</span>
                    </footer>
                </div>
            </section>
            {/* END We Want To Help Your Business section */}

            {/* BEGIN You're In Safe Hands section */}
            <section className="site-section taxly-grey-bg b-section good-to-know-section">
                <div className="l-container b-section__container">
                    <h4 className="site-section__heading b-section__title good-to-know-section__title">You're In Safe Hands</h4>
                    <div className="site-section__subheading b-section__desc good-to-know-section__desc">
                        <p>Brought to you by a team of Swiss tax experts and technologists who care deeply about protecting you and your data.</p>
                    </div>
                    <div className="b-icons-module good-to-know-section__grid">
                        {SafeHandData.map((val, ind) => {
                            return <SafeHand 
                                        key={ind}
                                        image={val.image}
                                        alt={val.alt}
                                        sname={val.sname}
                                        stext={val.stext}
                                    />;
                        })}
                    </div>
                    <SectionLink 
                        extraClass="good-to-know-section__link"
                        pageLink="/faq/"
                        linkText="Questions? (FAQ)"
                    />
                </div>
            </section>
            {/* BEGIN You're In Safe Hands section */}

            {/* BEGIN App Section */}
            <AppSection 
                atitle="Our mobile app for iOS and Android will be available soon"
                adesc="Interested? We can keep you up to date."
                btnText="Sign up to our newsletter"
            />
            {/* End App Section */}
            
            <Footer />
            <VideoModal />
            <DarkModal />

        </div>
    )
}