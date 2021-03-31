import React from "react";
import images from "../../Utils/ImageHelper";

const SingleData = {
    heroPageHeading: "Introducing personal insights",
    heroDesc: "Discover tax implications and savings for your future with simple to-the-point resources",
    HowItWorkTitle: "How does it work?",
    HowItWorkDesc: "Life is uncertain. Taxes are even more uncertain. Add clarity to your personal financial planning with our insights.",
    InsightPlanForHeading: "What would you like to plan for?",
    GuidesResourcesHeading: "Guides & Resources",
    GuidesResourcesSubHeading : "Unlock our guides to help you navigate and become more financially savvy.",
    InsightControlHeading: "Take control of your finances",
    InsightControlBtnText: "Get started",
}

const InsightPlanForOptionData = [
    {
        PlanForOptionNumber: "1",
        PlanForOptionTitle: "Running our AI script",
        PlanForOptionDesc: "We can analyse your tax data.",
        PlanForOptionImage: images.insightsIconAi,
        PlanForOptionAlt: "insights-icon-ai",
    },
    {
        PlanForOptionNumber: "2",
        PlanForOptionTitle: "Total savings per year",
        PlanForOptionDesc: "Detailed breakdowns of savings or liabilities.",
        PlanForOptionImage: images.insightsIconSavings,
        PlanForOptionAlt: "insights-icon-savings",
    },
    {
        PlanForOptionNumber: "3",
        PlanForOptionTitle: "Optimise further",
        PlanForOptionDesc: "With our partners, we can offer you better financial products to save you more money.",
        PlanForOptionImage: images.insightsIconOffers,
        PlanForOptionAlt: "insights-icon-offers",
    },
];

const InsightPFOListData = [
    {
        InsightPSImage: images.insightsHomeIcon,
        InsightPSAlt: "insights-home",
        InsightPSTitle: "Buying a home",
    },
    {
        InsightPSImage: images.insightsMortgageIcon,
        InsightPSAlt: "insights-mortgage",
        InsightPSTitle: "Remortgage",
    },
    {
        InsightPSImage: images.insightsChildrenIcon,
        InsightPSAlt: "insights-children",
        InsightPSTitle: "Having children",
    },
    {
        InsightPSImage: images.insightsMarriedIcon,
        InsightPSAlt: "insights-married",
        InsightPSTitle: "Getting married",
    },
    {
        InsightPSImage: images.insightsRetirementIcon,
        InsightPSAlt: "insights-retirement",
        InsightPSTitle: "Retirement",
    },
    {
        InsightPSImage: images.insights3aIcon,
        InsightPSAlt: "insights-3a",
        InsightPSTitle: "Buying into a 3A",
    },
    {
        InsightPSImage: images.insightsCarIcon,
        InsightPSAlt: "insights-car",
        InsightPSTitle: "Leasing a car",
    },
    {
        InsightPSImage: images.insightsBusinessIcon,
        InsightPSAlt: "insights-business",
        InsightPSTitle: "Starting a business",
    },
    {
        InsightPSImage: images.insightsLifeInsuranceIcon,
        InsightPSAlt: "insights-life-insurance",
        InsightPSTitle: "Buying insurance",
    },
    {
        InsightPSImage: images.insightsCantonIcon,
        InsightPSAlt: "insights-canton",
        InsightPSTitle: "Canton change",
    },
    {
        InsightPSImage: images.insightsDivorceIcon,
        InsightPSAlt: "insights-divorce",
        InsightPSTitle: "Getting a divorce",
    },
    {
        InsightPSImage: images.insightsMoreIcon,
        InsightPSAlt: "insights-more",
        InsightPSTitle: "...More",
    },
];

const GuidesResourcesData = [
    {
        grdImage: images.managerIcon,
        grdAlt: "icon-manager",
        grdText: "How do wealth managers work?",
    },
    {
        grdImage: images.investIcon,
        grdAlt: "icon-invest",
        grdText: "Start investing like the top 1%",
    },
    {
        grdImage: images.artIcon,
        grdAlt: "icon-art",
        grdText: "Investing in art and precious metals",
    },
    {
        grdImage: images.incomeIcon,
        grdAlt: "icon-income",
        grdText: "Managing major income",
    },
    {
        grdImage: images.houseIcon,
        grdAlt: "icon-house",
        grdText: "Investing in Swiss property",
    },
    {
        grdImage: images.chooseIcon,
        grdAlt: "icon-choose",
        grdText: "Choosing an investment provider",
    },
];

export {SingleData, InsightPlanForOptionData, InsightPFOListData, GuidesResourcesData};