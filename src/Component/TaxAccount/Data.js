import React from "react";
import images from "../../Utils/ImageHelper";

const SingleData = {
    taxHeroHeading: 'Calling All Tax Accountants!!',
    taxHeroSubHeading: 'Remove the most time consuming and least value adding part of your business, so you can focus on what really matters – Your clients',
    taxHeroBtnText: 'Apply now',
    taxSoftHeading: 'Advanced cloud based tax software',
    taxSoftSubHeading: 'We have built the most advanced professional tax software in Switzerland. It seamlessly connects you to your clients to quickly and efficiently prepare and process tax returns.',
    taxHIWHeading: 'How it works',
    taxHIWSubHeading: 'Our cutting edge technology makes onboarding, information collection and management, a time-saving and positive experience for you and your clients.',
    taxCuriousHeading: 'Are you curious?',
    taxCuriousSubHeading: 'Join those who are already taking advantage.',
}

const TaxSoftwareSliderData = [
    {
        txImage: images.taxAccountantsOneBg,
        txAlt: "tax-accountants-1",
    },
    {
        txImage: images.taxAccountantsTwoBg,
        txAlt: "tax-accountants-2",
    },
    {
        txImage: images.taxAccountantsThreeBg,
        txAlt: "tax-accountants-3",
    },
];

const taxHowItWorkData = [
    {
        imageUrl: images.taxAccountantsHowOneEnBg,
        imageAlt: 'tax-accountants-how-1-en',
        title: 'Request the information you need',
        description: 'Send a secure and personalized link to your clients, ensuring only relevant information is collected.',
    },
    {
        extraClass: 'flex-reverse',
        imageUrl: images.taxAccountantsHowTwoEnBg,
        imageAlt: 'tax-accountants-how-2-en',
        title: 'Your clients are guided by AI',
        description: 'Our AI TaxBot will guide clients quickly and easily on your requested information.',
    },
    {
        imageUrl: images.taxAccountantsHowThreeEnBg,
        imageAlt: 'tax-accountants-how-3-en',
        title: 'Our technology does its magic',
        description: 'Our AI engine optimises and fills out the tax return, and handles the submission process, so you can focus on your core business.',
    },
];

const TaxOurPriceData = [
    {
        boxListOne: '50 clients',
        boxListTwo: 'Unlimited users',
        boxNumberValue: '500',
        boxNumberAlpha: 'CHF',
    },
    {
        boxListOne: '250 clients',
        boxListTwo: 'Unlimited users',
        boxNumberValue: "1'000",
        boxNumberAlpha: 'CHF',
    },
    {
        boxListOne: '+500 clients',
        boxListTwo: 'Unlimited users',
        boxNumberValue: "2'000",
        boxNumberAlpha: 'CHF',
    },
];
export {SingleData, TaxSoftwareSliderData, taxHowItWorkData, TaxOurPriceData};