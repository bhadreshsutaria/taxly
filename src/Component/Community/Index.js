import React from "react";
import Footer from "../../Layout/Footer";
import {CommunityHeroSection, CommunityStorySection} from '../Community/Content';

export default function Community() {
    return (
        <div className="App">
            <CommunityHeroSection/>
            <main className="page-content">
                <CommunityStorySection/>
            </main>
            <Footer/>
        </div>
    )
}