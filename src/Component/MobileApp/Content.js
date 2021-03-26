import React from "react";

const Card = (props) => {
  return (
    <>
    <div className={`columns-2 text-left taxly-image-text ${props.extraClass}`}>
          <div className="columns-2-item">
              <img src={props.img} alt={props.alt} />
          </div>
          <div className="columns-2-item">
              <h3>{props.title}</h3>
              <p>{props.desc}</p>
          </div>
      </div>
    </>
    );
}; 
const Heading = (props) => {
    return (
      <>
        <h2 className="site-section__heading">{props.heading}</h2>
      </>
    );
};
const SubHeading = (props) => {
    return (
      <>
        <div className="site-section__subheading">{props.subHeading}</div>
      </>
    );
};

const IconsModuleOne = (props) => {
  return (
    <>
      <div className="icons-module how-module">
        <div className="columns-1">
            <div className="columns-1-item">
                <img className="pdt-40" src={props.image} alt={props.imgAlt} />
            </div>
        </div>
      </div>
    </>
  );
};

const ComingSoonCard= (props) => {
  return (
    <>
      <div className="columns-2-item taxly-box taxly-box-white">
          <div className="box-top-left box-image"></div>
          <div className="box-top-right box-image"></div>
          <div className="box-bottom-left box-image"></div>
          <div className="box-bottom-right box-image"></div>
          <div className="box-content">
              <h3>{props.title}</h3>
              <div className="columns-2-item">
                  <img src={props.image} alt={props.imgAlt} />
              </div>
              <a href="#" className="btn btn-large hero__cta js-show-dark-modal">{props.btnName}</a>
          </div>
      </div>
    </>
  );
};

export default Heading;
export {Card ,SubHeading, IconsModuleOne, ComingSoonCard};