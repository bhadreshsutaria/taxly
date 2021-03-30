import React from "react";
import Footer from "../../Layout/Footer";
import {HeroSection, HIWColumns2, NutShell, TaxReturn} from "../HowItWorks/Content";

export default function HowItWorks() {
    return (
        <div className="App">
            <HeroSection />
            <HIWColumns2 />
            {/* BEING In a nutshell */}
            <NutShell /> 
            {/* END In a nutshell */}
            {/* BEING Get your tax return in 10 minutes */}
            <TaxReturn />
            {/* END Get your tax return in 10 minutes */}
            <Footer/>
        </div>
    )
}