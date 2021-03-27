import React from "react";

const FaqTab = (props) =>{
    return(
        <div className={`taxly-box ${props.extraClass === '' ? '':  props.extraClass}`}>
            <div className="box-top-left box-image"></div>
            <div className="box-top-right box-image"></div>
            <div className="box-bottom-left box-image"></div>
            <div className="box-bottom-right box-image"></div>
            <div className="box-content">
                <a href="#" className="page-navigation__item js-about-us-tab">
                    <div className="page-navigation__item-text">{props.tabName}</div>
                </a>
            </div>
        </div>
    );
};

const PageHeading = (props) =>{
    return(
        <h2 className="page-heading">{props.headingTitle}</h2>
    );
};

const SubHeading = (props) =>{
    return(
        <h3 className="site-section-line">{props.subTitle}</h3>
    );
};
const PageDescription = (props) =>{
    return(
        <p>{props.description}</p>
    );
};
export default FaqTab;
export {PageHeading, SubHeading, PageDescription};