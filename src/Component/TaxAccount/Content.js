import React , {useState} from "react";
import Slider from "react-slick";
import images from "../../Utils/ImageHelper";
import MobileMenu from "../../Layout/MobileMenu";
import Navbar from "../../Layout/Navbar";
import Modal from "react-modal";
import {DarkModal, TopBottomLeftRight} from "../Modal/Modal";
import {SingleData, TaxSoftwareSliderData, taxHowItWorkData, TaxOurPriceData} from '../TaxAccount/Data';


const TaxAccountantModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    function toggleModal() {
        setIsOpen(!isOpen);
    }
    return(
        <>
        <button className="btn btn-large hero__cta" onClick={toggleModal}>{SingleData.taxHeroBtnText}</button>
        <Modal className="modal invite-modal dark-modal taxly-dark is-visible" isOpen={isOpen} onRequestClose={toggleModal}>
            <div className="modal__overlay"></div>
            <div className="modal__content taxly-box">
                <TopBottomLeftRight />
                <div className="box-content">
                    <div className="modal__close" onClick={toggleModal}>Close</div>
                    <DarkModal />
                </div>
            </div>
        </Modal>
        </>
    );
};

const TaxAccountantsHeroSection = () => {
    return(
        <div className="header-wrap hero__inner__white">
            <MobileMenu/>
            <div className="taxly-hero taxly-hero_bg" style={{ backgroundImage: `url(${images.TaxlyAccountantsBg})` }}>
                <Navbar/>
                <div className="hero site-section padding-bottom-none l-container in-viewport">
                    <div className="hero__wrapper">
                        <div className="l-container l-container--content">
                            <h1 className="page-heading">{SingleData.taxHeroHeading}</h1>
                            <p>{SingleData.taxHeroSubHeading}</p>
                            <TaxAccountantModal/>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
};

const TaxSoftwareSlider = () =>{
    var settings = {
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerPadding: '30px',
        arrows: false,
        variableWidth: true,
        initialSlide: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    centerPadding: '200px'
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    centerPadding: '90px',
                }
            }
        ]
    };
    return(
        <>
        <section className="site-section">
            <div className="slick-slide-container">
                <h2 className="site-section__heading">{SingleData.taxSoftHeading}</h2>
                <div className="site-section__subheading">
                    <p>{SingleData.taxSoftSubHeading}</p>
                </div>
                <div className="site-section__module slider-container first-module">
                    <Slider {...settings} className="slick-dotted">
                        {TaxSoftwareSliderData.map((val, ind) =>
                            <div key={ind} className=""><img src={val.txImage} alt={val.txAlt} /></div>
                        )}
                    </Slider>
                </div>
            </div>
        </section>
        </>
    );
};

const TaxHowItWork = () =>{
    return(
        <section className="site-section">
			<div className="l-container">
				<h2 className="site-section__heading">{SingleData.taxHIWHeading}</h2>
				<div className="site-section__subheading">
					<p>{SingleData.taxHIWSubHeading}</p>
				</div>
                <div className="howitworks-module">
                    {taxHowItWorkData.map((val, ind) =>
                        <div key={ind} className={`columns-2 text-left taxly-image-text ${val.extraClass === '' ? '':  val.extraClass}`}>
                            <div className="columns-2-item">
                                <img src={val.imageUrl} alt={val.imageAlt} />
                            </div>
                            <div className="columns-2-item">
                                <h3>{val.title}</h3>
                                <p>{val.description}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

const TaxOurPrice = () => {
    return(
        <section class="site-section no-subtitle">
			<div class="l-container">
				<h2 class="site-section__heading">Our prices</h2>
				<div class="prices-module">
					<div class="columns-3 taxly-boxes taxly-boxes-square">
                        {TaxOurPriceData.map((val,ind)=>
                            <div key={ind} class="columns-3-item taxly-box taxly-box-white">
                                <div class="box-top-left box-image"></div>
                                <div class="box-top-right box-image"></div>
                                <div class="box-bottom-left box-image"></div>
                                <div class="box-bottom-right box-image"></div>
                                <div class="box-content">
                                    <ul>
                                        <li>{val.boxListOne}</li>
                                        <li>{val.boxListTwo}</li>
                                    </ul>
                                    <p>{val.boxNumberValue} <span>{val.boxNumberAlpha}</span></p>
                                    <TaxAccountantModal/>
                                </div>
                            </div>
                        )}
					</div>
				</div>
			</div>
		</section>
    );
};

const TaxCurious = () =>{
    return(
        <section className="site-section open-door">
			<div className="open-door-bg">
                <img src={images.apiopenDoor} alt="open-door" />
            </div>
			<div className="l-container">
				<h2 className="site-section__heading">{SingleData.taxCuriousHeading}</h2>
				<div className="site-section__subheading">
					<p>{SingleData.taxCuriousSubHeading}</p>
				</div>
                <TaxAccountantModal/>
			</div>
		</section>
    );
};

export {TaxAccountantsHeroSection, TaxSoftwareSlider, TaxHowItWork, TaxOurPrice, TaxCurious};