import React, { useState } from "react";
import Faqheader from "../../Layout/Faqheader";
import Footer from "../../Layout/Footer";
export default function FAQ() {
    return (
        <div className="App">
            <Faqheader/>
            <main className="page-content page-content--about hero-none taxly-white taxly-default faq">
                <section className="main-wrapper">
                    <div className="l-container l-container--content">
                        <aside className="page-navigation">
                            <div className="taxly-box selected">
                                <div className="box-top-left box-image"></div>
                                <div className="box-top-right box-image"></div>
                                <div className="box-bottom-left box-image"></div>
                                <div className="box-bottom-right box-image"></div>
                                <div className="box-content">
                                    <a href="#" className="page-navigation__item js-about-us-tab">
                                        <div className="page-navigation__item-text">About Us</div>
                                    </a>
                                </div>
                            </div>
                            <div className="taxly-box">
                                <div className="box-top-left box-image"></div>
                                <div className="box-top-right box-image"></div>
                                <div className="box-bottom-left box-image"></div>
                                <div className="box-bottom-right box-image"></div>
                                <div className="box-content">
                                    <a href="#" className="page-navigation__item js-about-us-tab">
                                        <div className="page-navigation__item-text">How it works</div>
                                    </a>
                                </div>
                            </div>
                            <div className="taxly-box">
                                <div className="box-top-left box-image"></div>
                                <div className="box-top-right box-image"></div>
                                <div className="box-bottom-left box-image"></div>
                                <div className="box-bottom-right box-image"></div>
                                <div className="box-content">
                                    <a href="#" className="page-navigation__item js-about-us-tab">
                                        <div className="page-navigation__item-text">Tax stuff</div>
                                    </a>
                                </div>
                            </div>
                            <div className="taxly-box">
                                <div className="box-top-left box-image"></div>
                                <div className="box-top-right box-image"></div>
                                <div className="box-bottom-left box-image"></div>
                                <div className="box-bottom-right box-image"></div>
                                <div className="box-content">
                                    <a href="#" className="page-navigation__item js-about-us-tab">
                                        <div className="page-navigation__item-text">Documents</div>
                                    </a>
                                </div>
                            </div>
                            <div className="taxly-box">
                                <div className="box-top-left box-image"></div>
                                <div className="box-top-right box-image"></div>
                                <div className="box-bottom-left box-image"></div>
                                <div className="box-bottom-right box-image"></div>
                                <div className="box-content">
                                    <a href="#" className="page-navigation__item js-about-us-tab">
                                        <div className="page-navigation__item-text">Data protection</div>
                                    </a>
                                </div>
                            </div>
                            <div className="taxly-box">
                                <div className="box-top-left box-image"></div>
                                <div className="box-top-right box-image"></div>
                                <div className="box-bottom-left box-image"></div>
                                <div className="box-bottom-right box-image"></div>
                                <div className="box-content">
                                    <a href="#" className="page-navigation__item js-about-us-tab">
                                        <div className="page-navigation__item-text">Charity/Social impact</div>
                                    </a>
                                </div>
                            </div>
                        </aside>
                        <div className="about-content">
                            <div className="about-content__wrapper">
                                <div className="about-content-tab-item list-items-style">
                                    <h2 className="page-heading">What is taxly?</h2>
                                    <p>Taxly is an online service which allows you to quickly and easily create an optimised tax return.</p>
                                    <h3 className="site-section-line">How long is the preparation of the tax return?</h3>
                                    <p>Taxly’s AI will guide you through some simplified tax return questions based on your personal situation, the process should take around 10 minutes.</p>
                                    <p>For more complex cases, it can take between 15 and 20 minutes.</p>
                                    <h3 className="site-section-line">How is taxly different from that of a traditional cantonal tax software?</h3>
                                    <p>Cantonal softwares such as EasyTax, PrivateTax, BalTax or GeTax were developed primarily to speed up the internal process of the authorities and to help their users fill in their tax.</p>
                                    <p>Taxly is the first tax return technology in Switzerland which has ease of use and customer satisfaction as its primary goal. Our team constantly reviews our product to make sure that our flows are simplified and easy to understand, while making sure that tax law is followed.</p>
                                    <p>Furthermore, any court decisions or changes in cantonal laws are immediately implemented in taxly, which in some cases takes years to be implemented in traditional cantonal software.</p>
                                    <p>Finally, this software was prepared to take advantage of all available deductions in the cantonal law and practise, which is not systematically the case when you prepare your tax return with a cantonal software, often resulting in 100s of Francs in taxes being wasted.</p>
                                    <h3 className="site-section-line">When can I expect taxly to be available in my country?</h3>
                                    <p>Taxly has huge global ambitions, and we are preparing for additional country launches in 2022, in addition our B2B platform and global insights.</p>
                                    <h3 className="site-section-line">How can I reach you guys?</h3>
                                    <p>You can get in touch with our team by simply clicking the &#8216;Help&#8217; button on the lower right corner of this page. You can also log into your taxly dashboard and click on the chat icon. If you are considering taxly, we’d love to hear from you.</p>
                                    <h3 className="site-section-line">What does being a B-Corp mean?</h3>
                                    <p>Certified B Corporations are a new kind of business that balance purpose and profit. They are legally required to consider the impact of their decisions on their workers, customers, suppliers, community, and the environment.</p>
                                    <p>We believe these are important values and have therefore deliberately chosen to be a B-Corp.</p>
                                    <h3 className="site-section-line">Where is taxly based?</h3>
                                    <p>Taxly AG is located in Zurich, one of the financial capitals of the world. We are registered at the Zurich commercial registry, registrations number CHE-253.409.943, Stockerstrasse 38, 8002 Zurich, Switzerland.</p>
                                    <h3 className="site-section-line">Who is behind taxly?</h3>
                                    <p>Taxly has been built by a mix of Certified Swiss Tax Experts and seasoned technology entrepreneurs.</p>
                                </div>
                                <div className="about-content-tab-item list-items-style">
                                    <h2 className="page-heading">How does it work?</h2>
                                    <p>The full taxly experience is available through our website and on mobile browsers. Soon we will also offer a native mobile app with additional benefits. Taxly has completely rethought the Swiss Tax process from a customer&#8217;s point of view in order to make it simple, easy to understand, and fully optimized.</p>
                                    <p>Simply answer some questions and our AI will fully optimize your personal tax situation.</p>
                                    <p>If your tax situation is more complex we will pair you with one of our inhouse Swiss Certified Tax Experts who will personally go through your tax return.</p>
                                    <h3 className="site-section-line">How much does it cost?</h3>
                                    <p>This depends on your individual circumstance. We try and offer our services at very attractive rates.</p>
                                    <h3 className="site-section-line">What if in the end I see a mistake in my tax return?</h3>
                                    <p>That’s no problem, simply log into your dashboard and click on the EDIT link on your completed tax return, make the adjustment and we can re-issue you a new version.</p>
                                </div>
                                <div className="about-content-tab-item list-items-style">
                                    <h2 className="page-heading">Which tax years are covered by taxly?</h2>
                                    <p>Taxly offers to file for the 2019 tax year and onwards.</p>
                                    <h3 className="site-section-line">Which tax cases are not covered by taxly?</h3>
                                    <p>Taxly trys to support all possible cantons and situations by pairing you with one of our inhouse Swiss Certified Tax Experts when there is more complexity.</p>
                                    <h3 className="site-section-line">Which cantons are covered by taxly?</h3>
                                    <p>Taxly offers its straight through services for residents of the following cantons: Zurich, Aargau, Basel-Land, St. Gallen, Bern, Basel-Stadt, Luzerne. For all the other cantons we match you with our inhouse Swiss Certified Tax Experts who will do the tax return for you on a more personal basis.</p>
                                </div>
                                <div className="about-content-tab-item list-items-style">
                                    <h2 className="page-heading">When do I receive my salary certificate?</h2>
                                    <p>Your employer has to prepare it for you and you should have received it no later than mid- to end of February of the following year.</p>
                                    <h3 className="site-section-line">Where do I find my bank statements?</h3>
                                    <p>Most banks are now not sending their tax statements per post but rather have it online on the electronic banking platform. You should look for statements for all your bank and financial accounts as of 31.12 of the previous year.</p>
                                    <h3 className="site-section-line">Where do I find insurance policy statements?</h3>
                                    <p>Insurance companies offering life insurance policies and indeed any kind of insurance policy are mandated to send an overview for tax purposes every year. These are usually sent by post to your home address at the beginning of the year. If you have not received anything, we advise you to contact your insurance company.</p>
                                    <h3 className="site-section-line">What kind of receipts can I use for deductions?</h3>
                                    <p>In general, for most deductions, proof of payment is sufficient. We suggest therefore attaching a proof of payment from your bank along with the corresponding invoice.</p>
                                    <h3 className="site-section-line">How much tax will I have to pay?</h3>
                                    <p>Taxly does not currently support in the first version the computation of the amount of taxes and therefore cannot inform on your tax liability. We plan on including this function for the 2020 tax year.</p>
                                    <h3 className="site-section-line">I already have an accountant doing my taxes, how can I switch to taxly?</h3>
                                    <p>Quite simply! You have to contact your accountant and tell him/her you are doing your taxes from now on with your own solution. They will then have to inform the authorities that all information be rerouted directly to you and they will send you all the information we require for you to fill your taxes, including the tax form.</p>
                                    <h3 className="site-section-line">Further information</h3>
                                    <p>or further information related to Swiss tax, you can visit our tax dictionary page.</p>
                                </div>
                                <div className="about-content-tab-item list-items-style">
                                    <h2 className="page-heading">Is my information kept confidential?</h2>
                                    <p>Very much so! We highly value and respect your privacy (see our Privacy Policy). We will not share or sell your information to any third parties for any purpose.</p>
                                    <h3 className="site-section-line">Who has access to my data?</h3>
                                    <p>Data security is our top priority. Only you can view your data. All data and uploaded receipts are stored and encrypted at all times. Your data will only be processed via an encrypted Internet connection. Detailed information on data protection and our measures to ensure data security can be found in our data protection regulations.</p>
                                    <h3 className="site-section-line">Can I delete my account and data?</h3>
                                    <p>Yes, you can completely delete your tax data from your user account at any time. Please note that in this case it is no longer possible to restore your data.</p>
                                    <p>Read more about Data Protection and Privacy here.</p>
                                </div>
                                <div className="about-content-tab-item list-items-style">
                                    <h2 className="page-heading">What is it about?</h2>
                                    <p>We strongly believe that Climate Change is the most pressing issue of our time. In its current form, industry grows at the expense of the planet. For us and our community, there is a real desire to be able to engage in actions for the environment, even as a start up and for profit-business.</p>
                                    <p>We are a young company. Alone, we might not make a large impact. But could it be as simple as just asking other startups to join us? We think it might. There are many startups already doing incredible things to give back. Bigger and better than we might hope to right now.</p>
                                    <p>This is not about positioning ourselves above, or shaming those who don’t participate, but is intended to be a positive and encouraging call to action for those who agree that we could be doing better.</p>
                                    <h3 className="site-section-line">How does it work?</h3>
                                    <p>We will be supporting a charity focused on climate change / environmental impact. For every donation made by our customers, we will match it.</p>
                                    <p>We will be campaigning on social, onsite and in the press. Spreading the word about our customers and those start-ups who join the movement.</p>
                                    <p>We hope that this may be the first of many collaborations between customers and corporations to come and make a change for the better.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    )
}