import React, { Component } from "react";
import images from "../../Utils/ImageHelper";
import {SingalData, Testimonialdata, SectionLinkData, TaxlyWorkData, BenefitTaxlyData, PriceData, PriceBusinessData, SafeHandData} from "../Home/Data";

const LogoSection = () => {
    return(
        <section className="site-section home-press-logos taxly-grey-bg">
            <div className="l-container">
                <p className="home-press-logos__title">{SingalData.logoTitle}</p>
                <ul>
                    <li><img style={{height: "18px"}} src={images.techCrunchLogo} alt="01_TechCrunch" /></li>
                    <li><img style={{height: "50px"}} src={images.twentyMinutenLogo} alt="02_20Minuten" /></li>
                    <li><img style={{height: "22px"}} src={images.nzzLogo} alt="03_NZZ" /></li>
                    <li><img style={{height: "25px"}} src={images.tagesanzeigerLogo} alt="04_Tagesanzeiger" /></li>
                    <li><img style={{height: "50px"}} src={images.cmsLogo} alt="cnn-money-switzerland" /></li>       
                </ul>
            </div>
        </section>
    );
};

const Star = (props) => {
    return(
        <>
        <svg className="star star_half rating" data-rating={props.halfStar} height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22">
            <path fill="#05F29B" fillRule="evenodd" d="M22.95 8.285a.823.823 0 00-.293-.466 1.659 1.659 0 00-.537-.27l-6.664-.93L12.429.563C12.282.188 11.973 0 11.5 0c-.472 0-.781.188-.927.564L7.546 6.52.98 7.55a.77.77 0 00-.55.22 1.83 1.83 0 00-.378.515c-.065.213-.07.417-.012.613a.764.764 0 00.305.441l4.81 4.707-1.148 6.692a.943.943 0 00.049.6c.081.188.203.34.366.454.146.098.321.163.525.196.203.032.41 0 .622-.098l5.932-3.138 5.932 3.138h.537c.098 0 .2-.02.305-.062.106-.04.208-.094.306-.159a.904.904 0 00.366-.429.943.943 0 00.049-.6l-1.148-6.692 4.81-4.707a.887.887 0 00.304-.441.745.745 0 00-.012-.515zm-11.676 8.261a.92.92 0 01.476-.147c.155 0 .306.049.452.147l4.59 2.427-.928-5.148c0-.147.024-.298.073-.453.049-.156.122-.315.22-.478l3.76-3.555-5.103-.735a.713.713 0 01-.464-.184 5.548 5.548 0 01-.366-.33L11.69 3.382l-.415 13.163z"></path>
        </svg>
        <svg className="star rating" data-rating={props.fullStar} height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22">
            <path fill="#05F29B" fillRule="evenodd" d="M22.95 8.285a.823.823 0 00-.293-.466 1.659 1.659 0 00-.537-.27l-6.664-.93L12.429.563C12.282.188 11.973 0 11.5 0c-.472 0-.781.188-.927.564L7.546 6.52.98 7.55a.77.77 0 00-.55.22 1.83 1.83 0 00-.378.515c-.065.213-.07.417-.012.613a.764.764 0 00.305.441l4.81 4.707-1.148 6.692a.943.943 0 00.049.6c.081.188.203.34.366.454.146.098.321.163.525.196.203.032.41 0 .622-.098l5.932-3.138 5.932 3.138h.537c.098 0 .2-.02.305-.062.106-.04.208-.094.306-.159a.904.904 0 00.366-.429.943.943 0 00.049-.6l-1.148-6.692 4.81-4.707a.887.887 0 00.304-.441.745.745 0 00-.012-.515z"></path>
        </svg>
        </>
    );
};

const SectionLink = (props) => {
    return(
        <>
        <div className={`b-section__link ${props.extraClass}`}>
            <a target={props.pageTarget} rel="noopener noreferrer" href={props.pageLink} className="b-section__link-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 14">
                    <path fill="#505D68" fillRule="nonzero" d="M11.174 13.984a.992.992 0 00.692-.28L17.8 7.768l.077-.066A.934.934 0 0018.17 7a.934.934 0 00-.293-.703l-.077-.065L11.866.297a.992.992 0 00-.692-.281.971.971 0 00-.691.293.928.928 0 00-.305.691c0 .266.094.5.281.703l4.29 4.29H1.177c-.281.015-.52.116-.715.304A.934.934 0 00.17 7c0 .281.098.516.293.703.196.188.434.29.715.305h13.57l-4.289 4.289a1.006 1.006 0 00-.281.703c0 .266.102.496.305.691a.971.971 0 00.691.293z"></path>
                </svg>
                <span className="b-section__link-value">{props.linkText}</span>
            </a>
        </div>
        </>
    );
};

