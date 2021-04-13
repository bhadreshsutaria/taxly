import React from "react";
import Footer from "../../Layout/Footer";
import {HeroApp, AppHowItWork, SiteSection, ComingSoonCard} from "../MobileApp/Content";
export default function App() {
    return (
        <div className="App">
            <HeroApp />
            <main className="page-content">
                <AppHowItWork />
                <SiteSection />
                <ComingSoonCard />
            </main>
            <Footer/>
        </div>
    )
}