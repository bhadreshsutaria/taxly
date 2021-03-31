import React from "react";
import Footer from "../../Layout/Footer";
import {InsightHeroSection, InsightHowItWork, InsightPlanFor, GuidesResources, InsightControl} from "../Insights/Content";
export default function Insights() {
    return (
        <div className="App">
            <InsightHeroSection/>

            {/*BEING How does it work?*/}
            <InsightHowItWork/>
            {/*END How does it work?*/}

            {/*BEING What would you like to plan for?*/}
            <InsightPlanFor />
            {/*END What would you like to plan for?*/}

            {/*BEING Guides & Resources*/}
            <GuidesResources />
            {/*END Guides & Resources*/}

            {/*BEING Take control of your finances*/}
            <InsightControl />
            {/*END Take control of your finances*/}
            
            <Footer/>
        </div>
    )
}