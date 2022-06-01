import React from "react";

//image
import aadhar from "../../assets/aadhar.png";
import step2 from "../../assets/step2.png";

//components
import Aadhar_otpFields from "./Aadhar_otpFields";

const Aadhar_otp = () => {
  return (
    <>
      <div className="tw-w-full tw-px-8 tw-pt-8">
        <img src={step2} className="tw-mx-auto tw-w-full" />
      </div>

      <div className="tw-border-nishblue-100 tw-p-4 md:tw-p-8">
        <div className=" tw-h-auto tw-border-2 tw-border-solid tw-rounded-2xl tw-border-nishblue-100">
          <h1 className="tw-font-semibold tw-text-left tw-text-2xl md:tw-text-5xl tw-m-4 tw-ml-10">
            Aadhaar Offline Verification
          </h1>

          <div className="tw-flex tw-w-full">
            <div className="lg:tw-w-1/2">
              <Aadhar_otpFields />
            </div>

            <div className="tw-hidden lg:tw-block tw-w-1/2">
              <img src={aadhar} className="tw-m-auto tw-my-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aadhar_otp;
