import React from "react";
import images from "../Utils/ImageHelper";
import MobileMenu from "../Layout/MobileMenu";
import Navbar from "../Layout/Navbar";
import {VideoModal} from "../Component/Modal/Modal";
import {SingalData} from "../Component/Home/Data";
import '../Assets/Css/style.css';
import '../Assets/Css/style_v2.css';

export default function Homeheader() {
    return (
    <div className="header-wrap">
        <MobileMenu/>
        <div className="taxly-hero">
            <a target="_blank" rel="noopener noreferrer" href="https://www.helvetia.com/corporate/web/en/home/media-and-topics/overview/media-releases/2021/20210209.html" className="partnership-icon taxly-hero__partnership">
                <span className="partnership-icon__title">{SingalData.partnershipTitle}</span>
                <img src={images.taxlypartnership} alt="Taxly"/>
            </a>
            <Navbar/>
            <div className="hero site-section padding-bottom-none l-container in-viewport">
                <div className="hero__wrapper">
                    <div className="l-container l-container--content">
                        <h1 className="page-heading">{SingalData.heroHeading}</h1>
                        <p>{SingalData.heroDesc}</p>
                        <a href="https://app.taxly.ch/GettingStarted?culture=en" target="_blank" className="btn btn-large hero__cta">{SingalData.heroBtnName}</a>
                        <VideoModal/>
                        {/* <div className="video-link clear-inline-block"><a href="#" className="taxly-icon taxly-icon-play js-show-video-modal">{SingalData.heroVidName}</a></div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}
