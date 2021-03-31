import React from "react";
import Footer from "../../Layout/Footer";
import {HeroApp, AppHowItWork, SiteSection, ComingSoonCard} from "../MobileApp/Content";
import DarkModal from "../Modal/Modal";
export default function App() {
    return (
        <div className="App">
            <HeroApp />
            <AppHowItWork />
            <SiteSection />
            <ComingSoonCard />
            <Footer/>
            <DarkModal />
        </div>
    )
}