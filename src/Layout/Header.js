import React from "react";
import MobileMenu from "../Layout/MobileMenu";
import Navbar from "../Layout/Navbar";
import '../Assets/Css/style.css';
import '../Assets/Css/style_v2.css';

export default function Header() {
    return (
    <div className="header-wrap hero__inner__white">
        <MobileMenu/>
        <div className="taxly-hero">
            <Navbar/>
        </div>
    </div>
    );
}
