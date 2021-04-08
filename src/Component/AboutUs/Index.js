import React from "react";
import Footer from "../../Layout/Footer";
import {AboutUsHeroSection, AboutUsOurMission, AboutUsManagementTeam, AboutUsInvestorsAndAdvisors} from "../AboutUs/Content";
export default function AboutUs() {
    return (
        <div className="App">
            <AboutUsHeroSection/>
            <main class="page-content">
                <AboutUsOurMission/>
                <AboutUsManagementTeam/>
                <AboutUsInvestorsAndAdvisors/>
            </main>
            <Footer/>
        </div>
    )
}