import React from "react";
import Footer from "../../Layout/Footer";
import {ApiHeroSection, LimitlessPossibilities, ApiHowItWork, ApiPartnership, ApiLetsTalk} from "../API/Content";
export default function API() {
    return (
        <div className="App taxly-dark">
            <ApiHeroSection />
            <main className="page-content api">
                {/*BEING Limitless possibilities*/}
                <LimitlessPossibilities />
                {/*END Limitless possibilities*/}

                {/*BEING How it works*/}
                <ApiHowItWork />
                {/*END How it works*/}

                {/*BEING Partnership opportunities*/}
                <ApiPartnership />
                {/*END Partnership opportunities*/}

                {/*BEING Let’s talk*/}
                <ApiLetsTalk />
                {/*END Let’s talk*/}
            </main>
            <Footer/>
        </div>
    )
}