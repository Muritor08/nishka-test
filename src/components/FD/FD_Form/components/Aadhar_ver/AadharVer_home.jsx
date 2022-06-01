import React from "react";

//image
import aadhar from "../../assets/aadhar.png";
import step2 from "../../assets/step2.png";
import step2mob from "../../assets/step2mob.png";


//components
import Aadhar_code from "./Aadhar_homeFields";

const Aadhar_ver = () => {
  return (
    <>
      <div className="tw-hidden md:tw-block tw-w-full tw-px-8 tw-pt-8">
        <img src={step2} className="tw-mx-auto tw-w-full" />
      </div>
      <div className="tw-block md:tw-hidden tw-w-full tw-px-2 tw-pt-8">
        <img src={step2mob} className="tw-mx-auto tw-w-full" />
      </div>

      <div className="tw-border-nishblue-100 tw-p-4 md:tw-p-8">
        <div className=" tw-h-auto tw-border-solid tw-rounded-2xl tw-border-nishblue-100">
          <h1 className="tw-font-semibold md:tw-text-5xl tw-text-left tw-text-3xl tw-m-4 tw-ml-10">
            Aadhaar Offline Verification
          </h1>

          <div className="tw-flex tw-flex-col tw-w-full lg:tw-flex-row">
            <div className="lg:tw-w-1/2 tw-text-left tw-w-full">
              <Aadhar_code />
            </div>

            <div className="tw-w-2/5 tw-mx-auto tw-mb-6 tw-hidden lg:tw-block">
              <img src={aadhar} className="tw-mx-auto tw-my-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aadhar_ver;
