import React from "react";
import images from "../../Utils/ImageHelper";
import Footer from "../../Layout/Footer";
import {ApiHeroSection, LimitlessPossibilities} from "../API/Content";

export default function API() {
    return (
        <div className="App taxly-dark">
            
            <ApiHeroSection />
            
            <main className="page-content api">
                {/*BEING Limitless possibilities*/}
                <LimitlessPossibilities />
                {/*END Limitless possibilities*/}

                {/*BEING How it works*/}
                <section className="site-section">
                    <div className="l-container">
                        <h2 className="site-section__heading">How it works</h2>
                        <div className="site-section__subheading">
                            <p>We offer different levels of integration with our API, all highly customizable to your specific needs.</p>
                        </div>
                        <div className="howitworks-module module-single-column">
                            <div className="columns-2 text-left taxly-image-text">
                                <div className="columns-2-item">
                                    <img src={images.apivis} alt="vis" />
                                </div>
                                <div className="columns-2-item">
                                    <h3>Offer your financial products to our customers</h3>
                                    <p>Our insights and financial planning tool gives access to relevant customers who are actively looking for financial products or services.</p>
                                </div>
                            </div>
                            <div className="columns-2 text-left taxly-image-text flex-reverse">
                                <div className="columns-2-item">
                                    <img src={images.apivisOne} alt="vis1" />
                                </div>
                                <div className="columns-2-item">
                                    <h3>Integrate our risk &amp; evaluation widget</h3>
                                    <p>Are you a tax accountant looking to help your customers evaluate their financial situation? Our widget can evaluate the tax risk and financial impact of typical financial choices in life.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*END How it works*/}

                {/*BEING Partnership opportunities*/}
                <section className="site-section">
                    <div className="l-container">
                        <h2 className="site-section__heading">Partnership opportunities</h2>
                        <div className="site-section__subheading">
                            <p>We‘re always open to new ideas. Let’s discuss how customers can benefit from combining Taxly with your products or services.</p>
                        </div>
                        <div className="interest-areas-module">
                            <div className="columns-2 taxly-boxes">
                                <div className="columns-2-item taxly-box taxly-box-white">
                                    <div className="box-top-left box-image"></div>
                                    <div className="box-top-right box-image"></div>
                                    <div className="box-bottom-left box-image"></div>
                                    <div className="box-bottom-right box-image"></div>
                                    <div className="box-content">
                                        <img src={images.apiFinanceIcon} alt="api-finance" />
                                        <h3>Financial services</h3>
                                        <p>Help your customers take control of their finances and taxes with a few clicks.</p>
                                    </div>
                                </div>
                                <div className="columns-2-item taxly-box taxly-box-white">
                                    <div className="box-top-left box-image"></div>
                                    <div className="box-top-right box-image"></div>
                                    <div className="box-bottom-left box-image"></div>
                                    <div className="box-bottom-right box-image"></div>
                                    <div className="box-content">
                                        <img src={images.apiRealestateIcon} alt="api-real-estate" />
                                        <h3>Real estate</h3>
                                        <p>Help your customers understand the risks and tax impact before they purchase.</p>
                                    </div>
                                </div>
                                <div className="columns-2-item taxly-box taxly-box-white">
                                    <div className="box-top-left box-image"></div>
                                    <div className="box-top-right box-image"></div>
                                    <div className="box-bottom-left box-image"></div>
                                    <div className="box-bottom-right box-image"></div>
                                    <div className="box-content">
                                        <img src={images.apiInsuranceIcon} alt="api-insurance" />
                                        <h3>Insurance &amp; banking</h3>
                                        <p>Offer your services to our customers through our personal insights tool.</p>
                                    </div>
                                </div>
                                <div className="columns-2-item taxly-box taxly-box-white">
                                    <div className="box-top-left box-image"></div>
                                    <div className="box-top-right box-image"></div>
                                    <div className="box-bottom-left box-image"></div>
                                    <div className="box-bottom-right box-image"></div>
                                    <div className="box-content">
                                        <img src={images.apiCommerceIcon} alt="api-commerce" />
                                        <h3>Commerce</h3>
                                        <p>Let your customers take advantage of financial insights.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*END Partnership opportunities*/}

                {/*BEING Let’s talk*/}
                <section className="site-section open-door">
                    <div className="open-door-bg"><img src={images.apiopenDoor} alt="open-door" /></div>
                    <div className="l-container">
                        <h2 className="site-section__heading">Let’s talk</h2>
                        <div className="site-section__subheading">
                            <p>Excite customers with Taxly’s powerful API. We can’t wait to hear from you!</p>
                        </div>
                        <a href="#" className="btn btn-large hero__cta js-show-dark-modal">I'm interested</a>
                    </div>
                </section>
                {/*END Let’s talk*/}
            </main>
            <Footer/>
            <div className="modal invite-modal dark-modal taxly-dark">
                <div className="modal__overlay"></div>
                <div className="modal__content taxly-box">
                    <div className="box-top-left box-image"></div>
                    <div className="box-top-right box-image"></div>
                    <div className="box-bottom-left box-image"></div>
                    <div className="box-bottom-right box-image"></div>
                    <div className="box-content">
                        <div className="modal__close js-hide-modal">Close</div>
                        <div className="modal__body">
                            <div className="text-center">
                                <div className="screen-reader-response">
                                    <p role="status" aria-live="polite" aria-atomic="true"></p>
                                </div>
                                <form className="init">
                                    <h2>Let's get you started using our API!</h2>
                                    <p>Apply for early access and we'll get back to you.</p>
                                    <div className="form__group">
                                        <label>Full name*</label><input type="text" name="full-name" className="form__control" id="full-name-taxacc" aria-required="true" aria-invalid="false" />
                                    </div>
                                    <div className="form__group">
                                        <label>Email*</label><input type="email" name="email" className="form__control" id="email-taxacc" aria-required="true" aria-invalid="false" />
                                    </div>
                                    <div className="form__group">
                                        <label>Company</label><input type="text" name="company" className="form__control" id="company-taxacc" aria-invalid="false" />
                                    </div>
                                    <div className="form__group">
                                        <label>Website</label><input type="text" name="company" className="form__control" id="website-api" aria-invalid="false" />
                                    </div>
                                    <div className="form__group">
                                        <label>Tell us how you want to use our service</label><textarea name="message" cols="40" rows="4" className="form__control" id="message-api" aria-invalid="false"></textarea>
                                    </div>
                                    <div className="form__group">
                                        <p className="form-label">*Required field</p>
                                    </div>
                                    <p><input type="submit" value="Sign up now" className="btn form__submit" /></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}