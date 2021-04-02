import React from "react";
import Footer from "../../Layout/Footer";
import {CharityHeroSection, CharityWhoWithUs, CharityOurPlan, CharityBCorp, CharityJoinThe} from "../Charity/Content";
export default function Charity() {
    return (
        <div className="App">
            <CharityHeroSection/>
            <main className="page-content">
                {/*BEING Who’s with us?*/}
                <CharityWhoWithUs/>
                {/*END Who’s with us?*/}

                {/*BEING Our plan*/}
                <CharityOurPlan/>
                {/*END Our plan*/}

                {/*BEING B-Corp*/}
                <CharityBCorp/>
                {/*END B-Corp*/}

                {/*BEING Join the movement*/}
                <CharityJoinThe />
                {/*END Join the movement*/}
            </main>
            <Footer/>
        </div>
    )
}