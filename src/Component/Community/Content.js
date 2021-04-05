import React , {useState} from "react";
import images from "../../Utils/ImageHelper";
import MobileMenu from "../../Layout/MobileMenu";
import Navbar from "../../Layout/Navbar";
import Modal from "react-modal";
import {TopBottomLeftRight} from "../Modal/Modal";
import {SingleData, CommunityStorySectionData} from '../Community/Data';

const CommunityHeroSection = () => {
    return(
        <div className="header-wrap hero__inner__white">
            <MobileMenu/>
            <div className="taxly-hero">
                <div className="taxly-hero-city-bg"></div>
                <Navbar/>
                <div className="taxly-hero-bg-green"></div>
                <div className="hero site-section padding-bottom-none l-container in-viewport">
                    <div className="taxly-hero-bg"></div>
                    <div className="taxly-hero-bird-back" style={{ backgroundImage: `url(${images.aboutBackOneBg})` }}></div>
                    <div className="taxly-hero-curve-green">
                        <img src={images.taxlyHeroCurveDarkBg} alt="taxly-hero-curve-dark" />
                    </div>
                    <div className="taxly-hero-bird-front" style={{ backgroundImage: `url(${images.aboutFrontOneBg})` }}></div>
                    <div className="taxly-hero-bird"></div>
                    <div className="hero__wrapper">
                        <div className="l-container l-container--content">
                            <h1 className="page-heading">{SingleData.communityHeroHeading}</h1>
                            <p>{SingleData.communityHeroSubHeading}</p>
                            <a href="https://app.taxly.ch/GettingStarted" target="_blank" className="btn btn-large hero__cta">{SingleData.communityHeroBtnText}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
};

const CommunityStorySection = () => {
    const [isOpen, setIsOpen] = useState(false);
    function toggleModal() {
        setIsOpen(!isOpen);
    }
    return(
        <>
        <section className="site-section no-title">
            <div className="l-container">
                <div className="community-people-module people-module popup-community">
                    <div className="columns-3 taxly-boxes taxly-boxes-square">
                        {CommunityStorySectionData.map((val,ind) =>
                        <div key={ind} className="columns-3-item taxly-box taxly-box-white">
                            <div className="box-top-left box-image"></div>
                            <div className="box-top-right box-image"></div>
                            <div className="box-bottom-left box-image"></div>
                            <div className="box-bottom-right box-image"></div>
                            <div className="box-content">
                                <div className="person-item">
                                    <h3>{val.personName}</h3>
                                    <a href="#" onClick={toggleModal}>{val.popupText}</a>
                                    <Modal key={ind} className="modal community-modal is-visible" isOpen={isOpen} onRequestClose={toggleModal}>
                                        <div class="modal__overlay"></div>
                                        <div class="modal__content taxly-box">
                                            <TopBottomLeftRight/>
                                            <div class="box-content">
                                                <div class="modal__close" onClick={toggleModal}>Close</div>
                                                <div class="modal__body">
                                                    <div class="content list-items-style">
                                                        <div class="community-popup-left">
                                                            <h2>{val.cplName}</h2>
                                                            <p>{val.cplCityAndLanguage}</p>
                                                        </div>
                                                        <div className="community-popup-right">
                                                            <h2>{val.cplH2One}</h2>
                                                            <p>{val.cplpOne}</p>
                                                            <hr />
                                                            <h2>{val.cplH2Two}</h2>
                                                            <p>{val.cplpTwo}</p>
                                                            <hr />
                                                            <h2>{val.cplH2Three}</h2>
                                                            <p>{val.cplpThree}</p><hr />
                                                            <h2>{val.cplH2Four}</h2>
                                                            <p>{val.cplpFour}</p><hr />
                                                            <h2>{val.cplH2Five}</h2>
                                                            <p>{val.cplpFive}</p><hr />
                                                            <h2>{val.cplH2Six}</h2>
                                                            <p>{val.cplpSix}</p>
                                                            {val.cplpSix === true ? 
                                                                <img draggable="false" role="img" className="emoji" alt="🙂" src="https://s.w.org/images/core/emoji/13.0.1/svg/1f642.svg" alt="" /> 
                                                            : false }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export {CommunityHeroSection, CommunityStorySection};