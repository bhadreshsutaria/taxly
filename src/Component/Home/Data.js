import images from "../../Utils/ImageHelper";

const Testimonialdata = [
    {
        title: "Intuitive workflow and great customer support!",
        description: '"Intuitive workflow and great customer support! Totally recommend it. Never thought my tax declaration would be such a pleasant experience! Merci Taxly!"',
        name: "Andy Grayshon",
        image: images.andyGrayshonUser,
    },
    {
        title: "Taxes made simple!",
        description: '"So easy to navigate and quick &amp; the team is very reactive for any question. Highly recommend!"',
        name: "Anna Blomkvist",
        image: images.annaBlomkvistUser,
    },
    {
        title: "Very friendly service!",
        description: '"Very friendly service that allows the filing of personal income taxes transparently. The value is in the last mile before the taxpayers and Taxly got it perfectly."',
        name: "Helena Boada",
        image: images.helenaBoadaUser,
    },
];

const TaxlyWorkData = [
    {
        imageSmall: images.hsnOneIcon,
        imageBig: images.hsOneImage,
        name: "Answer a few simple questions",
    },
    {
        imageSmall: images.hsnTwoIcon,
        imageBig: images.hsTwoImage,
        name: "Let Roger make your calculations",
    },
    {
        imageSmall: images.hsnThreeIcon,
        imageBig: images.hsThreeImage,
        name: "Double check your tax return",
    },
    {
        imageSmall: images.hsnFourIcon,
        imageBig: images.hsFourImage,
        name: "And you're done. Time to enjoy",
    },
];

const PriceData = [
    {  
        image: images.priceIconOne,
        note: "Under 25 Years",
        numberValue: "25",
        currency: "CHF",
        priceText: ["Completed Swiss Tax Return" , "Optimised by Roger (AI)", "Shipping to the Tax Office"],
    },
    {  
        image: images.priceIconTwo,
        note: "Family Package",
        numberValue: "49",
        currency: "CHF",
        priceText: ["Completed Swiss Tax Return (For you and your family)" , "Optimised by Roger (AI)", "Shipping to the Tax Office"],
    },
    {  
        image: images.priceIconThree,
        note: "Unemployed Due To COVID-19",
        numberValue: "Free",
        currency: "",
        priceText: ["Free Swiss Tax Return (For you and your family)" , "Optimised by Roger (AI)", "Free Shipping to the Tax Office"],
    },
];

const PriceBusinessData = [
    {  
        image: images.priceIconFour,
        note: "Startups & Small Enterprises",
        numberValue: "500",
        currency: "CHF",
        priceText: ["In-House support" , "Completed tax return", "Tax optimization by Roger (AI) & Certified Tax Advisors (Human)"],
    },
    {  
        image: images.priceIconFive,
        note: "Hotels, Restaurants & Shops",
        numberValue: "450",
        currency: "CHF",
        priceText: ["In-House support" , "Completed tax return", "Tax optimization by Roger (AI) & Certified Tax Advisors (Human)"],
    },
    {  
        image: images.priceIconSix,
        note: "Freelancers",
        numberValue: "350",
        currency: "CHF",
        priceText: ["In-House support" , "Completed tax return", "Tax optimization by Roger (AI) & Certified Tax Advisors (Human)"],
    },
];

const SafeHandData = [
    {
        image: images.iconTaxExperts2x,
        alt: "tax experts",
        sname: "Swiss Tax Experts",
        stext: "Developed by certified Swiss tax experts.",
    },
    {
        image: images.iconEncryption2x,
        alt: "encryption",
        sname: "High Data Security",
        stext: "We take data security as our highest priority.",
    },
    {
        image: images.iconSecurity2x,
        alt: "security",
        sname: "TLS 1.2 Data Encryption",
        stext: "Ensures that no hacking of data is possible.",
    },
    {
        image: images.iconSustainablyCompany2x,
        alt: "sustainably company",
        sname: "Sustainable Company",
        stext: "With Taxly profit & impact are in balance.",
    },
];

export {Testimonialdata, TaxlyWorkData, PriceData, PriceBusinessData, SafeHandData};