import React, {Component} from "react";
import images from "../../Utils/ImageHelper";
import MobileMenu from "../../Layout/MobileMenu";
import Navbar from "../../Layout/Navbar";
import { Modal} from 'react-bootstrap';
import {TopBottomLeftRight} from "../Modal/Modal";
import { useTranslation} from "react-i18next";

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
                            <a href="https://app.taxly.ch/GettingStarted" target="_blank" rel="noreferrer" className="btn btn-large hero__cta">{t('taxdictionary.SingleData.tdHeroBtnText')}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
};

const List = (props) =>{
    const numbers = props.numbers;
    const numRow = numbers.length
    const listItems = numbers.map((number, index) =>
        <>
        <li key={index}>{number}</li>
        </>
    );
    return (
        <>
        {numRow > 1 ? <ul>{numRow === '' ? '' : listItems}</ul> : ''}
        </>
    );
}

const DescriptionList = (props) =>{
    const numbers = props.numbers;
    const listItems = numbers.map((number, index) =>
        <>
        <p key={index}>{number}</p>
        </>
    );
    return (
        <>{listItems}</>
    );
}
const DescriptionList1 = (props) =>{
    const numbers = props.numbers;
    const listItems = numbers.map((number, index) =>
        <>
        <p key={index}>{number}</p>
        </>
    );
    const numRow = numbers.length
    return (
        <>{numRow === '' ? '' : listItems}</>
    );
}

class TaxDictionarySectionModal extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: null,
            data: []
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
        return(
            <>
            <li key={val.id}>
            <a href="#" onClick={() => this.handleShow(val.id)}>{this.props.modalText}</a>
            <Modal className="modal title-description-modal is-visible" show={this.state.show === val.id} onHide={this.handleClose}>
                <div className="modal__overlay"></div>
                <div className="modal__content taxly-box">
                    <TopBottomLeftRight/>
                    <div className="box-content">
                        <Modal.Header closeButton closeLabel="close"></Modal.Header>
                        <div className="modal__body">
                            <h2 className="title">{this.props.modalText}</h2>
                            <div className="description list-items-style">
                                <DescriptionList numbers={this.props.listDescription} />
                                <List numbers={this.props.list} />
                                <DescriptionList1 numbers={this.props.listDescription1} />
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            </li>
            </>
        );
    }
}

const TaxDictionarySection = () => {
    const { t } = useTranslation();
    let taxdictionaryData =  t('taxdictionary.taxdictionaryData.tdData', { returnObjects: true });
    return(
        <section className="site-section">
            <div className="l-container">
                <div className="tax-dictionary popup-title-description">
                    <div className="columns-3 taxly-boxes taxly-boxes-square">
                        {taxdictionaryData.map((val,ind) =>
                        <div key={ind} className="columns-3-item taxly-box taxly-box-white">
                            <div className="box-top-left box-image"></div>
                            <div className="box-top-right box-image"></div>
                            <div className="box-bottom-left box-image"></div>
                            <div className="box-bottom-right box-image"></div>
                            <div className="box-content list-items-style">
                                <h3 className="box-heading">{val.boxHeading}</h3>
                                <ul>
                                    {val.listData.map((subVal, subInd) =>
                                        <TaxDictionarySectionModal
                                        key={subInd}
                                        id={subVal.id}
                                        popupText={subVal.popupText}
                                        modalText={subVal.listTitle}
                                        listDescription={subVal.listDescription}
                                        list={subVal.list}
                                        listDescription1={subVal.listDescription1}
                                    />
                                    )}
                                </ul>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export{TaxDictionaryHeroSection, TaxDictionarySection};