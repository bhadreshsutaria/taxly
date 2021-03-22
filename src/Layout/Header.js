import React from "react";
import images from "../Utils/ImageHelper";
import '../Assets/Css/style.css';
import '../Assets/Css/style_v2.css';
export default function Header() {

    return (
    <div className="home">
        <div class="taxly-hero">
            <a target="_blank" rel="noopener noreferrer" href="https://www.helvetia.com/corporate/web/en/home/media-and-topics/overview/media-releases/2021/20210209.html" class="partnership-icon taxly-hero__partnership">
                <span class="partnership-icon__title">In partnership with</span>
                <img src={images.taxlypartnership} alt="http://Taxly"/>
            </a>
            <div id="mysticky-wrap">
                <div id="mysticky-nav" class="up">
                    <div id="menu-container" class="">
                        <div class="main-nav">
                            <ul id="menu-main-nav" class="main-nav__list">
                                <li class="menu-item"><a target="_blank" rel="noopener" href="/faq/">FAQ</a></li>
                                <li class="menu-item"><a target="_blank" rel="noopener" href="/how-it-works/">How it works</a></li>
                                <li class="menu-item"><a target="_blank" rel="noopener" href="/insights/">Insights</a></li>
                                <li class="menu-item"><a target="_blank" rel="noopener" href="/app/">App</a></li>
                                </ul>
                            <ul class="main-nav__right">
                                <li class="menu-item"><a href="#" class="taxly-icon taxly-icon-language">EN</a></li>
                                <li class="menu-item"><a href="https://app.taxly.ch/Identity/Account/Login?culture=en" target="_blank" class="taxly-icon taxly-icon-login">Log in</a></li>
                            </ul>
                        </div>
                        <div class="taxly-logo">
                            <a href="https://taxly.ch">
                                <img class="taxly-logo__icon" src={images.sitelogonavy} alt="Taxly" />
                                <img class="taxly-logo__icon taxly-logo__icon_fixed" src={images.logowhite} alt="Taxly" />
                            </a>
                        </div>
                        <a href="https://app.taxly.ch/GettingStarted" target="_blank" class="btn btn-large hero__cta">Get Started</a>
                    </div>
                </div>
            </div>
            <div class="hero site-section padding-bottom-none l-container in-viewport">
                <div class="hero__wrapper">
                    <div class="l-container l-container--content">
                        <h1 class="page-heading">Complicated is Outdated. Swiss Tax Returns Made Simple.</h1>
                        <p>Create your Swiss tax return in less than 10 minutes</p>
                        <a href="https://app.taxly.ch/GettingStarted?culture=en" target="_blank" class="btn btn-large hero__cta">Get Started</a>
                        <div class="video-link clear-inline-block"><a href="#" class="taxly-icon taxly-icon-play js-show-video-modal">Watch the video</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}
