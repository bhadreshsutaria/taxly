import React from "react";
import Homeheader from "../../Layout/Homeheader";
import Footer from "../../Layout/Footer";
import {Testimonial, LogoSection , TaxlyWork, VariableHeight, BenefitTaxly, SmartPricing, YourBusiness, SafeHand, AppSection} from "../Home/Content";
import {DarkModal, VideoModal} from "../Modal/Modal";

export default function Home() {
    return (
        <div className="App home">
            <Homeheader/>
            {/* BEGIN press logos section */}
            <LogoSection />
            {/* END press logos section */}

            {/* BEGIN Over 6'000 Happy Customers section */}
            <Testimonial />
            {/* END Over 6'000 Happy Customers section */}

            {/* BEGIN How Does Taxly Work section */}
            <TaxlyWork />
            {/* END How Does Taxly Work section */}

            {/* BEGIN Who Can Benefit From Taxly? section */}
            <BenefitTaxly />
            {/* END Who Can Benefit From Taxly? section */}

            {/* BEGIN Smart Pricing For Everyone section */}
            <SmartPricing />
            {/* END Smart Pricing For Everyone section */}

            {/* BEGIN We Want To Help Your Business section */}
            <YourBusiness />
            {/* END We Want To Help Your Business section */}

            {/* BEGIN You're In Safe Hands section */}
            <SafeHand />
            {/* BEGIN You're In Safe Hands section */}

            {/* BEGIN App Section */}
            <AppSection />
            {/* End App Section */}
            
            <Footer />
            <VideoModal />
            <DarkModal />
            
        </div>
    )
}