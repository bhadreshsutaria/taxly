import React from "react";
import LpHeader from "../../../Layout/LpHeader";
import Footer from "../../../Layout/Footer";
import {PartnersHelvetiaMainSection} from "../PartnersHelvetia/Content";

export default function PartnersHelvetia() {
    return (
        <div className="App">
            <LpHeader/>
            <PartnersHelvetiaMainSection/>
            <Footer/>
        </div>
    );
}