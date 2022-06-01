import React from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../../Slide/arrows.component";

const EligibilityCriteriaMob = () => {
  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
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
      criteria: "Age",
      content:
        "The minimum and maximum age to avail Personal Loan is 20 and 60 years respectively. However, many banks requires a minimum age of 21 years.  ",
    },
    {
      criteria: "Loan Amount",
      content:
        "You can get a personal loan of upto Rs 75 Lakh, subject to your eligibility, which is calculated based on your net take-home salary. Some banks usually limit the maximum eligibility to 10 - 27 times of net monthly income.",
    },
    {
      criteria: "Employment",
      content:
        "Salaried persons working in government, private, or MNC companies can avail of a personal loan by submitting relevant proofs such as ITR and salary slips.",
    },
    {
      criteria: "Work Experience",
      content:
        "The minimum work experience may vary in banks. However, banks prefer individuals with job stability with at least 3 years of total experience and 6 - 12 months of current work experience.",
    },
    {
      criteria: "Credit Score",
      content:
        "Many lenders link the interest rate with your credit score. Higher the credit score, lower the interest rate.",
    },
    {
      criteria: "Geographic Location",
      content:
        "The area in which you reside plays a crucial role in determining whether or not you will qualify for a personal loan. In cities where the cost of living is high the minimum salary requirement is higher than cities with low cost of living.",
    },
  ];

  return (
    <>
      <div className="tw-block md:tw-hidden">
        <div className=" tw-m-3 tw-border-black tw-shadow-3xl tw-rounded-2xl">
          <div className="tw-border-nishblue-100  md:tw-p-8">
            <div className="tw-h-auto  tw-border-4 tw-rounded-2xl tw-border-solid tw-border-nishblue-100">
              <h1 className="tw-text-xl tw-text-left md:tw-text-2xl lg:tw-text-4xl tw-text-black tw-font-bold tw-mb-6 tw-py-4 tw-px-6 lg:tw-px-4">
                Eligibility Criteria
              </h1>
              <div>
                <Slider {...sliderSettings}>
                  {features.map((card, index) => (
                    <>
                      <div
                        key={index}
                        className="tw-w-3/4 tw-mx-auto tw-ml-12 tw-h-56 tw-my-4 tw-border-2 tw-border-solid tw-p-4 tw-rounded-2xl tw-border-nishblue-400 tw-flex tw-flex-row tw-items-center"
                      >
                        <div className="tw-my-auto tw--ml-16 tw-h-24 tw-w-24 tw-bg-nishblue-400 tw-rounded-full tw-text-center">
                          <div className="">
                            <h1 className=" tw-items-center tw-text-xs tw-font-black tw-p-4 tw-mt-4 text-white">
                              {card.criteria}
                            </h1>
                          </div>
                        </div>
                        <div className=" tw-text-xs tw-w-5/6 tw-pl-6">
                          <p className="">{card.content}</p>
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

export default EligibilityCriteriaMob;
