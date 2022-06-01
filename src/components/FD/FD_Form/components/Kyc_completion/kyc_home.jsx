import React from "react";

//image
import kyc from "../../assets/kyc.png";
import step2 from "../../assets/step2.png";
import step2mob from "../../assets/step2mob.png";


//components
import Kyc_code from "./kyc_homeFields";

const Kyc_HomePage = () => {
  return (
    <>
      <div className="tw-hidden md:tw-block tw-w-full tw-px-8 tw-pt-8">
        <img src={step2} className="tw-mx-auto tw-w-full" />
      </div>
      <div className="tw-block md:tw-hidden tw-w-full tw-px-2 tw-pt-8">
        <img src={step2mob} className="tw-mx-auto tw-w-full" />
      </div>

      <div className="tw-border-nishblue-100 tw-p-4 tw-mx-auto md:tw-p-8">
        <div className=" tw-h-auto tw-border-solid tw-rounded-2xl tw-border-nishblue-100">
          <h1 className="tw-font-bold md:tw-text-4xl tw-text-2xl tw-text-left tw-m-4 md:tw-ml-10 md:tw-w-3/4 tw-text-nishblue-400">
            Help us identify you better
          </h1>

          <div className="tw-flex tw-w-full">
            <div className="lg:tw-w-1/2 tw-w-full">
              <Kyc_code />
            </div>

            <div className="tw-w-2/5 tw-mx-auto tw-hidden lg:tw-block">
              <img src={kyc} className="tw-mx-auto tw-my-auto" />
            </div>
          </div>

          <div>
            <h1 className="tw-font-bold tw-text-lg tw-text-left tw-text-gray-800 tw-m-4 lg:tw-ml-20 md:tw-ml-16 tw-ml-8 lg:tw-w-3/5 tw-w-5/6">
              Note:{" "}
            </h1>
            <h1 className="tw-font-semibold tw-text-lg tw-text-gray-700 tw-m-4 tw-mb-10 lg:tw-ml-20 md:tw-ml-16 tw-ml-8 lg:tw-w-3/5 tw-w-5/6 tw-text-justify">
              On the day of maturity, your maturity amount will be directly
              credited into your bank account as per the details shared by you.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kyc_HomePage;
