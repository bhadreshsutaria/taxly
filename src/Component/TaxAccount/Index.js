import React from "react";
import Footer from "../../Layout/Footer";
import {TaxAccountantsHeroSection, TaxSoftwareSlider, TaxHowItWork, TaxOurPrice, TaxCurious} from "../TaxAccount/Content";

export default function TaxAccount() {
    return (
        <div className="App taxly-dark">
            <TaxAccountantsHeroSection/>
            <main className="page-content tax-acc">
                <TaxSoftwareSlider/>
                <TaxHowItWork/>
                <TaxOurPrice/>
                <TaxCurious/>
            </main>
            <Footer/>
        </div>
    )
}