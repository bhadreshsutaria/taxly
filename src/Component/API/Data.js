import images from "../../Utils/ImageHelper";

const SingleData = {
    apiHeroHeading: "Introducing the taxly API",
    apiHeroDescription: "An easy way for you and your customers to take advantage of taxly’s ground-breaking technology",
    apiHeroBtnName: "I'm interested",
    limitlessPHeading: "Limitless possibilities",
    limitlessPSubHeading: "An application programming interface is a computing interface to a software component or a system, that defines how other components or systems can use it.",
    apiHowItWorkHeading: "How it works",
    apiHowItWorkSubHeading: "We offer different levels of integration with our API, all highly customizable to your specific needs.",
    apiPHeading: "Partnership opportunities",
    apiPSubHeading: "We‘re always open to new ideas. Let’s discuss how customers can benefit from combining Taxly with your products or services.",
    apiLetsTalkheading: "Let’s talk",
    apiLetsTalkSubheading: "Excite customers with Taxly’s powerful API. We can’t wait to hear from you!",
};

const LimitlessPData = [
    {
        lPImage: images.apiscreenOne,
        lPAlt: "screen-1",
    },
    {
        lPImage: images.apiscreenTwo,
        lPAlt: "screen-2",
    },
    {
        lPImage: images.apiscreenThree,
        lPAlt: "screen-3",
    },
];

const ApiHowItWorkData = [
    {
        image: images.apivis,
        imgAlt: "vis",
        title: "Offer your financial products to our customers",
        description: "Our insights and financial planning tool gives access to relevant customers who are actively looking for financial products or services.",
    },
    {
        extraClass: "flex-reverse",
        image: images.apivisOne,
        imgAlt: "vis1",
        title: "Integrate our risk & evaluation widget",
        description: "Are you a tax accountant looking to help your customers evaluate their financial situation? Our widget can evaluate the tax risk and financial impact of typical financial choices in life.",
    },
];

const ApiPartnershipData = [
    {
        apiImage: images.apiFinanceIcon,
        apiAlt: "api-finance",
        apiPartnershipTitle: "Financial services",
        apiPartnershipDesc: "Help your customers take control of their finances and taxes with a few clicks.",
    },
    {
        apiImage: images.apiRealestateIcon,
        apiAlt: "api-real-estate",
        apiPartnershipTitle: "Real estate",
        apiPartnershipDesc: "Help your customers understand the risks and tax impact before they purchase.",
    },
    {
        apiImage: images.apiInsuranceIcon,
        apiAlt: "api-insurance",
        apiPartnershipTitle: "Insurance & banking",
        apiPartnershipDesc: "Offer your services to our customers through our personal insights tool.",
    },
    {
        apiImage: images.apiCommerceIcon,
        apiAlt: "api-commerce",
        apiPartnershipTitle: "Commerce",
        apiPartnershipDesc: "Let your customers take advantage of financial insights.",
    },
];

export {SingleData, LimitlessPData, ApiHowItWorkData, ApiPartnershipData};