const Testimonial = () => {
    return(
        <section className="b-section site-section site-section-line no-subtitle testimonials-section">
                <div className="l-container b-section__container">
                    <span className="b-section__note">{SingalData.testimonialNote}</span>
                    <h2 className="site-section__heading b-section__title">{SingalData.testimonialTitle}</h2>
                    <span className="b-section__desc testimonials-section__desc">{SingalData.testimonialDesc}</span>
                    <div className="testimonials-section__grid">
                        {Testimonialdata.map((val,ind) =>
                        <div key={ind} className="testimonial-item testimonials-section__item">
                            <span className="testimonial-item__title">{val.title}</span>
                            <div className="testimonial-item__text">
                                <p>{val.description}</p>
                            </div>
                            <span className="testimonial-item__name">{val.name}</span>
                            <footer className="testimonial-item__footer">
                                <div className="rating-mdule testimonial-item__rating stars" data-stars="5">
                                    <Star halfStar=".5" fullStar="1" />
                                    <Star halfStar="1.5" fullStar="2" />
                                    <Star halfStar="2.5" fullStar="3" />
                                    <Star halfStar="3.5" fullStar="4" />
                                    <Star halfStar="4.5" fullStar="5" />
                                </div>
                                <img className="testimonial-item__image" src={val.image} alt={val.name} />
                            </footer>
                        </div>
                        )}
                    </div>
                    {SectionLinkData[0].map((val,ind) => {
                        return <SectionLink
                            key={ind}
                            extraClass={val.extraClass}
                            pageTarget={val.pageTarget}
                            linkText={val.linkText}
                        />
                    })}
                </div>
        </section>
    );
};

