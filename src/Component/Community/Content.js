import React from "react";
import { Modal} from 'react-bootstrap';
import images from "../../Utils/ImageHelper";
import MobileMenu from "../../Layout/MobileMenu";
import Navbar from "../../Layout/Navbar";
import {TopBottomLeftRight} from "../Modal/Modal";
import { useTranslation } from 'react-i18next';
const CommunityHeroSection = () => {
    const { t } = useTranslation();
    return(
        <div className="header-wrap hero__inner__white">
            <MobileMenu/>
            <div className="taxly-hero height-98">
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
                            <h1 className="page-heading">{t('community.SingleData.communityHeroHeading')}</h1>
                            <p>{t('community.SingleData.communityHeroSubHeading')}</p>
                            <a href="https://app.taxly.ch/GettingStarted" target="_blank" rel="noreferrer" className="btn btn-large hero__cta">{t('community.SingleData.communityHeroBtnText')}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
};
const CommunityStoryModalBody = (props) =>{
    return(
        <>
        <div className="modal__body">
            <div className="content list-items-style">
                <div className="community-popup-left">
                    <h2>{props.cplName}</h2>
                    <p>{props.cplCityAndLanguage}</p>
                </div>
                <div className="community-popup-right">
                    <h2>{props.cplH2One}</h2>
                    <p>{props.cplpOne}</p>
                    <hr />
                    <h2>{props.cplH2Two}</h2>
                    <p>{props.cplpTwo}</p>
                    <hr />
                    <h2>{props.cplH2Three}</h2>
                    <p>{props.cplpThree}</p><hr />
                    <h2>{props.cplH2Four}</h2>
                    <p>{props.cplpFour}</p><hr />
                    <h2>{props.cplH2Five}</h2>
                    <p>{props.cplpFive}</p><hr />
                    <h2>{props.cplH2Six}</h2>
                    <p>{props.cplpSix} {props.cplpEmoji === true ? <img draggable="false" className="emoji" alt="🙂" src="https://s.w.org/images/core/emoji/13.0.1/svg/1f642.svg" /> : '' }</p>                                                 
                </div>
            </div>
        </div>
        </>
    );
};

class CommunityStorySectionModal extends React.Component {
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: null
        };
    }
    handleClose() {
        this.setState({show: null});
    }
    handleShow(id) {
        this.setState({show: id});
    }
    render() {
        const val = [];
        return (
        <>
            <a href="#" onClick={() => this.handleShow(val.id)}>{this.props.popupText}</a>
            <Modal className="modal community-modal is-visible" show={this.state.show === val.id} onHide={this.handleClose}>
                <div className="modal__overlay"></div>
                <div className="modal__content taxly-box">
                    <TopBottomLeftRight/>
                    <div className="box-content">
                    <Modal.Header closeButton closeLabel="close"></Modal.Header>
                        <CommunityStoryModalBody
                            cplName= {this.props.cplName}
                            cplCityAndLanguage={this.props.cplCityAndLanguage}
                            cplH2One={this.props.cplH2One}
                            cplpOne={this.props.cplpOne}
                            cplH2Two={this.props.cplH2Two}
                            cplpTwo={this.props.cplpTwo}
                            cplH2Three={this.props.cplH2Three}
                            cplpThree={this.props.cplpThree}
                            cplH2Four={this.props.cplH2Four}
                            cplpFour={this.props.cplpFour}
                            cplH2Five={this.props.cplH2Five}
                            cplpFive={this.props.cplpFive}
                            cplH2Six={this.props.cplH2Six}
                            cplpSix={this.props.cplpSix}
                            cplpEmoji={this.props.cplpEmoji}
                        />
                    </div>
                </div>
            </Modal> 
        </>                   
        );
    }
};

const CommunityStorySection = () => {
    const { t } = useTranslation();
    let CommunityStorySectionData =  t('community.CommunityStorySectionData.data', { returnObjects: true });
    return (
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
                                        <CommunityStorySectionModal
                                            id={val.id}
                                            cplName={val.cplName}
                                            cplCityAndLanguage={val.cplCityAndLanguage}
                                            cplH2One={val.cplH2One}
                                            cplpOne={val.cplpOne}
                                            cplH2Two={val.cplH2Two}
                                            cplpTwo={val.cplpTwo}
                                            cplH2Three={val.cplH2Three}
                                            cplpThree={val.cplpThree}
                                            cplH2Four={val.cplH2Four}
                                            cplpFour={val.cplpFour}
                                            cplH2Five={val.cplH2Five}
                                            cplpFive={val.cplpFive}
                                            cplH2Six={val.cplH2Six}
                                            cplpSix={val.cplpSix}
                                            cplpEmoji={val.cplpEmoji}
                                            popupText={val.popupText}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
export {CommunityStorySection , CommunityHeroSection};