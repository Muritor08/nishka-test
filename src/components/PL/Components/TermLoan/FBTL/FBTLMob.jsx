import React from "react";
// import bajajfin from "../../../assets/FeaturesTL/1.png";
import bajajfinmob from "../../../assets/bajajimg.png";
// import Carousel from "react-responsive-carousel";
// import image1 from "../../../assets/FeaturesTL/1.png";
// import image2 from "../../../assets/FeaturesTL/2.png";
// import image3 from "../../../assets/FeaturesTL/3.png";
// import image4 from "../../../assets/FeaturesTL/4.png";
// import image5 from "../../../assets/FeaturesTL/5.png";
// import image6 from "../../../assets/FeaturesTL/6.png";
// import image7 from "../../../assets/FeaturesTL/7.png";
// import image8 from "../../../assets/FeaturesTL/8.png";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../../Slide/arrows.component";


const FBTLMob = () => {

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
      heading: "45%* lower EMIs with Flexi Loan",
      content:
        "Repay with interest-only EMIs and reduce your monthly instalments with our Flexi facility.",
      imgmob: bajajfinmob
    },
    {
      heading: "24 hours* disbursal",
      content:
        "With a simple online application process, get money in your bank account on the same day of approval*.",

      imgmob: bajajfinmob
    },
    {
      heading: "Approval in 5 minutes",
      content: "Meet our basic eligibility criteria and get instant approval.",

      imgmob: bajajfinmob
    },
    {
      heading: "Repay over 60 months",
      content:
        "Pick a convenient tenor ranging from one to five years to repay your loan.",

      imgmob: bajajfinmob
    },
    {
      heading: "No collateral required",
      content:
        "No guarantors or collateral needed to get approval on your loan application.",

      imgmob: bajajfinmob
    },
    {
      heading: "No extra charges* on part-prepayment",
      content:
        "Pre-pay your loan with surplus funds at no added cost with a Flexi loan.",

      imgmob: bajajfinmob
    },
    {
      heading: "Special offers for pre-approved customers",
      content:
        "Our existing cutomers enjoy quicker processing with special offers and a range of benefits.",

      imgmob: bajajfinmob
    },
    {
      heading: "Personal loan EMIs starting Rs. 1,104/lakh",
      content:
        "Borrow as per your needs and manage your personal loan EMIs with ease.",

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
                  Be it planned or unplanned expenses, urgent or elective needs,
                  borrow a personal loan from Bajaj Finserv to enjoy instant
                  approval. The Bajaj Finserv Personal Loan is an instant personal
                  loan that requires no collateral or security. Use it for any
                  purpose or to meet any goal without restriction. Common uses of
                  an instant personal loan include financing medical treatment,
                  home improvement, weddings, travel, or education.
                </p>
                <p className="tw-m-4 tw-ml-5 ">
                  Get up to Rs. 25 lakh with minimal documents by meeting simple
                  eligibility criteria and get the money you need in your bank
                  within 24 hours. Choose a repayment term that suits you and
                  repay the loan with ease. Pre-pay the loan at any time without
                  any added fees.
                </p>
                <p className="tw-m-4 tw-ml-5 ">
                  You can also take advantage of our Flexi loan facility to
                  withdraw and pre-pay funds within your loan limit as per your
                  needs. What's more, you can choose to pay interest-only EMIs for
                  the first portion of the tenor to reduce your EMIs by up to
                  45%*.
                </p>
                <p className="tw-m-4 tw-ml-5 ">
                  Fast processing, minimal paperwork, and zero collateral make our
                  instant personal loan a smart choice for Indian professionals. A
                  competitive interest rate and no hidden charges make repayment
                  easier too. To get quicker access to funds, check your
                  pre-approved offer from Bajaj Finserv.
                </p>
                <p className="tw-m-4 tw-mb-10 tw-ml-5 ">* Conditions apply</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};


export default FBTLMob;
