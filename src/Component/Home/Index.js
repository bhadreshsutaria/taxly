import React from "react";
import images from "../../Utils/ImageHelper";
import Homeheader from "../../Layout/Homeheader";
import Footer from "../../Layout/Footer";
import {Star} from "../Home/Content";
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
                        <div className="testimonial-item testimonials-section__item">
                            <span className="testimonial-item__title">Intuitive workflow and great customer support!</span>
                            <div className="testimonial-item__text">
                                <p>"Intuitive workflow and great customer support! Totally recommend it. Never thought my tax declaration would be such a pleasant experience! Merci Taxly!"</p>
                            </div>
                            <span className="testimonial-item__name">Andy Grayshon</span>
                            <footer className="testimonial-item__footer">
                                <div className="rating-mdule testimonial-item__rating stars" data-stars="5">
                                    <Star dataRatingHalf=".5" dataRating="1"/>
                                    <svg className="star star_half rating" data-rating="1.5" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22">
                                        <path fill="#05F29B" fillRule="evenodd" d="M22.95 8.285a.823.823 0 00-.293-.466 1.659 1.659 0 00-.537-.27l-6.664-.93L12.429.563C12.282.188 11.973 0 11.5 0c-.472 0-.781.188-.927.564L7.546 6.52.98 7.55a.77.77 0 00-.55.22 1.83 1.83 0 00-.378.515c-.065.213-.07.417-.012.613a.764.764 0 00.305.441l4.81 4.707-1.148 6.692a.943.943 0 00.049.6c.081.188.203.34.366.454.146.098.321.163.525.196.203.032.41 0 .622-.098l5.932-3.138 5.932 3.138h.537c.098 0 .2-.02.305-.062.106-.04.208-.094.306-.159a.904.904 0 00.366-.429.943.943 0 00.049-.6l-1.148-6.692 4.81-4.707a.887.887 0 00.304-.441.745.745 0 00-.012-.515zm-11.676 8.261a.92.92 0 01.476-.147c.155 0 .306.049.452.147l4.59 2.427-.928-5.148c0-.147.024-.298.073-.453.049-.156.122-.315.22-.478l3.76-3.555-5.103-.735a.713.713 0 01-.464-.184 5.548 5.548 0 01-.366-.33L11.69 3.382l-.415 13.163z"></path>
                                    </svg>
                                    <svg className="star rating" data-rating="2" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22">
                                        <path fill="#05F29B" fillRule="evenodd" d="M22.95 8.285a.823.823 0 00-.293-.466 1.659 1.659 0 00-.537-.27l-6.664-.93L12.429.563C12.282.188 11.973 0 11.5 0c-.472 0-.781.188-.927.564L7.546 6.52.98 7.55a.77.77 0 00-.55.22 1.83 1.83 0 00-.378.515c-.065.213-.07.417-.012.613a.764.764 0 00.305.441l4.81 4.707-1.148 6.692a.943.943 0 00.049.6c.081.188.203.34.366.454.146.098.321.163.525.196.203.032.41 0 .622-.098l5.932-3.138 5.932 3.138h.537c.098 0 .2-.02.305-.062.106-.04.208-.094.306-.159a.904.904 0 00.366-.429.943.943 0 00.049-.6l-1.148-6.692 4.81-4.707a.887.887 0 00.304-.441.745.745 0 00-.012-.515z"></path>
                                    </svg>
                                    <svg className="star star_half rating" data-rating="2.5" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22">
                                        <path fill="#05F29B" fillRule="evenodd" d="M22.95 8.285a.823.823 0 00-.293-.466 1.659 1.659 0 00-.537-.27l-6.664-.93L12.429.563C12.282.188 11.973 0 11.5 0c-.472 0-.781.188-.927.564L7.546 6.52.98 7.55a.77.77 0 00-.55.22 1.83 1.83 0 00-.378.515c-.065.213-.07.417-.012.613a.764.764 0 00.305.441l4.81 4.707-1.148 6.692a.943.943 0 00.049.6c.081.188.203.34.366.454.146.098.321.163.525.196.203.032.41 0 .622-.098l5.932-3.138 5.932 3.138h.537c.098 0 .2-.02.305-.062.106-.04.208-.094.306-.159a.904.904 0 00.366-.429.943.943 0 00.049-.6l-1.148-6.692 4.81-4.707a.887.887 0 00.304-.441.745.745 0 00-.012-.515zm-11.676 8.261a.92.92 0 01.476-.147c.155 0 .306.049.452.147l4.59 2.427-.928-5.148c0-.147.024-.298.073-.453.049-.156.122-.315.22-.478l3.76-3.555-5.103-.735a.713.713 0 01-.464-.184 5.548 5.548 0 01-.366-.33L11.69 3.382l-.415 13.163z"></path>
                                    </svg>
                                    <svg className="star rating" data-rating="3" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22">
                                        <path fill="#05F29B" fillRule="evenodd" d="M22.95 8.285a.823.823 0 00-.293-.466 1.659 1.659 0 00-.537-.27l-6.664-.93L12.429.563C12.282.188 11.973 0 11.5 0c-.472 0-.781.188-.927.564L7.546 6.52.98 7.55a.77.77 0 00-.55.22 1.83 1.83 0 00-.378.515c-.065.213-.07.417-.012.613a.764.764 0 00.305.441l4.81 4.707-1.148 6.692a.943.943 0 00.049.6c.081.188.203.34.366.454.146.098.321.163.525.196.203.032.41 0 .622-.098l5.932-3.138 5.932 3.138h.537c.098 0 .2-.02.305-.062.106-.04.208-.094.306-.159a.904.904 0 00.366-.429.943.943 0 00.049-.6l-1.148-6.692 4.81-4.707a.887.887 0 00.304-.441.745.745 0 00-.012-.515z"></path>
                                    </svg>
                                    <svg className="star star_half rating" data-rating="3.5" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22">
                                        <path fill="#05F29B" fillRule="evenodd" d="M22.95 8.285a.823.823 0 00-.293-.466 1.659 1.659 0 00-.537-.27l-6.664-.93L12.429.563C12.282.188 11.973 0 11.5 0c-.472 0-.781.188-.927.564L7.546 6.52.98 7.55a.77.77 0 00-.55.22 1.83 1.83 0 00-.378.515c-.065.213-.07.417-.012.613a.764.764 0 00.305.441l4.81 4.707-1.148 6.692a.943.943 0 00.049.6c.081.188.203.34.366.454.146.098.321.163.525.196.203.032.41 0 .622-.098l5.932-3.138 5.932 3.138h.537c.098 0 .2-.02.305-.062.106-.04.208-.094.306-.159a.904.904 0 00.366-.429.943.943 0 00.049-.6l-1.148-6.692 4.81-4.707a.887.887 0 00.304-.441.745.745 0 00-.012-.515zm-11.676 8.261a.92.92 0 01.476-.147c.155 0 .306.049.452.147l4.59 2.427-.928-5.148c0-.147.024-.298.073-.453.049-.156.122-.315.22-.478l3.76-3.555-5.103-.735a.713.713 0 01-.464-.184 5.548 5.548 0 01-.366-.33L11.69 3.382l-.415 13.163z"></path>
                                    </svg>
                                    <svg className="star rating" data-rating="4" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22">
                                        <path fill="#05F29B" fillRule="evenodd" d="M22.95 8.285a.823.823 0 00-.293-.466 1.659 1.659 0 00-.537-.27l-6.664-.93L12.429.563C12.282.188 11.973 0 11.5 0c-.472 0-.781.188-.927.564L7.546 6.52.98 7.55a.77.77 0 00-.55.22 1.83 1.83 0 00-.378.515c-.065.213-.07.417-.012.613a.764.764 0 00.305.441l4.81 4.707-1.148 6.692a.943.943 0 00.049.6c.081.188.203.34.366.454.146.098.321.163.525.196.203.032.41 0 .622-.098l5.932-3.138 5.932 3.138h.537c.098 0 .2-.02.305-.062.106-.04.208-.094.306-.159a.904.904 0 00.366-.429.943.943 0 00.049-.6l-1.148-6.692 4.81-4.707a.887.887 0 00.304-.441.745.745 0 00-.012-.515z"></path>
                                    </svg>
                                    <svg className="star star_half rating" data-rating="4.5" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22">
                                        <path fill="#05F29B" fillRule="evenodd" d="M22.95 8.285a.823.823 0 00-.293-.466 1.659 1.659 0 00-.537-.27l-6.664-.93L12.429.563C12.282.188 11.973 0 11.5 0c-.472 0-.781.188-.927.564L7.546 6.52.98 7.55a.77.77 0 00-.55.22 1.83 1.83 0 00-.378.515c-.065.213-.07.417-.012.613a.764.764 0 00.305.441l4.81 4.707-1.148 6.692a.943.943 0 00.049.6c.081.188.203.34.366.454.146.098.321.163.525.196.203.032.41 0 .622-.098l5.932-3.138 5.932 3.138h.537c.098 0 .2-.02.305-.062.106-.04.208-.094.306-.159a.904.904 0 00.366-.429.943.943 0 00.049-.6l-1.148-6.692 4.81-4.707a.887.887 0 00.304-.441.745.745 0 00-.012-.515zm-11.676 8.261a.92.92 0 01.476-.147c.155 0 .306.049.452.147l4.59 2.427-.928-5.148c0-.147.024-.298.073-.453.049-.156.122-.315.22-.478l3.76-3.555-5.103-.735a.713.713 0 01-.464-.184 5.548 5.548 0 01-.366-.33L11.69 3.382l-.415 13.163z"></path>
                                    </svg>
                                    <svg className="star rating" data-rating="5" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22">
                                        <path fill="#05F29B" fillRule="evenodd" d="M22.95 8.285a.823.823 0 00-.293-.466 1.659 1.659 0 00-.537-.27l-6.664-.93L12.429.563C12.282.188 11.973 0 11.5 0c-.472 0-.781.188-.927.564L7.546 6.52.98 7.55a.77.77 0 00-.55.22 1.83 1.83 0 00-.378.515c-.065.213-.07.417-.012.613a.764.764 0 00.305.441l4.81 4.707-1.148 6.692a.943.943 0 00.049.6c.081.188.203.34.366.454.146.098.321.163.525.196.203.032.41 0 .622-.098l5.932-3.138 5.932 3.138h.537c.098 0 .2-.02.305-.062.106-.04.208-.094.306-.159a.904.904 0 00.366-.429.943.943 0 00.049-.6l-1.148-6.692 4.81-4.707a.887.887 0 00.304-.441.745.745 0 00-.012-.515z"></path>
                                    </svg>
                                </div>
                                <img className="testimonial-item__image" src={images.andyGrayshonUser} alt="Andy Grayshon" />
                            </footer>
                        </div>
                        <div className="testimonial-item testimonials-section__item">
                            <span className="testimonial-item__title">Taxes made simple!</span>
                            <div className="testimonial-item__text">
                                <p>"So easy to navigate and quick &amp; the team is very reactive for any question. Highly recommend!"</p>
                            </div>
                            <span className="testimonial-item__name">Anna Blomkvist</span>
                            <footer className="testimonial-item__footer">
                                <div className="rating-mdule testimonial-item__rating stars" data-stars="5">
                                    <svg className="star star_half rating" data-rating=".5" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22">
                                        <path fill="#05F29B" fillRule="evenodd" d="M22.95 8.285a.823.823 0 00-.293-.466 1.659 1.659 0 00-.537-.27l-6.664-.93L12.429.563C12.282.188 11.973 0 11.5 0c-.472 0-.781.188-.927.564L7.546 6.52.98 7.55a.77.77 0 00-.55.22 1.83 1.83 0 00-.378.515c-.065.213-.07.417-.012.613a.764.764 0 00.305.441l4.81 4.707-1.148 6.692a.943.943 0 00.049.6c.081.188.203.34.366.454.146.098.321.163.525.196.203.032.41 0 .622-.098l5.932-3.138 5.932 3.138h.537c.098 0 .2-.02.305-.062.106-.04.208-.094.306-.159a.904.904 0 00.366-.429.943.943 0 00.049-.6l-1.148-6.692 4.81-4.707a.887.887 0 00.304-.441.745.745 0 00-.012-.515zm-11.676 8.261a.92.92 0 01.476-.147c.155 0 .306.049.452.147l4.59 2.427-.928-5.148c0-.147.024-.298.073-.453.049-.156.122-.315.22-.478l3.76-3.555-5.103-.735a.713.713 0 01-.464-.184 5.548 5.548 0 01-.366-.33L11.69 3.382l-.415 13.163z"></path>
                                    </svg>
                                    <svg className="star rating" data-rating="1" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22">
                                        <path fill="#05F29B" fillRule="evenodd" d="M22.95 8.285a.823.823 0 00-.293-.466 1.659 1.659 0 00-.537-.27l-6.664-.93L12.429.563C12.282.188 11.973 0 11.5 0c-.472 0-.781.188-.927.564L7.546 6.52.98 7.55a.77.77 0 00-.55.22 1.83 1.83 0 00-.378.515c-.065.213-.07.417-.012.613a.764.764 0 00.305.441l4.81 4.707-1.148 6.692a.943.943 0 00.049.6c.081.188.203.34.366.454.146.098.321.163.525.196.203.032.41 0 .622-.098l5.932-3.138 5.932 3.138h.537c.098 0 .2-.02.305-.062.106-.04.208-.094.306-.159a.904.904 0 00.366-.429.943.943 0 00.049-.6l-1.148-6.692 4.81-4.707a.887.887 0 00.304-.441.745.745 0 00-.012-.515z"></path>
                                    </svg>
                                    <svg className="star star_half rating" data-rating="1.5" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22">
                                        <path fill="#05F29B" fillRule="evenodd" d="M22.95 8.285a.823.823 0 00-.293-.466 1.659 1.659 0 00-.537-.27l-6.664-.93L12.429.563C12.282.188 11.973 0 11.5 0c-.472 0-.781.188-.927.564L7.546 6.52.98 7.55a.77.77 0 00-.55.22 1.83 1.83 0 00-.378.515c-.065.213-.07.417-.012.613a.764.764 0 00.305.441l4.81 4.707-1.148 6.692a.943.943 0 00.049.6c.081.188.203.34.366.454.146.098.321.163.525.196.203.032.41 0 .622-.098l5.932-3.138 5.932 3.138h.537c.098 0 .2-.02.305-.062.106-.04.208-.094.306-.159a.904.904 0 00.366-.429.943.943 0 00.049-.6l-1.148-6.692 4.81-4.707a.887.887 0 00.304-.441.745.745 0 00-.012-.515zm-11.676 8.261a.92.92 0 01.476-.147c.155 0 .306.049.452.147l4.59 2.427-.928-5.148c0-.147.024-.298.073-.453.049-.156.122-.315.22-.478l3.76-3.555-5.103-.735a.713.713 0 01-.464-.184 5.548 5.548 0 01-.366-.33L11.69 3.382l-.415 13.163z"></path>
                                    </svg>
                                    <svg className="star rating" data-rating="2" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22">
                                        <path fill="#05F29B" fillRule="evenodd" d="M22.95 8.285a.823.823 0 00-.293-.466 1.659 1.659 0 00-.537-.27l-6.664-.93L12.429.563C12.282.188 11.973 0 11.5 0c-.472 0-.781.188-.927.564L7.546 6.52.98 7.55a.77.77 0 00-.55.22 1.83 1.83 0 00-.378.515c-.065.213-.07.417-.012.613a.764.764 0 00.305.441l4.81 4.707-1.148 6.692a.943.943 0 00.049.6c.081.188.203.34.366.454.146.098.321.163.525.196.203.032.41 0 .622-.098l5.932-3.138 5.932 3.138h.537c.098 0 .2-.02.305-.062.106-.04.208-.094.306-.159a.904.904 0 00.366-.429.943.943 0 00.049-.6l-1.148-6.692 4.81-4.707a.887.887 0 00.304-.441.745.745 0 00-.012-.515z"></path>
                                    </svg>
                                    <svg className="star star_half rating" data-rating="2.5" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22">
                                        <path fill="#05F29B" fillRule="evenodd" d="M22.95 8.285a.823.823 0 00-.293-.466 1.659 1.659 0 00-.537-.27l-6.664-.93L12.429.563C12.282.188 11.973 0 11.5 0c-.472 0-.781.188-.927.564L7.546 6.52.98 7.55a.77.77 0 00-.55.22 1.83 1.83 0 00-.378.515c-.065.213-.07.417-.012.613a.764.764 0 00.305.441l4.81 4.707-1.148 6.692a.943.943 0 00.049.6c.081.188.203.34.366.454.146.098.321.163.525.196.203.032.41 0 .622-.098l5.932-3.138 5.932 3.138h.537c.098 0 .2-.02.305-.062.106-.04.208-.094.306-.159a.904.904 0 00.366-.429.943.943 0 00.049-.6l-1.148-6.692 4.81-4.707a.887.887 0 00.304-.441.745.745 0 00-.012-.515zm-11.676 8.261a.92.92 0 01.476-.147c.155 0 .306.049.452.147l4.59 2.427-.928-5.148c0-.147.024-.298.073-.453.049-.156.122-.315.22-.478l3.76-3.555-5.103-.735a.713.713 0 01-.464-.184 5.548 5.548 0 01-.366-.33L11.69 3.382l-.415 13.163z"></path>
                                    </svg>
                                    <svg className="star rating" data-rating="3" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22">
                                        <path fill="#05F29B" fillRule="evenodd" d="M22.95 8.285a.823.823 0 00-.293-.466 1.659 1.659 0 00-.537-.27l-6.664-.93L12.429.563C12.282.188 11.973 0 11.5 0c-.472 0-.781.188-.927.564L7.546 6.52.98 7.55a.77.77 0 00-.55.22 1.83 1.83 0 00-.378.515c-.065.213-.07.417-.012.613a.764.764 0 00.305.441l4.81 4.707-1.148 6.692a.943.943 0 00.049.6c.081.188.203.34.366.454.146.098.321.163.525.196.203.032.41 0 .622-.098l5.932-3.138 5.932 3.138h.537c.098 0 .2-.02.305-.062.106-.04.208-.094.306-.159a.904.904 0 00.366-.429.943.943 0 00.049-.6l-1.148-6.692 4.81-4.707a.887.887 0 00.304-.441.745.745 0 00-.012-.515z"></path>
                                    </svg>
                                    <svg className="star star_half rating" data-rating="3.5" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22">
                                        <path fill="#05F29B" fillRule="evenodd" d="M22.95 8.285a.823.823 0 00-.293-.466 1.659 1.659 0 00-.537-.27l-6.664-.93L12.429.563C12.282.188 11.973 0 11.5 0c-.472 0-.781.188-.927.564L7.546 6.52.98 7.55a.77.77 0 00-.55.22 1.83 1.83 0 00-.378.515c-.065.213-.07.417-.012.613a.764.764 0 00.305.441l4.81 4.707-1.148 6.692a.943.943 0 00.049.6c.081.188.203.34.366.454.146.098.321.163.525.196.203.032.41 0 .622-.098l5.932-3.138 5.932 3.138h.537c.098 0 .2-.02.305-.062.106-.04.208-.094.306-.159a.904.904 0 00.366-.429.943.943 0 00.049-.6l-1.148-6.692 4.81-4.707a.887.887 0 00.304-.441.745.745 0 00-.012-.515zm-11.676 8.261a.92.92 0 01.476-.147c.155 0 .306.049.452.147l4.59 2.427-.928-5.148c0-.147.024-.298.073-.453.049-.156.122-.315.22-.478l3.76-3.555-5.103-.735a.713.713 0 01-.464-.184 5.548 5.548 0 01-.366-.33L11.69 3.382l-.415 13.163z"></path>
                                    </svg>
                                    <svg className="star rating" data-rating="4" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22">
                                        <path fill="#05F29B" fillRule="evenodd" d="M22.95 8.285a.823.823 0 00-.293-.466 1.659 1.659 0 00-.537-.27l-6.664-.93L12.429.563C12.282.188 11.973 0 11.5 0c-.472 0-.781.188-.927.564L7.546 6.52.98 7.55a.77.77 0 00-.55.22 1.83 1.83 0 00-.378.515c-.065.213-.07.417-.012.613a.764.764 0 00.305.441l4.81 4.707-1.148 6.692a.943.943 0 00.049.6c.081.188.203.34.366.454.146.098.321.163.525.196.203.032.41 0 .622-.098l5.932-3.138 5.932 3.138h.537c.098 0 .2-.02.305-.062.106-.04.208-.094.306-.159a.904.904 0 00.366-.429.943.943 0 00.049-.6l-1.148-6.692 4.81-4.707a.887.887 0 00.304-.441.745.745 0 00-.012-.515z"></path>
                                    </svg>
                                    <svg className="star star_half rating" data-rating="4.5" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22">
                                        <path fill="#05F29B" fillRule="evenodd" d="M22.95 8.285a.823.823 0 00-.293-.466 1.659 1.659 0 00-.537-.27l-6.664-.93L12.429.563C12.282.188 11.973 0 11.5 0c-.472 0-.781.188-.927.564L7.546 6.52.98 7.55a.77.77 0 00-.55.22 1.83 1.83 0 00-.378.515c-.065.213-.07.417-.012.613a.764.764 0 00.305.441l4.81 4.707-1.148 6.692a.943.943 0 00.049.6c.081.188.203.34.366.454.146.098.321.163.525.196.203.032.41 0 .622-.098l5.932-3.138 5.932 3.138h.537c.098 0 .2-.02.305-.062.106-.04.208-.094.306-.159a.904.904 0 00.366-.429.943.943 0 00.049-.6l-1.148-6.692 4.81-4.707a.887.887 0 00.304-.441.745.745 0 00-.012-.515zm-11.676 8.261a.92.92 0 01.476-.147c.155 0 .306.049.452.147l4.59 2.427-.928-5.148c0-.147.024-.298.073-.453.049-.156.122-.315.22-.478l3.76-3.555-5.103-.735a.713.713 0 01-.464-.184 5.548 5.548 0 01-.366-.33L11.69 3.382l-.415 13.163z"></path>
                                    </svg>
                                    <svg className="star rating" data-rating="5" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22">
                                        <path fill="#05F29B" fillRule="evenodd" d="M22.95 8.285a.823.823 0 00-.293-.466 1.659 1.659 0 00-.537-.27l-6.664-.93L12.429.563C12.282.188 11.973 0 11.5 0c-.472 0-.781.188-.927.564L7.546 6.52.98 7.55a.77.77 0 00-.55.22 1.83 1.83 0 00-.378.515c-.065.213-.07.417-.012.613a.764.764 0 00.305.441l4.81 4.707-1.148 6.692a.943.943 0 00.049.6c.081.188.203.34.366.454.146.098.321.163.525.196.203.032.41 0 .622-.098l5.932-3.138 5.932 3.138h.537c.098 0 .2-.02.305-.062.106-.04.208-.094.306-.159a.904.904 0 00.366-.429.943.943 0 00.049-.6l-1.148-6.692 4.81-4.707a.887.887 0 00.304-.441.745.745 0 00-.012-.515z"></path>
                                    </svg>
                                </div>
                                <img className="testimonial-item__image" src={images.annaBlomkvistUser} alt="Anna Blomkvist" />
                            </footer>
                        </div>
                        <div className="testimonial-item testimonials-section__item">
                            <span className="testimonial-item__title">Very friendly service!</span>
                            <div className="testimonial-item__text">
                                <p>"Very friendly service that allows the filing of personal income taxes transparently. The value is in the last mile before the taxpayers and Taxly got it perfectly."</p>
                            </div>
                            <span className="testimonial-item__name">Helena Boada</span>
                            <footer className="testimonial-item__footer">
                                <div className="rating-mdule testimonial-item__rating stars" data-stars="5">
                                    <svg className="star star_half rating" data-rating=".5" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22">
                                        <path fill="#05F29B" fillRule="evenodd" d="M22.95 8.285a.823.823 0 00-.293-.466 1.659 1.659 0 00-.537-.27l-6.664-.93L12.429.563C12.282.188 11.973 0 11.5 0c-.472 0-.781.188-.927.564L7.546 6.52.98 7.55a.77.77 0 00-.55.22 1.83 1.83 0 00-.378.515c-.065.213-.07.417-.012.613a.764.764 0 00.305.441l4.81 4.707-1.148 6.692a.943.943 0 00.049.6c.081.188.203.34.366.454.146.098.321.163.525.196.203.032.41 0 .622-.098l5.932-3.138 5.932 3.138h.537c.098 0 .2-.02.305-.062.106-.04.208-.094.306-.159a.904.904 0 00.366-.429.943.943 0 00.049-.6l-1.148-6.692 4.81-4.707a.887.887 0 00.304-.441.745.745 0 00-.012-.515zm-11.676 8.261a.92.92 0 01.476-.147c.155 0 .306.049.452.147l4.59 2.427-.928-5.148c0-.147.024-.298.073-.453.049-.156.122-.315.22-.478l3.76-3.555-5.103-.735a.713.713 0 01-.464-.184 5.548 5.548 0 01-.366-.33L11.69 3.382l-.415 13.163z"></path>
                                    </svg>
                                    <svg className="star rating" data-rating="1" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22">
                                        <path fill="#05F29B" fillRule="evenodd" d="M22.95 8.285a.823.823 0 00-.293-.466 1.659 1.659 0 00-.537-.27l-6.664-.93L12.429.563C12.282.188 11.973 0 11.5 0c-.472 0-.781.188-.927.564L7.546 6.52.98 7.55a.77.77 0 00-.55.22 1.83 1.83 0 00-.378.515c-.065.213-.07.417-.012.613a.764.764 0 00.305.441l4.81 4.707-1.148 6.692a.943.943 0 00.049.6c.081.188.203.34.366.454.146.098.321.163.525.196.203.032.41 0 .622-.098l5.932-3.138 5.932 3.138h.537c.098 0 .2-.02.305-.062.106-.04.208-.094.306-.159a.904.904 0 00.366-.429.943.943 0 00.049-.6l-1.148-6.692 4.81-4.707a.887.887 0 00.304-.441.745.745 0 00-.012-.515z"></path>
                                    </svg>
                                    <svg className="star star_half rating" data-rating="1.5" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22">
                                        <path fill="#05F29B" fillRule="evenodd" d="M22.95 8.285a.823.823 0 00-.293-.466 1.659 1.659 0 00-.537-.27l-6.664-.93L12.429.563C12.282.188 11.973 0 11.5 0c-.472 0-.781.188-.927.564L7.546 6.52.98 7.55a.77.77 0 00-.55.22 1.83 1.83 0 00-.378.515c-.065.213-.07.417-.012.613a.764.764 0 00.305.441l4.81 4.707-1.148 6.692a.943.943 0 00.049.6c.081.188.203.34.366.454.146.098.321.163.525.196.203.032.41 0 .622-.098l5.932-3.138 5.932 3.138h.537c.098 0 .2-.02.305-.062.106-.04.208-.094.306-.159a.904.904 0 00.366-.429.943.943 0 00.049-.6l-1.148-6.692 4.81-4.707a.887.887 0 00.304-.441.745.745 0 00-.012-.515zm-11.676 8.261a.92.92 0 01.476-.147c.155 0 .306.049.452.147l4.59 2.427-.928-5.148c0-.147.024-.298.073-.453.049-.156.122-.315.22-.478l3.76-3.555-5.103-.735a.713.713 0 01-.464-.184 5.548 5.548 0 01-.366-.33L11.69 3.382l-.415 13.163z"></path>
                                    </svg>
                                    <svg className="star rating" data-rating="2" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22">
                                        <path fill="#05F29B" fillRule="evenodd" d="M22.95 8.285a.823.823 0 00-.293-.466 1.659 1.659 0 00-.537-.27l-6.664-.93L12.429.563C12.282.188 11.973 0 11.5 0c-.472 0-.781.188-.927.564L7.546 6.52.98 7.55a.77.77 0 00-.55.22 1.83 1.83 0 00-.378.515c-.065.213-.07.417-.012.613a.764.764 0 00.305.441l4.81 4.707-1.148 6.692a.943.943 0 00.049.6c.081.188.203.34.366.454.146.098.321.163.525.196.203.032.41 0 .622-.098l5.932-3.138 5.932 3.138h.537c.098 0 .2-.02.305-.062.106-.04.208-.094.306-.159a.904.904 0 00.366-.429.943.943 0 00.049-.6l-1.148-6.692 4.81-4.707a.887.887 0 00.304-.441.745.745 0 00-.012-.515z"></path>
                                    </svg>
                                    <svg className="star star_half rating" data-rating="2.5" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22">
                                        <path fill="#05F29B" fillRule="evenodd" d="M22.95 8.285a.823.823 0 00-.293-.466 1.659 1.659 0 00-.537-.27l-6.664-.93L12.429.563C12.282.188 11.973 0 11.5 0c-.472 0-.781.188-.927.564L7.546 6.52.98 7.55a.77.77 0 00-.55.22 1.83 1.83 0 00-.378.515c-.065.213-.07.417-.012.613a.764.764 0 00.305.441l4.81 4.707-1.148 6.692a.943.943 0 00.049.6c.081.188.203.34.366.454.146.098.321.163.525.196.203.032.41 0 .622-.098l5.932-3.138 5.932 3.138h.537c.098 0 .2-.02.305-.062.106-.04.208-.094.306-.159a.904.904 0 00.366-.429.943.943 0 00.049-.6l-1.148-6.692 4.81-4.707a.887.887 0 00.304-.441.745.745 0 00-.012-.515zm-11.676 8.261a.92.92 0 01.476-.147c.155 0 .306.049.452.147l4.59 2.427-.928-5.148c0-.147.024-.298.073-.453.049-.156.122-.315.22-.478l3.76-3.555-5.103-.735a.713.713 0 01-.464-.184 5.548 5.548 0 01-.366-.33L11.69 3.382l-.415 13.163z"></path>
                                    </svg>
                                    <svg className="star rating" data-rating="3" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22">
                                        <path fill="#05F29B" fillRule="evenodd" d="M22.95 8.285a.823.823 0 00-.293-.466 1.659 1.659 0 00-.537-.27l-6.664-.93L12.429.563C12.282.188 11.973 0 11.5 0c-.472 0-.781.188-.927.564L7.546 6.52.98 7.55a.77.77 0 00-.55.22 1.83 1.83 0 00-.378.515c-.065.213-.07.417-.012.613a.764.764 0 00.305.441l4.81 4.707-1.148 6.692a.943.943 0 00.049.6c.081.188.203.34.366.454.146.098.321.163.525.196.203.032.41 0 .622-.098l5.932-3.138 5.932 3.138h.537c.098 0 .2-.02.305-.062.106-.04.208-.094.306-.159a.904.904 0 00.366-.429.943.943 0 00.049-.6l-1.148-6.692 4.81-4.707a.887.887 0 00.304-.441.745.745 0 00-.012-.515z"></path>
                                    </svg>
                                    <svg className="star star_half rating" data-rating="3.5" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22">
                                        <path fill="#05F29B" fillRule="evenodd" d="M22.95 8.285a.823.823 0 00-.293-.466 1.659 1.659 0 00-.537-.27l-6.664-.93L12.429.563C12.282.188 11.973 0 11.5 0c-.472 0-.781.188-.927.564L7.546 6.52.98 7.55a.77.77 0 00-.55.22 1.83 1.83 0 00-.378.515c-.065.213-.07.417-.012.613a.764.764 0 00.305.441l4.81 4.707-1.148 6.692a.943.943 0 00.049.6c.081.188.203.34.366.454.146.098.321.163.525.196.203.032.41 0 .622-.098l5.932-3.138 5.932 3.138h.537c.098 0 .2-.02.305-.062.106-.04.208-.094.306-.159a.904.904 0 00.366-.429.943.943 0 00.049-.6l-1.148-6.692 4.81-4.707a.887.887 0 00.304-.441.745.745 0 00-.012-.515zm-11.676 8.261a.92.92 0 01.476-.147c.155 0 .306.049.452.147l4.59 2.427-.928-5.148c0-.147.024-.298.073-.453.049-.156.122-.315.22-.478l3.76-3.555-5.103-.735a.713.713 0 01-.464-.184 5.548 5.548 0 01-.366-.33L11.69 3.382l-.415 13.163z"></path>
                                    </svg>
                                    <svg className="star rating" data-rating="4" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22">
                                        <path fill="#05F29B" fillRule="evenodd" d="M22.95 8.285a.823.823 0 00-.293-.466 1.659 1.659 0 00-.537-.27l-6.664-.93L12.429.563C12.282.188 11.973 0 11.5 0c-.472 0-.781.188-.927.564L7.546 6.52.98 7.55a.77.77 0 00-.55.22 1.83 1.83 0 00-.378.515c-.065.213-.07.417-.012.613a.764.764 0 00.305.441l4.81 4.707-1.148 6.692a.943.943 0 00.049.6c.081.188.203.34.366.454.146.098.321.163.525.196.203.032.41 0 .622-.098l5.932-3.138 5.932 3.138h.537c.098 0 .2-.02.305-.062.106-.04.208-.094.306-.159a.904.904 0 00.366-.429.943.943 0 00.049-.6l-1.148-6.692 4.81-4.707a.887.887 0 00.304-.441.745.745 0 00-.012-.515z"></path>
                                    </svg>
                                    <svg className="star star_half rating" data-rating="4.5" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22">
                                        <path fill="#05F29B" fillRule="evenodd" d="M22.95 8.285a.823.823 0 00-.293-.466 1.659 1.659 0 00-.537-.27l-6.664-.93L12.429.563C12.282.188 11.973 0 11.5 0c-.472 0-.781.188-.927.564L7.546 6.52.98 7.55a.77.77 0 00-.55.22 1.83 1.83 0 00-.378.515c-.065.213-.07.417-.012.613a.764.764 0 00.305.441l4.81 4.707-1.148 6.692a.943.943 0 00.049.6c.081.188.203.34.366.454.146.098.321.163.525.196.203.032.41 0 .622-.098l5.932-3.138 5.932 3.138h.537c.098 0 .2-.02.305-.062.106-.04.208-.094.306-.159a.904.904 0 00.366-.429.943.943 0 00.049-.6l-1.148-6.692 4.81-4.707a.887.887 0 00.304-.441.745.745 0 00-.012-.515zm-11.676 8.261a.92.92 0 01.476-.147c.155 0 .306.049.452.147l4.59 2.427-.928-5.148c0-.147.024-.298.073-.453.049-.156.122-.315.22-.478l3.76-3.555-5.103-.735a.713.713 0 01-.464-.184 5.548 5.548 0 01-.366-.33L11.69 3.382l-.415 13.163z"></path>
                                    </svg>
                                    <svg className="star rating" data-rating="5" height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22">
                                        <path fill="#05F29B" fillRule="evenodd" d="M22.95 8.285a.823.823 0 00-.293-.466 1.659 1.659 0 00-.537-.27l-6.664-.93L12.429.563C12.282.188 11.973 0 11.5 0c-.472 0-.781.188-.927.564L7.546 6.52.98 7.55a.77.77 0 00-.55.22 1.83 1.83 0 00-.378.515c-.065.213-.07.417-.012.613a.764.764 0 00.305.441l4.81 4.707-1.148 6.692a.943.943 0 00.049.6c.081.188.203.34.366.454.146.098.321.163.525.196.203.032.41 0 .622-.098l5.932-3.138 5.932 3.138h.537c.098 0 .2-.02.305-.062.106-.04.208-.094.306-.159a.904.904 0 00.366-.429.943.943 0 00.049-.6l-1.148-6.692 4.81-4.707a.887.887 0 00.304-.441.745.745 0 00-.012-.515z"></path>
                                    </svg>
                                </div>
                                <img className="testimonial-item__image" src={images.helenaBoadaUser} alt="Helena Boada" />
                            </footer>
                        </div>
                    </div>
                    <div className="b-section__link good-to-know-section__link">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Taxly+AG/@47.3672655,8.5329657,17z/data=!4m7!3m6!1s0x47900a01fce3e665:0xdc6d8cbf4e9556f3!8m2!3d47.3672655!4d8.5351544!9m1!1b1?hl=en-VN" className="b-section__link-item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 14">
                                <path fill="#505D68" fillRule="nonzero" d="M11.174 13.984a.992.992 0 00.692-.28L17.8 7.768l.077-.066A.934.934 0 0018.17 7a.934.934 0 00-.293-.703l-.077-.065L11.866.297a.992.992 0 00-.692-.281.971.971 0 00-.691.293.928.928 0 00-.305.691c0 .266.094.5.281.703l4.29 4.29H1.177c-.281.015-.52.116-.715.304A.934.934 0 00.17 7c0 .281.098.516.293.703.196.188.434.29.715.305h13.57l-4.289 4.289a1.006 1.006 0 00-.281.703c0 .266.102.496.305.691a.971.971 0 00.691.293z"></path>
                            </svg>
                            <span className="b-section__link-value">Read All Reviews</span>
                        </a>
                    </div>
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
                        <div className="how-item how-section__item">
                            <img className="how-item__icon-number" src={images.hsnOneIcon} alt="Taxly" />
                            <img className="how-item__icon" src={images.hsOneImage} alt="Taxly" />
                            <span className="how-item__name">Answer a few simple questions</span>
                        </div>
                        <div className="how-item how-section__item">
                            <img className="how-item__icon-number" src={images.hsnTwoIcon} alt="Taxly" />
                            <img className="how-item__icon" src={images.hsTwoImage} alt="Taxly" />
                            <span className="how-item__name">Let Roger make your calculations</span>
                        </div>
                        <div className="how-item how-section__item">
                            <img className="how-item__icon-number" src={images.hsnThreeIcon} alt="Taxly" />
                            <img className="how-item__icon" src={images.hsThreeImage} alt="Taxly" />
                            <span className="how-item__name">Double check your tax return</span>
                        </div>
                        <div className="how-item how-section__item">
                            <img className="how-item__icon-number" src={images.hsnFourIcon} alt="Taxly" />
                            <img className="how-item__icon" src={images.hsFourImage} alt="Taxly" />
                            <span className="how-item__name">And you're done. Time to enjoy</span>
                        </div>
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
                    <div className="b-section__link for-whom-section__link">
                        <a target="_blank" rel="noopener noreferrer" href="/faq/" className="b-section__link-item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 14">
                                <path fill="#505D68" fillRule="nonzero" d="M11.174 13.984a.992.992 0 00.692-.28L17.8 7.768l.077-.066A.934.934 0 0018.17 7a.934.934 0 00-.293-.703l-.077-.065L11.866.297a.992.992 0 00-.692-.281.971.971 0 00-.691.293.928.928 0 00-.305.691c0 .266.094.5.281.703l4.29 4.29H1.177c-.281.015-.52.116-.715.304A.934.934 0 00.17 7c0 .281.098.516.293.703.196.188.434.29.715.305h13.57l-4.289 4.289a1.006 1.006 0 00-.281.703c0 .266.102.496.305.691a.971.971 0 00.691.293z"></path>
                            </svg>
                            <span className="b-section__link-value">Questions? (FAQ)</span>
                        </a>
                    </div>
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
                        <div className="price-item price-section__item">
                            <img src={images.priceIconOne} className="price-item__icon" alt="Taxly" />
                            <span className="price-item__note">Under 25 Years</span>
                            <span className="price-item__value">25 <span className="price-item__value-currency">CHF</span></span>
                            <div className="price-item__text">
                                <p>Completed Swiss Tax Return</p>
                                <p>Optimised by Roger (AI)</p>
                                <p>Shipping to the Tax Office</p>
                                <pre id="tw-target-text" className="tw-data-text tw-text-large XcVN5d tw-ta" dir="ltr" data-placeholder="Translation"></pre>
                            </div>
                            <a href="https://app.taxly.ch/GettingStarted" target="_blank" className="btn hero__cta price-item__button">Get Started </a>
                        </div>
                        <div className="price-item price-section__item">
                            <img src={images.priceIconTwo} className="price-item__icon" alt="Taxly" />
                            <span className="price-item__note">Family Package</span>
                            <span className="price-item__value">49 <span className="price-item__value-currency">CHF</span></span>
                            <div className="price-item__text">
                                <p>Completed Swiss Tax Return (For you and your family)</p>
                                <p>Optimised by Roger (AI)</p>
                                <p>Shipping to the Tax Office</p>
                            </div>
                            <a href="https://app.taxly.ch/GettingStarted" target="_blank" className="btn hero__cta price-item__button">Get Started </a>
                        </div>
                        <div className="price-item price-section__item">
                            <img src={images.priceIconThree} className="price-item__icon" alt="Taxly" />
                            <span className="price-item__note">Unemployed Due To COVID-19</span>
                            <span className="price-item__value">Free</span>
                            <div className="price-item__text">
                                <p>Free Swiss Tax Return (For you and your family)</p>
                                <p>Optimised by Roger (AI)</p>
                                <p>Free Shipping to the Tax Office</p>
                            </div>
                            <a href="https://app.taxly.ch/GettingStarted" target="_blank" className="btn hero__cta price-item__button">Get Started </a>
                        </div>
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
                        <div className="price-item price-section__item">
                            <img src={images.priceIconFour} className="price-item__icon" alt="Taxly" />
                            <span className="price-item__note">Startups &amp; Small Enterprises</span>
                            <span className="price-item__value">500 <span className="price-item__value-currency">CHF</span></span>
                            <div className="price-item__text">
                                <p>In-House support</p>
                                <p>Completed tax return</p>
                                <p>Tax optimization by Roger (AI) &amp; Certified Tax Advisors (Human)</p>
                            </div>
                            <a href="https://app.taxly.ch/GettingStarted" target="_blank" className="btn hero__cta price-item__button">Get Started </a>
                        </div>
                        <div className="price-item price-section__item">
                            <img src={images.priceIconFive} className="price-item__icon" alt="Taxly" />
                            <span className="price-item__note">Hotels, Restaurants &amp; Shops</span>
                            <span className="price-item__value">450 <span className="price-item__value-currency">CHF</span></span>
                            <div className="price-item__text">
                                <p>In-House support</p>
                                <p>Completed tax return</p>
                                <p>Tax optimization by Roger (AI) &amp; Certified Tax Advisors (Human)</p>
                            </div>
                            <a href="https://app.taxly.ch/GettingStarted" target="_blank" className="btn hero__cta price-item__button">Get Started </a>
                        </div>
                        <div className="price-item price-section__item">
                            <img src={images.priceIconSix} className="price-item__icon" alt="Taxly" />
                            <span className="price-item__note">Freelancers</span>
                            <span className="price-item__value">350 <span className="price-item__value-currency">CHF</span></span>
                            <div className="price-item__text">
                                <p>In-House support</p>
                                <p>Completed tax return</p>
                                <p>Tax optimization by Roger (AI) &amp; Certified Tax Advisors (Human)</p>
                            </div>
                            <a href="https://app.taxly.ch/GettingStarted" target="_blank" className="btn hero__cta price-item__button">Get Started </a>
                        </div>
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
                        <div className="b-icons-module__item">
                            <img className="b-icons-module__item-icon" src={images.iconTaxExperts2x} alt="tax experts" />
                            <p className="b-icons-module__item-name">Swiss Tax Experts</p>
                            <p className="b-icons-module__item-text">Developed by certified Swiss tax experts.</p>
                        </div>
                        <div className="b-icons-module__item">
                            <img className="b-icons-module__item-icon" src={images.iconEncryption2x} alt="encryption" />
                            <p className="b-icons-module__item-name">High Data Security</p>
                            <p className="b-icons-module__item-text">We take data security as our highest priority.</p>
                        </div>
                        <div className="b-icons-module__item">
                            <img className="b-icons-module__item-icon" src={images.iconSecurity2x} alt="security" />
                            <p className="b-icons-module__item-name">TLS 1.2 Data Encryption</p>
                            <p className="b-icons-module__item-text">Ensures that no hacking of data is possible.</p>
                        </div>
                        <div className="b-icons-module__item">
                            <img className="b-icons-module__item-icon" src={images.iconSustainablyCompany2x} alt="sustainably company" />
                            <p className="b-icons-module__item-name">Sustainable Company</p>
                            <p className="b-icons-module__item-text">With Taxly profit &amp; impact are in balance.</p>
                        </div>
                    </div>
                    <div className="b-section__link good-to-know-section__link">
                        <a target="_blank" rel="noopener noreferrer" href="/faq/" className="b-section__link-item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 14">
                                <path fill="#505D68" fillRule="nonzero" d="M11.174 13.984a.992.992 0 00.692-.28L17.8 7.768l.077-.066A.934.934 0 0018.17 7a.934.934 0 00-.293-.703l-.077-.065L11.866.297a.992.992 0 00-.692-.281.971.971 0 00-.691.293.928.928 0 00-.305.691c0 .266.094.5.281.703l4.29 4.29H1.177c-.281.015-.52.116-.715.304A.934.934 0 00.17 7c0 .281.098.516.293.703.196.188.434.29.715.305h13.57l-4.289 4.289a1.006 1.006 0 00-.281.703c0 .266.102.496.305.691a.971.971 0 00.691.293z"></path>
                            </svg>
                            <span className="b-section__link-value">Questions? (FAQ)</span>
                        </a>
                    </div>
                </div>
            </section>
            {/* BEGIN You're In Safe Hands section */}

            {/* BEGIN App Section */}
            <section className="b-section mobile-app-section">
                <div className="l-container b-section__container">
                    <span className="b-section__title mobile-app-section__title"><b>Our mobile app for iOS and Android will be available soon</b></span>
                    <span className="b-section__desc mobile-app-section__desc">Interested? We can keep you up to date.</span>
                    <a href="#" className="btn btn-large mobile-app-section__link js-show-dark-modal">Sign up to our newsletter</a>
                </div>
            </section>
            {/* End App Section */}
            <Footer/>
            <div className="modal video-modal">
                <div className="modal__overlay"></div>
                <div className="modal__content taxly-box">
                    <div className="box-top-left box-image"></div>
                    <div className="box-top-right box-image"></div>
                    <div className="box-bottom-left box-image"></div>
                    <div className="box-bottom-right box-image"></div>
                    <div className="box-content">
                        <div className="modal__close js-hide-modal">Close</div>
                        <div className="modal__body">
                            <p><iframe width="560" height="315" src="https://www.youtube.com/embed/LVeccgzap4s"></iframe></p>
                        </div>
                    </div>
                </div>
            </div>
            
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