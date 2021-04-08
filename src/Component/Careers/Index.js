import React from "react";
import Footer from "../../Layout/Footer";
import {CareersHeroSection, CareersJoinTheTeam, CareerCurrentOpp} from "../Careers/Content";
export default function Careers() {
    return (
        <div className="App">
            <CareersHeroSection/>
            <main className="page-content">
                <CareersJoinTheTeam/>
                <CareerCurrentOpp/>
            </main>
            <Footer/>
        </div>
    )
}