import React from "react";
import images from "../Utils/ImageHelper";
import MobileMenu from "../Layout/MobileMenu";
import Navbar from "../Layout/Navbar";
import '../Assets/Css/style.css';
import '../Assets/Css/style_v2.css';

export default function Header() {
    return (
    <div className="header-wrap">
        <MobileMenu/>
        <div className="taxly-hero">
            <Navbar/>
        </div>
    </div>
);
}
