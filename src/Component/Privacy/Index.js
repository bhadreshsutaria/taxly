import React from "react";
import Faqheader from "../../Layout/Faqheader";
import Footer from "../../Layout/Footer";
import {PrivacyPolicy} from "../Privacy/Content"
export default function Privacy() {
    return (
        <div className="App">
            <Faqheader/>
            <main className="page-content taxly-white taxly-default">
                <PrivacyPolicy/>
            </main>
            <Footer/>
        </div>
    )
}