export class TaxlyWork extends Component {
    state = {
        class: "",
    };
    toggleTaxly = () => {
        this.setState({ class: this.state.class === "" ? "how-content_open" : "" });
    };
    render() {
        return(
            <section className="b-section b-section_bg-gray how-section">
                <div className="l-container b-section__container">
                    <span className="b-section__note">{SingalData.TaxlyWorkNote}</span>
                    <h2 className="b-section__title">{SingalData.TaxlyWorkTitle}</h2>
                    <span className="b-section__desc how-section__desc">{SingalData.TaxlyWorkDesc}</span>
                    <div className="how-section__grid">
                        {TaxlyWorkData.map((val,ind) => 
                            <div key={ind} className="how-item how-section__item">
                                <img className="how-item__icon-number" src={val.imageSmall} alt="Taxly" />
                                <img className="how-item__icon" src={val.imageBig} alt="Taxly" />
                                <span className="how-item__name">{val.name}</span>
                            </div>
                        )}
                    </div>
                    <div className={`how-content how-section__content ${this.state.class}`} onClick={this.toggleTaxly}>
                        <span className="how-content__title">{SingalData.TaxlyWorkBtnText}</span>
                        <div className="how-content__text">
                            <p>{SingalData.TaxlyWorkBtnDesc}</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

const BenefitTaxly = () => {
    return(
        <section className="b-section for-whom-section">
            <div className="l-container b-section__container">
                <h3 className="b-section__title">{SingalData.BenefitTaxlyTitle}</h3>
                <span className="b-section__desc for-whom-section__desc">{SingalData.BenefitTaxlyDesc}</span>
                <div className="for-whom-section__grid">
                    <img className="for-whom-section__image" src={images.fWI2x} alt="Taxly" />
                    { BenefitTaxlyData.map((val, ind) => 
                        <span key={ind} className="for-whom-section__item">{val}</span>
                    )}
                </div>
                {SectionLinkData[1].map((val,ind) => {
                    return <SectionLink
                        key={ind}
                        extraClass={val.extraClass}
                        pageTarget={val.pageTarget}
                        linkText={val.linkText}
                    />
                })}
            </div>
        </section>
    );
};



const Price = (props) => {
    return(
        <div className="price-item price-section__item">
            <img src={props.image} className="price-item__icon" alt="Taxly" />
            <span className="price-item__note">{props.note}</span>
            <span className="price-item__value">{props.numberValue}
                {(props.currency === '') ? null : <span className="price-item__value-currency"> {props.currency}</span> }
            </span>
            <div className="price-item__text">
                <p>{props.priceText[0]}</p>
                <p>{props.priceText[1]}</p>
                <p>{props.priceText[2]}</p>
                <pre id="tw-target-text" className="tw-data-text tw-text-large XcVN5d tw-ta" dir="ltr" data-placeholder="Translation"></pre>
            </div>
            <a target="_blank" className="btn hero__cta price-item__button" href="https://app.taxly.ch/GettingStarted">Get Started</a>
        </div>
    );
};

const PaymentOptions = () => {
    return(
        <footer className="price-section__details">
            <svg className="price-section__details-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 20">
                <g fill="none" fillRule="evenodd">
                    <path fill="#EEF1F6" d="M-466-1017H914V136H-466z"></path>
                    <path fill="#7C8AA2" d="M30 0H2C1.458 0 .99.165.594.495.198.825 0 1.215 0 1.667v16.666c0 .452.198.842.594 1.172.396.33.864.495 1.406.495h28c.542 0 1.01-.165 1.406-.495.396-.33.594-.72.594-1.172V1.667c0-.452-.198-.842-.594-1.172A2.127 2.127 0 0030 0zM2 4h28v3H2V4z"></path>
                </g>
            </svg>
            <span className="price-section__details-value">{SingalData.PaymentOptions}</span>
        </footer>
    );
};

const SmartPricing = () => {
    return(
        <section className="b-section b-section_bg-gray site-section price-section">
            <div className="l-container b-section__container">
                <h2 className="site-section__heading b-section__title">{SingalData.smartPricingTitle}</h2>
                <div className="site-section__subheading b-section__desc price-section__desc">
                    <p>{SingalData.smartPricingDesc}</p>
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
                <PaymentOptions />
            </div>
        </section>
    );
}

const YourBusiness = () => {
    return(
        <section className="b-section site-section price-section">
            <div className="l-container b-section__container">
                <span className="b-section__note b-section__note_icon-line">{SingalData.yourBusinessNote}</span>
                <h3 className="site-section__heading b-section__title">{SingalData.yourBusinessTitle}</h3>
                <div className="site-section__subheading b-section__desc price-section__desc">
                    <p>{SingalData.yourBusinessDesc}</p>
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
                <PaymentOptions />
            </div>
        </section>
    );
};

const SafeHand = () => {
    return(
        <section className="site-section taxly-grey-bg b-section good-to-know-section">
            <div className="l-container b-section__container">
                <h4 className="site-section__heading b-section__title good-to-know-section__title">{SingalData.safeHandTitle}</h4>
                <div className="site-section__subheading b-section__desc good-to-know-section__desc">
                    <p>{SingalData.safeHandDesc}</p>
                </div>
                <div className="b-icons-module good-to-know-section__grid">
                    {SafeHandData.map((val, ind) => 
                        <div key={ind} className="b-icons-module__item">
                            <img className="b-icons-module__item-icon" src={val.image} alt={val.alt} />
                            <p className="b-icons-module__item-name">{val.sname}</p>
                            <p className="b-icons-module__item-text">{val.stext}</p>
                        </div>
                    )}
                </div>
                {SectionLinkData[2].map((val,ind) => {
                    return <SectionLink
                        key={ind}
                        extraClass={val.extraClass}
                        pageTarget={val.pageTarget}
                        linkText={val.linkText}
                    />
                })}
            </div>
        </section>
    );
};

const AppSection = () => {
    return(
        <section className="b-section mobile-app-section">
            <div className="l-container b-section__container">
                <span className="b-section__title mobile-app-section__title"><b>{SingalData.appTitle}</b></span>
                <span className="b-section__desc mobile-app-section__desc">{SingalData.appDesc}</span>
                <a href="#" className="btn btn-large mobile-app-section__link js-show-dark-modal">{SingalData.appBtnText}</a>
            </div>
        </section>
    );
};
export default TaxlyWork;
export {Testimonial, LogoSection, SectionLink, Price, PaymentOptions, SmartPricing, YourBusiness, SafeHand, AppSection, BenefitTaxly};