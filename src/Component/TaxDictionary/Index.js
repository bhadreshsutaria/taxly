import React from "react";
import Footer from "../../Layout/Footer";
import {TaxDictionaryHeroSection, TaxDictionarySection} from "../TaxDictionary/Content"
export default function TaxDictionary() {
    return (
        <div className="App">
            <TaxDictionaryHeroSection/>
            <main className="page-content">
                <TaxDictionarySection/>
            </main>
            <Footer/>
        </div>
    )
}