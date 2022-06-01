import React from "react";
// import image from "../../../assets/mainhero.png";
import image1 from "../../../assets/FeaturesMain/quickdisbursal.png";
import image2 from "../../../assets/FeaturesMain/flexiuse.png";
import image3 from "../../../assets/FeaturesMain/flexitenure.png";
import image4 from "../../../assets/FeaturesMain/minimaldocu.png";
import image5 from "../../../assets/FeaturesMain/unsecured.png";
import image6 from "../../../assets/FeaturesMain/flexiamount.png"


const FeaturesBenefits = () => {
  const features = [
    {
      src: image2,
      title_1: "Loan Upto",
      title_2: "Rs.30 Lakhs",
      content:
        "Fulfill a wide variety of your business needs.",
    },
    {
      src: image1,
      title_1: "Loan Tenure of",
      title_2: "5 Years",
      content:
        "Vastly extend credit relief of your business.",
    },
    {
      src: image3,
      title_1: "Interest Rate",
      title_2: "at 12.75% p.a.",
      content:
        "Repay as per your invoicing cycle.",
    },
  ];

  return (
    <>
      <div className="tw-hidden md:tw-block tw-m-3 tw-border-black tw-shadow-3xl tw-rounded-2xl">
        <div className="tw-border-nishblue-100  md:tw-p-8">
          <div className="tw-h-auto  tw-border-4 tw-rounded-2xl tw-border-solid tw-border-nishblue-100">
            <h1 className="tw-text-xl tw-text-left md:tw-text-2xl lg:tw-text-4xl tw-text-black tw-font-bold tw-py-4 tw-px-6 lg:tw-px-4">
              Features and Benefits
            </h1>
            <div className="tw-flex tw-flex-row tw-gap-2 tw-flex-wrap tw-items-center tw-justify-center">
            {features.map((data) => {
              return <Benefits data={data}> </Benefits>;
            })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Benefits = (props) => {
  const { src, title_1, title_2, content } = props.data;

  return (

      <div className="tw-flex tw-mb-2 md:tw-mb-4 tw-mr-10 tw-py-4 tw-inline-block">
      <div className="tw-mx-auto tw-ml-6 md:tw-ml-0 tw-w-64 lg:tw-w-80 tw-shadow-md tw-rounded-xl tw-h-48 ">
        <div className=" tw-flex tw-flex-row tw-justify-between tw-gap-6 md:tw-gap-4 tw-w-1/4 tw-px-4 tw-py-2 tw-rounded-t-xl tw-h-2/4 tw-bg-nishblue-400 tw-w-full">
          <div
            style={{
              background: `url(${src})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize:"cover"
            }}
            className=" tw-mt-10 tw-h-16 tw-w-16 tw-rounded-full"
          >
          </div>
          <div className="tw-mt-2 tw-text-right tw-text-lg md:tw-text-xl lg:tw-text-2xl tw-text-white tw-font-bold">
            <p >
              {title_1} <br /> {title_2}
            </p>
          </div>
        </div>
        <div className="tw-py-2 md:tw-py-1 lg:tw-py-2 tw-items-center tw-text-xs md:tw-text-sm tw-text-black tw-rounded-b-xl tw-h-2/4 tw-bg-white tw-w-full">
          <div className="tw-ml-4 tw--mt-2 md:tw-p-6">
            <p className="tw-m-2 tw-text-justify tw-text-xs md:tw-text-sm lg:tw-text-base">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesBenefits;
