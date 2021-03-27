import React from "react";

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

const Testimonial = (props) => {
    return(
        <div className="testimonial-item testimonials-section__item">
            <span className="testimonial-item__title">{props.title}</span>
            <div className="testimonial-item__text">
                <p>{props.description}</p>
            </div>
            <span className="testimonial-item__name">{props.name}</span>
            <footer className="testimonial-item__footer">
                <div className="rating-mdule testimonial-item__rating stars" data-stars="5">
                    <Star halfStar=".5" fullStar="1" />
                    <Star halfStar="1.5" fullStar="2" />
                    <Star halfStar="2.5" fullStar="3" />
                    <Star halfStar="3.5" fullStar="4" />
                    <Star halfStar="4.5" fullStar="5" />
                </div>
                <img className="testimonial-item__image" src={props.image} alt={props.name} />
            </footer>
        </div>
    );
};

const SectionLink = (props) => {
    return(
        <div className={`b-section__link ${props.extraClass}`}>
            <a target={props.pageTarget} rel="noopener noreferrer" href={props.pageLink} className="b-section__link-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 14">
                    <path fill="#505D68" fillRule="nonzero" d="M11.174 13.984a.992.992 0 00.692-.28L17.8 7.768l.077-.066A.934.934 0 0018.17 7a.934.934 0 00-.293-.703l-.077-.065L11.866.297a.992.992 0 00-.692-.281.971.971 0 00-.691.293.928.928 0 00-.305.691c0 .266.094.5.281.703l4.29 4.29H1.177c-.281.015-.52.116-.715.304A.934.934 0 00.17 7c0 .281.098.516.293.703.196.188.434.29.715.305h13.57l-4.289 4.289a1.006 1.006 0 00-.281.703c0 .266.102.496.305.691a.971.971 0 00.691.293z"></path>
                </svg>
                <span className="b-section__link-value">{props.linkText}</span>
            </a>
        </div>
    );
};

const TaxlyWork = (props) => {
    return(
        <div className="how-item how-section__item">
            <img className="how-item__icon-number" src={props.imageSmall} alt="Taxly" />
            <img className="how-item__icon" src={props.imageBig} alt="Taxly" />
            <span className="how-item__name">{props.name}</span>
        </div>
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

const SafeHand = (props) => {
    return(
        <div className="b-icons-module__item">
            <img className="b-icons-module__item-icon" src={props.image} alt={props.alt} />
            <p className="b-icons-module__item-name">{props.sname}</p>
            <p className="b-icons-module__item-text">{props.stext}</p>
        </div>
    );
};

const AppSection = (props) => {
    return(
        <section className="b-section mobile-app-section">
            <div className="l-container b-section__container">
                <span className="b-section__title mobile-app-section__title"><b>{props.atitle}</b></span>
                <span className="b-section__desc mobile-app-section__desc">{props.adesc}</span>
                <a href="#" className="btn btn-large mobile-app-section__link js-show-dark-modal">{props.btnText}</a>
            </div>
        </section>
    );
};

export {Testimonial, SectionLink, TaxlyWork, Price, SafeHand, AppSection};