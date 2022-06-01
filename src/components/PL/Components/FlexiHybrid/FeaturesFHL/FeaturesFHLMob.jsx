import React from "react";
import bajajfinmob from "../../../assets/bajajimg.png";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../../Slide/arrows.component";

const FeaturesFHLMob = () => {

  const sliderSettings = {

    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    dots:true,
    infinite: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const features = [
    {
      heading: "Borrow when you need",
      content:
        "Withdraw funds as many times as you need from your approved loan limit.",
      // route: "/FixedDeposits/bajaj",
      imgmob: bajajfinmob
    },
    {
      heading: "24 hours* disbursal",
      content:
        "With a simple online application process, get money in your bank account on the same day of approval*.",
      // route: "/bajaj"
      imgmob: bajajfinmob
    },
    {
      heading: "Prepay when you can",
      content: "Deposit funds into your loan account whenever you have surplus money.",
      // route: "/bajaj"
      imgmob: bajajfinmob
    },
    {
      heading: "No extra charges",
      content:
        "Withdraw funds and prepay them without paying any fee whatsover.",
      // route: "/bajaj"
      imgmob: bajajfinmob
    },
    {
      heading: "No added applications",
      content:
        "Skip having to put in additional paperwork when you withdraw or prepay funds.",
      // route: "/bajaj"
      imgmob: bajajfinmob
    },
    {
      heading: "Online Transactions",
      content:
        "Use our customer portal - Experia, to transfer funds from your loan limit to your loan account and make prepayments.",
      // route: "/bajaj"
      imgmob: bajajfinmob
    },
    {
      heading: "Interest-only EMIs",
      content:
        "Opt to pay only interest as your EMI for the first part of he tenor and the principal later, to reduce your EMI by up to 45%.*",
      // route: "/bajaj"
      imgmob: bajajfinmob
    },
    {
      heading: "Day-wise interest",
      content:
        "Incur interest only on what you utilize by the end of the day. Use the Flexi Interest calculator for insights.",
      // route: "/bajaj"
      imgmob: bajajfinmob
    },
  ];

  return (
    <>
    <div className="tw-block md:tw-hidden">
      <div className="tw-m-3 tw-border-black tw-shadow-3xl tw-rounded-2xl">
        <div className="tw-border-nishblue-100  md:tw-p-8">
          <div className="tw-h-auto tw-p-2 tw-border-4 tw-rounded-2xl tw-border-solid tw-border-nishblue-100">
            <h1 className="tw-text-xl tw-text-left md:tw-text-2xl lg:tw-text-4xl tw-text-black tw-font-bold tw-py-4 tw-px-6 lg:tw-px-4">
              Features and Benefits of Bajaj Finserv Personal Loan
            </h1>
            <div className="tw-text-center">
            <Slider {...sliderSettings}>
                  {features.map((card, index) => (
                    <>
                      <div key={index} className="tw-m-4 tw-border-black tw-shadow-3xl tw-rounded-xl tw-w-full md:tw-w-5/6 tw-mx-auto">
                        <div className="tw-border-solid tw-border-nishblue-100 tw-border-4 tw-bg-transparent tw-h-24 tw-border-2 tw-rounded-xl tw-border-nishblue-100 tw-w-full">
                          <div className=" tw-w-full tw-h-full tw-flex tw-flex-row tw-flex-start tw-items-center tw-text-xs">
                            <div className="">
                              <img className="tw-w-full tw-h-full" src={card.imgmob} />
                            </div>
                            <div className=" tw-w-3/4 tw-flex tw-flex-col">
                              <div className="tw-font-semibold">{card.heading}</div>
                              <div className="">{card.content}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </Slider>
            </div>
            <div className="tw-w-full tw-text-justify tw-mx-auto tw-text-xs md:tw-text-sm xl:tw-text-xl">
              <p className="tw-m-4 tw-mt-12 tw-ml-5 ">
                Flexi loans by Bajaj Finserv are the new way of borrowing funds in India. You get a pre-approved loan limit based on your credit profile and can use it to meet your funding needs on the go. You can withdraw funds from this limit whenever you need finance and can prepay them whenever you have surplus money in hand. You pay interest only on what you withdraw from your loan limit and not on the entire sanction. This way you can address your ever-evolving needs on a case-to-case basis. Interest is charged at the end of the day and you can use the Flexi Day-Wise Interest Calculator to use the loan optimally.
              </p>
              <p className="tw-m-4 tw-ml-5 ">
                We do not charge anything extra for each withdrawal and part-prepayment you make. So, you can foreclose your loan ahead of schedule to save on your interest outgo. Similarly, we do not ask for additional paperwork for withdrawals and part-prepayments. You can simply transact online, and borrow and deposit funds, through our customer portal - Experia.
              </p>
              <p className="tw-m-4 tw-ml-5 ">
                Our Flexi personal loans are available for salaried individuals, self-employed individuals, professionals, and businessmen. We have simple eligibility criteria and require a basic set of documents to approve of your loan.
              </p>
              <p className="tw-m-4 tw-ml-5 ">
                A unique Flexi loan feature is that you can choose to pay just the interest component of your EMI for the initial part of the tenor. You can pay the principal later. This reduces your instalments by up to 45%.* Interest-only EMIs can help you ease your way into repayment and accommodate EMIS into a tight budget. You can also spread out repayment over 84 months** and make the loan even more affordable.
              </p>
              <p className="tw-m-4 tw-ml-5 ">
                Flexi Personal Loans are ideal for situations where the expenses are ad-hoc in nature, such as home renovation, a wedding, or travel or when you aren't sure of your funding needs.
              </p>
              <p className="tw-m-4 tw-mb-10 tw-ml-5 ">* Conditions apply <br/>**Applicable for Flexi Hybrid loans</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};


export default FeaturesFHLMob;
