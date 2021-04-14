import React , {useState} from "react";
import images from "../../Utils/ImageHelper";
import MobileMenu from "../../Layout/MobileMenu";
import Navbar from "../../Layout/Navbar";
import Modal from "react-modal";
import {DarkModal, TopBottomLeftRight} from "../Modal/Modal";
import { useTranslation } from "react-i18next";

const HeroApp = () => {
    const [isOpen, setIsOpen] = useState(false);
    function toggleModal() {
        setIsOpen(!isOpen);
    }
    const { t } = useTranslation();
    return (
    <div className="hero__inner app-page">
        <MobileMenu 
            extraClass="taxly-mobile-menu-fixed_white" 
            menuBtnClass="taxly-mobile-menu-button_white"
            menuBGColorClass="taxly-mobile-menu_white"
        />
        <div className="taxly-hero taxly-hero_bg taxly-hero_bg-white" style={{ backgroundImage: `url(${images.TaxlyAppBg})` }}>
            {/* <div className="taxly-hero-city-bg"></div> */}
            <Navbar/>
            {/* <div className="taxly-hero-bg-green"></div> */}
            <div className="hero site-section padding-bottom-none l-container in-viewport">
                {/* <div className="taxly-hero-bg"></div>
                <div className="taxly-hero-bird-back" style={{ backgroundImage: `url(${images.homeBackBg})` }}></div>
                <div className="taxly-hero-curve-green"><img src={images.taxlyHeroCurveDarkBg} alt="taxly-hero-curve-dark" /></div>
                <div className="taxly-hero-bird-front" style={{ backgroundImage: `url(${images.appFrontOneBg})` }}></div>
                <div className="taxly-hero-bird"></div> */}
                <div className="hero__wrapper">
                    <div className="l-container l-container--content">
                        <h1 className="page-heading">{t('mobileapp.SingleData.heroAppPageHeading')}</h1>
                        <p>{t('mobileapp.SingleData.heroAppSubHeading')}</p>
                        <button className="btn btn-large hero__cta" onClick={toggleModal}>{t('mobileapp.SingleData.notifyMeModalText')}</button>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}; 

const AppHowItWork = () => {
    const { t } = useTranslation();
    let AppHowItWorkData =  t('mobileapp.AppHowItWorkData.data', { returnObjects: true });
    return(
      <section className="site-section no-title">
          <div className="l-container">
              <div className="howitworks-module app-first-module">
                    {AppHowItWorkData.map((val, ind) =>
                        <div key={ind} className={`columns-2 text-left taxly-image-text ${val.extraClass}`}>
                            <div className="columns-2-item">
                                <img src={val.img} alt={val.alt} />
                            </div>
                            <div className="columns-2-item">
                                <h3>{val.title}</h3>
                                <p>{val.desc}</p>
                            </div>
                        </div>
                    )}
              </div>
          </div>
      </section>
    );
};

const SiteSection = () => {
    const { t } = useTranslation();
    let SiteSectionData =  t('mobileapp.SiteSectionData.data', { returnObjects: true });
	return(
		<>
		{SiteSectionData.map((val, ind) =>
		<section key={ind} className={`site-section ${val.extraClass === '' ? '':  val.extraClass}`}>
                <div className="l-container">
				<h2 className="site-section__heading">{val.heading}</h2>
				<div className="site-section__subheading">{val.subHeading}</div>
				<div className="icons-module how-module">
					<div className="columns-1">
						<div className="columns-1-item">
							<img className="pdt-40" src={val.image} alt={val.imgAlt} />
						</div>
					</div>
				</div>
			</div>
		</section>
		)}
		</>
	);
};

// const AppDarkModal = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     function toggleModal() {
//         setIsOpen(!isOpen);
//     }
//     const { t } = useTranslation();
//     return(
//         <>
//         <button className="btn btn-large hero__cta" onClick={toggleModal}>{t('mobileapp.SingleData.notifyMeModalText')}</button>
//         <Modal className="modal invite-modal dark-modal taxly-dark is-visible" isOpen={isOpen} onRequestClose={toggleModal}>
//             <div className="modal__overlay"></div>
//             <div className="modal__content taxly-box">
//                 <TopBottomLeftRight />
//                 <div className="box-content">
//                     <div className="modal__close" onClick={toggleModal}>Close</div>
//                     <DarkModal />
//                 </div>
//             </div>
//         </Modal>
//         </>
//     );
// };

const ComingSoonCard= () => {
    const { t } = useTranslation();
    let ComingSoonCardData =  t('mobileapp.ComingSoonCardData.data', { returnObjects: true });
    const [isOpen, setIsOpen] = useState(false);
    function toggleModal() {
        setIsOpen(!isOpen);
    }
    return (
    <>
		<section className="site-section apps-bottom-module site-section-line">
			<div className="l-container">
				<div className="top-image">
					<img src={images.tBackground1xLogo} alt="t-background1x" />
				</div>
				<h2 className="site-section__heading">{t('mobileapp.SingleData.comingSoonCardHeading')}</h2>
				<div className="site-section__subheading">{t('mobileapp.SingleData.comingSoonCardSubheading')}</div>
				<div className="prices-module">
					<div className="columns-2 taxly-boxes taxly-boxes-square">
						{ComingSoonCardData.map((val, ind) =>
							<div key={ind} className="columns-2-item taxly-box taxly-box-white">
								<div className="box-top-left box-image"></div>
								<div className="box-top-right box-image"></div>
								<div className="box-bottom-left box-image"></div>
								<div className="box-bottom-right box-image"></div>
								<div className="box-content">
									<h3>{val.title}</h3>
									<div className="columns-2-item">
										<img src={val.image} alt={val.imgAlt} />
									</div>
                                    <button className="btn btn-large hero__cta" onClick={toggleModal}>{val.btnName}</button>
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

export {HeroApp, AppHowItWork, SiteSection, ComingSoonCard};