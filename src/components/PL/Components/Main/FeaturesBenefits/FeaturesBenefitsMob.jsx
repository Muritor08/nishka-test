import React from "react";
import image1 from "../../../assets/FeaturesMain/quickdisbursal.png";
import image2 from "../../../assets/FeaturesMain/flexiuse.png";
import image3 from "../../../assets/FeaturesMain/flexitenure.png";
import image4 from "../../../assets/FeaturesMain/minimaldocu.png";
import image5 from "../../../assets/FeaturesMain/unsecured.png";
import image6 from "../../../assets/FeaturesMain/flexiamount.png"

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../../Slide/arrows.component";

const FeaturesBenefitsMob = () => {

  const sliderSettings = {
    
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
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
      src: image1,
      title_1: "Quick",
      title_2: "Disbursal",
      content:
        "Personal loans are generally disbursed quicker than other types of loans. Turnaround times can be as short as a few minutes if you can avail of a pre-approved loan offer.",
    },
    {
      src: image2,
      title_1: "Flexible End",
      title_2: "Use",
      content:
        "Personal loans can be used for multiple purposes, such as to meet expenses of a medical emergency, travel, house renovation, debt consolidation, etc.",
    },
    {
      src: image3,
      title_1: "Flexible",
      title_2: "Tenure",
      content:
        "You can select the duration that best suits your needs. Personal Loans usually come with flexible tenure ranging from 12 months to 60 months. ",
    },
    {
      src: image4,
      title_1: "Minimal",
      title_2: "Documentation",
      content:
        "Personal loans can be available with minimal documentation. Key documents that lenders generally need the applicant to provide include a proof of identity, a proof of address and proof of income.",
    },
    {
      src: image5,
      title_1: "Unsecured",
      title_2: "Loan",
      content:
        "One of the important feature of personal loan is it being an unsecured loan. This means that to avail a personal loan you don’t have to provide any collateral such as a house or a car.",
    },
    {
      src: image6,
      title_1: "Flexible Loan",
      title_2: "Amount",
      content:
        "The personal loan amount that gets disbursed is based on a person's repayment history, monthly income and other factors. Lenders offer personal loans of the amount as low as Rs. 10,000.",
    },
  ];

  return (
    <>
    <div className="tw-block md:tw-hidden">
      <div className=" tw-m-3 tw-border-black tw-shadow-3xl tw-rounded-2xl">
        <div className="tw-border-nishblue-100  md:tw-p-8">
          <div className="tw-h-auto  tw-border-4 tw-rounded-2xl tw-border-solid tw-border-nishblue-100">
            <h1 className="tw-text-xl tw-text-left md:tw-text-2xl lg:tw-text-4xl tw-text-black tw-font-bold tw-py-4 tw-px-6 lg:tw-px-4">
              Features and Benefits
            </h1>
            <div className="tw-ml-8">
              <Slider {...sliderSettings}>
                {features.map((card, index) => (
                  <>
                    <div key={index} className="tw-flex tw-mb-2 md:tw-mb-4 tw-mr-10 tw-py-4 tw-inline-block">
                      <div className="tw-mx-auto tw-ml-6 md:tw-ml-0 tw-w-64 lg:tw-w-80 tw-shadow-md tw-rounded-xl tw-h-56">
                        <div className=" tw-flex tw-flex-row tw-justify-between tw-gap-6 tw-w-1/4 tw-px-4 tw-py-2 tw-rounded-t-xl tw-h-2/5 tw-bg-nishblue-400 tw-w-full">
                          <div
                            style={{
                              background: `url(${card.src})`,
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center",
                              backgroundSize:"cover"
                            }}
                            className=" tw-mt-8 tw-h-16 tw-w-16 tw-rounded-full"
                          ></div>
                          <div className="tw-mt-2 tw-text-right tw-text-lg md:tw-text-xl lg:text-2xl tw-text-white tw-font-bold">
                            <p>
                              {card.title_1} <br /> {card.title_2}
                            </p>
                          </div>
                        </div>
                        <div className="tw-py-2 tw-items-center tw-text-xs md:tw-text-sm tw-text-black tw-rounded-b-xl tw-h-3/5 tw-bg-white tw-w-full">
                          <div className="tw-ml-4 tw--mt-2 md:tw-mt-2">
                            <p className="tw-m-4 tw-text-justify tw-text-xs md:text-sm lg:tw-text-sm">
                              {card.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default FeaturesBenefitsMob;
