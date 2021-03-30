import images from "../../Utils/ImageHelper";

const SingalData = {
    partnershipTitle: "In partnership with",
    heroHeading: "Complicated is Outdated. Swiss Tax Returns Made Simple.",
    heroDesc: "Create your Swiss tax return in less than 10 minutes",
    heroBtnName: "Get Started",
    heroVidName: "Watch the video",
    logoTitle: "You might’ve heard of us",
    testimonialNote: "A 5 Star Tax Service",
    testimonialTitle: "Over 6'000 Happy Customers",
    testimonialDesc: "Join a community of over 6'000 like-minded individuals who have already submitted their 2019 tax returns with Taxly.",
    TaxlyWorkNote: "Swiss Tax Returns In Just 4 Steps",
    TaxlyWorkTitle: "How Does Taxly Work",
    TaxlyWorkDesc: "Roger is your virtual AI tax assistant. He’ll connect up the dots in your life, analyse your data, and optimize your return in real time down to the penny.",
    TaxlyWorkBtnText: "Additional Support - Our In-House Swiss Tax Advisors Are On Hand",
    TaxlyWorkBtnDesc: "Not every tax situation is the same and we can adapt to your needs. Whenever you need help, one of our Swiss tax advisors will be there to support you. Step by step until the finished tax return.",
    BenefitTaxlyTitle: "Who Can Benefit From Taxly?",
    BenefitTaxlyDesc: "Taxly offers its services to all residents of Switzerland, regardless of your income or nationality.",
    smartPricingTitle: "Smart Pricing For Everyone",
    smartPricingDesc: "We strive for the most competitive prices in Switzerland and thanks to our smart technology, you can create your tax return at an unprecedented price. Examples below.",
    PaymentOptions: "Payment Options: Twint, PayPal, Credit Card, Payment By Invoice",
    yourBusinessNote: "COVID-19 Special For Small Businesses",
    yourBusinessTitle: "We Want To Help Your Business",
    yourBusinessDesc: "Taxly wants to help small businesses in their time of need with special prices for Small Medium Sized Businesses who have been affected by COVID-19.",
    safeHandTitle: "You're In Safe Hands",
    safeHandDesc: "Brought to you by a team of Swiss tax experts and technologists who care deeply about protecting you and your data.",
    appTitle: "Our mobile app for iOS and Android will be available soon",
    appDesc: "Interested? We can keep you up to date.",
    appBtnText: "Sign up to our newsletter",
}

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

const SectionLinkData = [
    [
        {
            extraClass: "good-to-know-section__link",
            pageTarget: "_blank",
            pageLink: "https://www.google.com/maps/place/Taxly+AG/@47.3672655,8.5329657,17z/data=!4m7!3m6!1s0x47900a01fce3e665:0xdc6d8cbf4e9556f3!8m2!3d47.3672655!4d8.5351544!9m1!1b1?hl=en-VN",
            linkText: "Read All Reviews",
        },
    ],
    [
        {
            extraClass: "for-whom-section__link",
            pageTarget: "",
            pageLink: "/faq/",
            linkText: "Questions? (FAQ)",
        },
    ],
    [
        {
            extraClass: "good-to-know-section__link",
            pageTarget: "",
            pageLink: "/faq/",
            linkText: "Questions? (FAQ)",
        },
    ],
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


const BenefitTaxlyData = [ "Expats", "Homeowner", "Freelancers", "Business Owners", "Pensioner", "Disabled"];

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

export {SingalData, Testimonialdata, SectionLinkData, TaxlyWorkData, BenefitTaxlyData, PriceData, PriceBusinessData, SafeHandData};