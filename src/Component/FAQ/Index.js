import React from "react";
import Faqheader from "../../Layout/Faqheader";
import Footer from "../../Layout/Footer";
import {FaqContent} from "../FAQ/Content";

export default function FAQ() {
    return (
        <div className="App">
            <Faqheader/>
            <FaqContent />
            <Footer/>
        </div>
    )
}