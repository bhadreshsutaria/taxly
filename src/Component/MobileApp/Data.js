import images from "../../Utils/ImageHelper";

const SingleData = {
    heroAppPageHeading: "Tax Submission Built Around Your Life",
    heroAppSubHeading: "It really couldn’t be easier, or faster.",
    heroAppBtnText: "Notify Me",
    comingSoonCardHeading: "Download the app",
    comingSoonCardSubheading : "Download Taxly for free from the App Store & Google Play.",
};

const AppHowItWorkData = [
    {
        extraClass: "",
        img: images.revolutionalOsrBg,
        alt: "revolutional-osr",
        title: "Digitize &amp; Transfer Documents In No Time At All",
        desc: "Intuitive, fast, secure and always available. Snap documents and store them in a secure digital wallet and submit them instantly.",
    },
    {
        extraClass: "flex-reverse relative pdt-40 site-section-line",
        img: images.scanLikeAWindBg,
        alt: "scan-like-a-wind",
        title: "Scan Like The Wind",
        desc: "Digitize paper documents via your smartphone. Single or multi-page document scans with OCR high image processing for maximum readability \n Automatic assignment to your tax return. End-to-end encryption.",
    }
];

const SiteSectionData = [
    {
        extraClass: "taxly-grey-bg",
        heading: "Tax For the 21st Century",
        subHeading: "Taxly's amazing app makes doing your taxes simple, practical and kinda fun!",
        image: images.appScreensBg,
        imgAlt: "app-screens",
    },
    {
        extraClass: "taxly-insight-bg",
        heading: "Removing Financial Complexity Through Personal Insights",
        subHeading: "Add clarity to your personal financial planning with our insights tool.",
        image: images.thirdAppBg,
        imgAlt: "3rd-app",
    },
];

const ComingSoonCardData = [
    {
        title: "Coming soon",
        image: images.appleIcon,
        imgAlt: "apple",
        btnName: "Notify Me",
    },
    {
        title: "Coming soon",
        image: images.androidIcon,
        imgAlt: "android",
        btnName: "Notify Me",
    },
];

export {SingleData, AppHowItWorkData, SiteSectionData, ComingSoonCardData};