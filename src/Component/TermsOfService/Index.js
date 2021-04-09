import React from "react";
import Faqheader from "../../Layout/Faqheader";
import Footer from "../../Layout/Footer";
import {TermsOfService} from "../TermsOfService/Content"
export default function Terms() {
    return (
        <div className="App">
            <Faqheader/>
            <main className="page-content taxly-white taxly-default">
                <TermsOfService/>
            </main>
            <Footer/>
        </div>
    )
}