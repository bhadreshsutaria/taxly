import React, {Component} from "react";
import images from "../../Utils/ImageHelper";
import MobileMenu from "../../Layout/MobileMenu";
import Navbar from "../../Layout/Navbar";
import { Modal} from 'react-bootstrap';
import {TopBottomLeftRight} from "../Modal/Modal";
import { useTranslation } from "react-i18next";
const TaxDictionaryHeroSection = () => {
    const { t } = useTranslation();
    return(
        <div className="header-wrap hero__inner__white">
            <MobileMenu/>
            <div className="taxly-hero">
                <div className="taxly-hero-city-bg"></div>
                <Navbar/>
                <div className="taxly-hero-bg-green"></div>
                <div className="hero site-section padding-bottom-none l-container in-viewport">
                    <div className="taxly-hero-bg"></div>
                    <div className="taxly-hero-bird-back" style={{ backgroundImage: `url(${images.dictionaryBackBg})` }}></div>
                    <div className="taxly-hero-curve-green">
                        <img src={images.taxlyHeroCurveDarkBg} alt="taxly-hero-curve-dark" />
                    </div>
                    <div className="taxly-hero-bird-front" style={{ backgroundImage: `url(${images.dictionaryFrontBg})` }}></div>
                    <div className="taxly-hero-bird"></div>
                    <div className="hero__wrapper">
                        <div className="l-container l-container--content">
                            <h1 className="page-heading">{t('taxdictionary.SingleData.tdHeroHeading')}</h1>
                            <p>{t('taxdictionary.SingleData.tdHeroSubHeading')}</p>
                            <a href="https://app.taxly.ch/GettingStarted" target="_blank" className="btn btn-large hero__cta">{t('taxdictionary.SingleData.tdHeroBtnText')}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export class TaxDictionarySectionModal extends Component {
    constructor(props, context) {
        super(props, context);
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
        return(
            <>
            <a href="#" onClick={() => this.handleShow(this.props.id)}>{this.props.popupText}</a>
            <Modal className="modal community-modal is-visible" show={this.state.show === this.props.id} onHide={this.handleClose}>
                <div className="modal__overlay"></div>
                <div className="modal__content taxly-box">
                    <TopBottomLeftRight/>
                    <div className="box-content">
                    <Modal.Header className="modal__close" closeButton closeLabel="close"></Modal.Header>
                        <div className="modal__body">
                            <h2 class="title">{this.props.modalTitle}</h2>
                            <div class="description list-items-style">
                                <p>{this.props.modalDesc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            </>
        );
    }
}

export class TaxDictionarySection extends Component {
    render() {
        return(
            <section className="site-section">
                <div className="l-container">
                    <div className="tax-dictionary popup-title-description">
                        <div className="columns-3 taxly-boxes taxly-boxes-square">
                            <div className="columns-3-item taxly-box taxly-box-white">
                                <div className="box-top-left box-image"></div>
                                <div className="box-top-right box-image"></div>
                                <div className="box-bottom-left box-image"></div>
                                <div className="box-bottom-right box-image"></div>
                                <div className="box-content list-items-style">
                                    <h3 className="box-heading">A</h3>
                                    <ul>
                                        <li>
                                            <a href="#">Arrival (in Switzerland)</a>
                                            <div className="popup-content">
                                                <p>In case of arrival in Switzerland, only the income you received starting at the moment you moved to Switzerland will be taxable.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="columns-3-item taxly-box taxly-box-white">
                                <div className="box-top-left box-image"></div>
                                <div className="box-top-right box-image"></div>
                                <div className="box-bottom-left box-image"></div>
                                <div className="box-bottom-right box-image"></div>
                                <div className="box-content list-items-style">
                                    <h3 className="box-heading">B</h3>
                                    <ul>
                                        <li><a href="#">Benefit in kind</a>
                                            <div className="popup-content">
                                                <p>Non-cash benefits received, often from employment such as a business vehicle.</p>
                                            </div>
                                        </li>
                                        <li><a href="#">Business vehicle</a>
                                            <div className="popup-content">
                                                <p>A business vehicle is a vehicle owned by an employer, which is available to the employee to drive from home to work, but also potentially privately.</p>
                                                <p>If an employee has a business vehicle at his disposal, part of that benefit in kind will be added to its wage statement and therefore be taxable.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};
export default TaxDictionarySection;
export{TaxDictionaryHeroSection};